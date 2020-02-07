/*
 * This file is part of basis-input-masking lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import NumberMask from 'bbj-masks/src/NumberMask'

const countDecimals = value => {
  if (value % 1 != 0) {
    const split = value.toString().split('.')
    if (split.length === 2) return split[1].length
  }
  return 0
}

/**
 * The `NumberInput` will wrap text inputs and apply the given [bbj Number mask](https://github.com/BasisHub/bbj-masks#number-masks)
 *
 * **Options**
 *
 * _Options can be passed via data attributes . For data attributes, append the option name to data-, as in data-mask_
 *
 * | Option    | Default | Description                                                                                             |
 * |-----------|---------|---------------------------------------------------------------------------------------------------------|
 * | mask |         | The bbj number mask @see [BBj Number Masks](https://github.com/BasisHub/bbj-masks#number-masks) |
 * | min |         | The maximum value to accept for this input|
 * | max |         | The minimum value to accept for this input|
 * | step |         | A stepping interval to use when using up and down arrows to adjust the value, as well as for validation|
 * |grouping-separator | , | a char which will be used as a grouping separator |
 * |decimal-separator | . | a char which will be used as a decimal separator |
 * |force-trailing-zeros | false | Affects the output by switching the way a mask with "#" characters in the trailing positions is filled. for example, the function NumberMask.mask(.10:"#.##") returns .10 instead of .1|
 *
 *  <br>
 *
 * **Example :**
 * ```html
 *  <input class="bbj-number-masked" name="test" id="test" value="1234" data-mask="##,##0">
 *
 *  <script>
 *    document.addEventListener('DOMContentLoaded', function (e) {
 *      new Basis.InputMasking.NumberInput({
 *
 *         // @param {String} valueMasked  masked value
 *         // @param {Number} valueUnmasked  original value
 *         // @param {HTMLInputElement} input the actual input instance
 *         onUpdate: (valueMasked, valueUnmasked, input, isApplied, isInitial) => {
 *            // do something
 *         },
 *
 *         // @param {String|Object} error last occurred error. could be mask error or validation error
 *         // @param {HTMLInputElement} input the actual input instance
 *         onInvalid: (err , input) => {
 *            // do something
 *         }
 *      })
 *    })
 *  </script>
 * ```
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */
class NumberInput {
  /**
   * Construct new NumberInput
   *
   * @param {?Object} options - The input options.
   * @param {HTMLElement|String} [options.elements=".bbj-number-masked"] - The class name or the node to use
   * @param {HTMLDocument} [options.document=document] - Document instance to use
   * @param {String} [options.cssClassError="bbj-mask-error"] - A css class to attach to the input when it is invalid
   * @param {String} [options.cssClassSuccess="bbj-mask-success"] - A css class to attach to the input when it is valid after the user interaction
   * @param {Function} [options.onUpdate=null] - A callback to be called on the new masked value is set
   * @param {Function} [options.onInvalid=null] - A callback to be called on the input or the mask is invalid
   */
  constructor(options = {}) {
    this.options = {
      ...{
        elements: '.bbj-number-masked',
        doc: document,
        cssClassError: 'bbj-mask-error',
        cssClassSuccess: 'bbj-mask-success',
        onUpdate: null,
        onInvalid: null,
      },
      ...options,
    }

    this._actualInputHandler = this._actualInputHandler.bind(this)
    this._unmaskedInputHandler = this._unmaskedInputHandler.bind(this)
    this.refresh()
  }

  /**
   * Initialize the component and wrap the input elements for masking in case
   * they are not wrapped yet
   */
  refresh() {
    const elements =
      typeof this.options.elements === 'string'
        ? this.options.doc.querySelectorAll(this.options.elements)
        : this.options.elements
    let input, parentClass

    for (let i = 0; i < elements.length; i++) {
      input = elements[i]
      if (input instanceof HTMLInputElement) {
        parentClass = input.parentNode.getAttribute('class')

        if (!input.getAttribute('id')) {
          console.warn(
            `BBjMasking: Input has no ID. Without an ID the input cannot be masked`,
            input
          )
          continue
        }

        // we don't initialize the input's wrap twice
        const isWrapped =
          parentClass && parentClass.indexOf('numberInputMask__wrap') > -1
        this._wrap(input, isWrapped)
      } else {
        console.warn(
          `BBjMasking: Invalid input element. The element will be ignored`,
          input
        )
      }
    }
  }

  /**
   * Unwrap the input elements and remove attached listeners
   */
  destroy() {
    const elements =
      typeof this.options.elements === 'string'
        ? this.options.doc.querySelectorAll(this.options.elements)
        : this.options.elements

    let input, parent, parentClass

    for (let i = 0; i < elements.length; i++) {
      input = elements[i]
      parent = input.parentNode
      parentClass = parent.getAttribute('class')

      if (parentClass && parentClass.indexOf('numberInputMask__wrap') > -1) {
        this._unwrap(parent)
      }
    }
  }

  /**
   * Create the number masking input wrapper
   *
   * @param {HTMLInputElement} actualInput the input element
   * @param {Boolean} isWrapped when true the input is already wrapped and we need to add what is
   *                            missing only
   *
   * @returns {HTMLSpanElement} wrapper instance
   *
   * @protected
   */
  _wrap(actualInput, isWrapped) {
    const actualInputId = actualInput.getAttribute('id'),
      actualInputName = actualInput.getAttribute('name'),
      actualInputStep = actualInput.dataset.step || null,
      actualInputMax = actualInput.dataset.max || null,
      actualInputMin = actualInput.dataset.min || null,
      actualInputGroupingSeparator =
        actualInput.dataset.groupingSeparator || ',',
      actualInputDecimalSeparator = actualInput.dataset.decimalSeparator || '.',
      actualInputForceTrailingZeros =
        actualInput.dataset.forceTrailingZeros || null,
      actualInputMask = actualInput.dataset.mask || '',
      actualInputClasses = actualInput.getAttribute('class'),
      actualInputRequired = actualInput.getAttribute('required') || null

    let wrap = null,
      unmaskedInput = null

    if (!isWrapped) {
      wrap = this.options.doc.createElement('span')
      unmaskedInput = this.options.doc.createElement('input') // hidden input with the unmasked values for forms
    } else {
      wrap = actualInput.parentNode
      unmaskedInput = wrap.querySelector('.numberInputMask__unmaskedInput')
    }

    // configure the actual input
    // -----------------------------------------------------
    if (!isWrapped) {
      actualInput.parentNode.insertBefore(wrap, actualInput) // move the input outside the wrapper
      if (
        !(
          actualInput.hasAttribute('readonly') ||
          actualInput.hasAttribute('disabled')
        )
      ) {
        actualInput.addEventListener('click', this._actualInputHandler)
        actualInput.addEventListener('focusin', this._actualInputHandler)
      }
    }

    actualInput.dataset.valueUnmasked = actualInput.value || 0
    actualInput.dataset.groupingSeparator = actualInputGroupingSeparator
    actualInput.dataset.decimalSeparator = actualInputDecimalSeparator
    actualInput.dataset.forceTrailingZeros = actualInputForceTrailingZeros
    actualInput.value = NumberMask.mask(
      actualInput.dataset.valueUnmasked,
      actualInputMask,
      actualInputGroupingSeparator,
      actualInputDecimalSeparator,
      actualInputForceTrailingZeros
    ).trim()
    actualInput.classList.add(
      'numberInputMask__textInput',
      this.options.cssClassSuccess
    )

    // configure the unmasked input
    // ----------------------------------------------------
    unmaskedInput.value = actualInput.dataset.valueUnmasked
    unmaskedInput.setAttribute('aria-hidden', 'true')
    unmaskedInput.setAttribute('type', 'hidden')
    unmaskedInput.setAttribute('class', actualInputClasses)
    if (actualInputId)
      unmaskedInput.setAttribute('id', `${actualInputId}-unmasked`)
    if (actualInputName)
      unmaskedInput.setAttribute('name', `${actualInputName}-unmasked`)
    if (actualInputRequired) unmaskedInput.setAttribute('required', 'required')

    if (actualInputStep) unmaskedInput.setAttribute('step', actualInputStep)
    else {
      const decimals = countDecimals(unmaskedInput.value)
      let step = '1'
      if (decimals > 0) {
        step = `.${Array(decimals).join('0')}1`
      }

      unmaskedInput.setAttribute('step', step)
    }

    if (actualInputMin) unmaskedInput.setAttribute('min', actualInputMin)
    if (actualInputMax) unmaskedInput.setAttribute('max', actualInputMax)
    unmaskedInput.dataset.inputId = actualInputId
    unmaskedInput.dataset.mask = actualInputMask
    unmaskedInput.dataset.groupingSeparator = actualInputGroupingSeparator
    unmaskedInput.dataset.decimalSeparator = actualInputDecimalSeparator
    if (actualInputForceTrailingZeros)
      unmaskedInput.dataset.forceTrailingZeros = actualInputForceTrailingZeros

    if (!isWrapped) {
      unmaskedInput.classList.add('numberInputMask__unmaskedInput')
      unmaskedInput.addEventListener('keydown', this._unmaskedInputHandler)
      unmaskedInput.addEventListener('focusout', this._unmaskedInputHandler)

      // configure the wrapper
      wrap.setAttribute('class', 'numberInputMask__wrap')
      wrap.appendChild(unmaskedInput)
      wrap.appendChild(actualInput)
    }

    if (!isNaN(Number(actualInput.dataset.valueUnmasked))) {
      if (this._validateInput(unmaskedInput, actualInput)) {
        this.__fireOnUpdate(
          actualInput.value,
          actualInput.dataset.valueUnmasked,
          actualInput
        )
      }
    } else {
      actualInput.classList.add(this.options.cssClassError)
    }

    return wrap
  }

  /**
   * Unwrap the masked input and remove the value changed listener
   *
   * @param {HTMLSpanElement} textInput the wrapper span instance
   *
   * @protected
   */
  _unwrap(textInput) {
    textInput.removeChild(
      textInput.querySelector('.numberInputMask__unmaskedInput')
    )

    const input = textInput.querySelector('.numberInputMask__textInput')
    input.removeEventListener('click', this._actualInputHandler)
    input.removeEventListener('focusin', this._actualInputHandler)
    input.classList.remove('numberInputMask__textInput')
    input.classList.remove(this.options.cssClassError)
    input.classList.remove(this.options.cssClassSuccess)
    delete input.dataset.valueUnmasked

    textInput.parentNode.insertBefore(input, textInput)
    textInput.parentNode.removeChild(textInput)
  }

  /**
   * Listen to click and focusin event on the actual input and toggle the number input
   *
   * @param {Event} e
   *
   * @protected
   */
  _actualInputHandler(e) {
    const actualInput = e.target,
      actualInputId = actualInput.id,
      unmaskedInput = this.options.doc.querySelector(
        `#${actualInputId}-unmasked`
      )

    actualInput.setAttribute('aria-hidden', 'true')
    actualInput.setAttribute('type', 'hidden')

    unmaskedInput.removeAttribute('aria-hidden')
    unmaskedInput.setAttribute('type', 'number')
    this._validateInput(unmaskedInput, actualInput)
    setTimeout(() => {
      unmaskedInput.focus()
      this._validateInput(unmaskedInput, actualInput)
    })
  }

  /**
   * Listen to the unmasked input keydown and focusout events and check
   * if the input value can be masked or not
   *
   * @param {Event} e
   *
   * @protected
   */
  _unmaskedInputHandler(e) {
    const unmaskedInput = e.target,
      type = e.type,
      keyCode = e.keyCode,
      mask = unmaskedInput.dataset.mask,
      groupingSeparator = unmaskedInput.dataset.groupingSeparator,
      decimalSeparator = unmaskedInput.dataset.decimalSeparator,
      forceTrailingZeros = unmaskedInput.dataset.forceTrailingZeros,
      actualInputId = unmaskedInput.dataset.inputId,
      actualInput = this.options.doc.querySelector(`#${actualInputId}`)

    let restore = false,
      apply = false,
      maskedValue = false,
      isValid = this._validateInput(unmaskedInput, actualInput)

    try {
      maskedValue = NumberMask.mask(
        unmaskedInput.value || 0,
        mask,
        groupingSeparator,
        decimalSeparator,
        forceTrailingZeros,
        false
      ).trim()
    } catch (e) {
      maskedValue = false
      this.__applyCssClassState(unmaskedInput, actualInput, 'error')
      this.__fireOnInvalid(e, actualInput)
    }

    switch (type) {
      case 'keydown':
        restore =
          (keyCode === 13 && maskedValue && isValid) ||
          keyCode === 27 ||
          keyCode === 9
        apply = keyCode === 13 || keyCode === 9
        break
      case 'focusout':
        restore = true
        apply = maskedValue && isValid
        break
      default:
        break
    }

    if (restore) {
      unmaskedInput.classList.remove(this.options.cssClassError)
      unmaskedInput.classList.remove(this.options.cssClassSuccess)

      unmaskedInput.setAttribute('aria-hidden', 'true')
      unmaskedInput.setAttribute('type', 'hidden')

      actualInput.removeAttribute('aria-hidden')
      actualInput.setAttribute('type', 'text')

      actualInput.classList.add(this.options.cssClassSuccess)

      if (apply && maskedValue && isValid) {
        actualInput.value = maskedValue
        actualInput.dataset.valueUnmasked = unmaskedInput.value
        this.__fireOnUpdate(maskedValue, unmaskedInput.value, actualInput)
      } else {
        unmaskedInput.value = actualInput.dataset.valueUnmasked
      }
    }
  }

  /**
   * Trigger `checkValidity` on the input
   *
   * @param {HTMLInputElement} unmaskedInput
   * @param {HTMLInputElement} actualInput
   *
   * @returns {Boolean} true when valid , false otherwise
   *
   * @protected
   */
  _validateInput(unmaskedInput, actualInput) {
    let isValid = true
    const value = Number(unmaskedInput.value)
    if (unmaskedInput.getAttribute('type') === 'hidden' && !isNaN(value)) {
      const max = unmaskedInput.getAttribute('max')
      const min = unmaskedInput.getAttribute('min')
      const step = unmaskedInput.getAttribute('step')

      if (min) isValid = isValid && value >= Number(min)
      if (max) isValid = isValid && value <= Number(max)

      if (step)
        isValid =
          isValid && countDecimals(step) === countDecimals(unmaskedInput.value)
    } else isValid = unmaskedInput.checkValidity()

    if (isValid) {
      this.__applyCssClassState(unmaskedInput, actualInput, 'success')
    } else {
      this.__applyCssClassState(unmaskedInput, actualInput, 'error')
      this.__fireOnInvalid(unmaskedInput.validationMessage || 'Validity check fails', actualInput)
    }

    return isValid
  }

  /**
   * @param {String} valueMasked  masked value
   * @param {Number} valueUnmasked  original value
   * @param {HTMLInputElement} input the actual input instance
   *
   * @private
   */
  __fireOnUpdate(valueMasked, valueUnmasked, input) {
    if (this.options.onUpdate) {
      this.options.onUpdate(
        valueMasked,
        valueUnmasked,
        input
      )
    }
  }

  /**
   * @param {String|Object} error last occurred error. could be mask error or validation error
   * @param {HTMLInputElement} input the actual input instance
   *
   * @private
   */
  __fireOnInvalid(error, input) {
    if (this.options.onInvalid) {
      this.options.onInvalid(error, input)
    }
  }

  /**
   * @private
   */
  __applyCssClassState(unmaskedInput, actualInput, state) {
    if (
      actualInput.hasAttribute('readonly') ||
      actualInput.hasAttribute('disabled')
    ) {
      actualInput.classList.remove(this.options.cssClassError)
      actualInput.classList.remove(this.options.cssClassSuccess)

      unmaskedInput.classList.remove(this.options.cssClassError)
      unmaskedInput.classList.remove(this.options.cssClassSuccess)
    } else {
      if (state === 'success') {
        actualInput.classList.remove(this.options.cssClassError)
        actualInput.classList.add(this.options.cssClassSuccess)

        unmaskedInput.classList.remove(this.options.cssClassError)
        unmaskedInput.classList.add(this.options.cssClassSuccess)
      }

      if (state === 'error') {
        actualInput.classList.add(this.options.cssClassError)
        actualInput.classList.remove(this.options.cssClassSuccess)

        unmaskedInput.classList.add(this.options.cssClassError)
        unmaskedInput.classList.remove(this.options.cssClassSuccess)
      }
    }
  }
}

export default NumberInput
