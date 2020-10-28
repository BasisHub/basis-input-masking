/*
 * This file is part of basis-input-masking lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import StringMask from 'bbj-masks/src/StringMask'
import {
  maskIfNotMasked,
  unmask,
  findCaretPosition,
  generatePatternFromMask,
} from './tools.js'

/**
 * The `TextInput` will wrap text inputs and apply the given [bbj string mask](https://github.com/BasisHub/bbj-masks#string-masks)
 *
 * **Options**
 *
 * _Options can be passed via data attributes . For data attributes, append the option name to data-, as in data-mask_
 *
 * | Option    | Default | Description                                                                                             |
 * |-----------|---------|---------------------------------------------------------------------------------------------------------|
 * | mask |         | The bbj string mask @see [BBj String Masks](https://github.com/BasisHub/bbj-masks#string-masks) |
 *
 *  <br>
 *
 * **Example :**
 * ```html
 *  <input class="bbj-text-masked" name="test" id="test" value="ed23" data-mask="AA-00">
 *
 *  <script>
 *    document.addEventListener('DOMContentLoaded', function (e) {
 *      new Basis.InputMasking.TextInput({
 *         onUpdate: (maskedValue , rawValue , input) => {
 *            // do something
 *         },
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
class TextInput {
  /**
   * Construct new TextInput
   *
   * @param {?Object} options - The input options.
   * @param {HTMLElement|String} [options.elements=".bbj-text-masked"] - The class name or the node to use
   * @param {HTMLDocument} [options.document=document] - Document instance to use
   * @param {String} [options.cssClassError="bbj-mask-error"] - A css class to attach to the input when it is invalid
   * @param {String} [options.cssClassSuccess="bbj-mask-success"] - A css class to attach to the input when it is valid after the user interaction
   * @param {Function} [options.onUpdate=null] - A callback to be called on the new masked value is set
   * @param {Function} [options.onInvalid=null] - A callback to be called on the input or the mask is invalid
   */
  constructor(options = {}) {
    this.options = {
      ...{
        elements: '.bbj-text-masked',
        doc: document,
        cssClassError: 'bbj-mask-error',
        cssClassSuccess: 'bbj-mask-success',
        onUpdate: null,
        onInvalid: null,
      },
      ...options,
    }
    this._onKeystroke = this._onKeystroke.bind(this)
    this._onFocus = this._onFocus.bind(this)
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
          parentClass && parentClass.indexOf('textInputMask__wrap') > -1
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

      if (parentClass && parentClass.indexOf('textInputMask__wrap') > -1) {
        this._unwrap(parent)
      }
    }
  }

  /**
   * Create the text masking input wrapper
   *
   * @param {HTMLInputElement} input the input element
   * @param {Boolean} isWrapped when true the input is already wrapped and we need to add what is
   *                            missing only
   *
   * @returns {HTMLSpanElement} the wrap element
   *
   * @protected
   */
  _wrap(input, isWrapped) {
    const inputId = input.getAttribute('id'),
      inputName = input.getAttribute('name'),
      mask = input.dataset.mask || '',
      originalPattern = input.pattern,
      defaultPattern = generatePatternFromMask(mask),
      pattern = originalPattern || defaultPattern

    let wrap = null,
      unmaskInput = null

    if (!isWrapped) {
      wrap = document.createElement('span')
      unmaskInput = document.createElement('input') // hidden input with the unmasked values for forms
    } else {
      wrap = input.parentNode
      unmaskInput = wrap.querySelector('.textInputMask__unmaskedInput')
    }

    // configure the actual input
    // -----------------------------------------------------
    input.value = maskIfNotMasked(input.value, mask)
    input.pattern = pattern
    input.classList.add('textInputMask__textInput')
    input.dataset.mask = mask
    input.dataset.valueUnmasked = unmask(input.value, mask)
    if (originalPattern && originalPattern !== defaultPattern) {
      input.dataset.isCustomPattern = true
    }

    if (!isWrapped) {
      if (!(input.hasAttribute('readonly') || input.hasAttribute('disable'))) {
        input.addEventListener('keyup', this._onKeystroke)
        input.addEventListener('keypress', this._onKeystroke)
        input.addEventListener('paste', this._onKeystroke)
        input.addEventListener('focusin', this._onFocus)
        input.addEventListener('click', this._onFocus)
      }
      input.parentNode.insertBefore(wrap, input) // move the input outside the wrapper
    }

    if (this._validateInput(input)) {
      this.__fireOnUpdate(input.value, input.dataset.valueUnmasked, input)
    }

    // configure the unmasked input
    // ----------------------------------------------------
    unmaskInput.setAttribute('aria-hidden', 'true')
    unmaskInput.setAttribute('type', 'hidden')
    unmaskInput.classList.add('textInputMask__unmaskedInput')
    unmaskInput.value = input.dataset.valueUnmasked
    if (inputId) unmaskInput.setAttribute('id', `${inputId}-unmasked`)
    if (inputName) unmaskInput.setAttribute('name', `${inputName}-unmasked`)

    if (!isWrapped) {
      // configure the wrapper
      wrap.setAttribute('class', 'textInputMask__wrap')
      wrap.appendChild(unmaskInput)
      wrap.appendChild(input)
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
      textInput.querySelector('.textInputMask__unmaskedInput')
    )

    const input = textInput.querySelector('.textInputMask__textInput')
    input.removeEventListener('keyup', this._onKeystroke)
    input.removeEventListener('keypress', this._onKeystroke)
    input.removeEventListener('paste', this._onKeystroke)
    input.removeEventListener('focusin', this._onFocus)
    input.removeEventListener('click', this._onFocus)
    delete input.dataset.valueUnmasked
    if (!input.dataset.isCustomPattern) {
      input.removeAttribute('pattern')
      delete input.dataset.isCustomPattern
    }

    input.classList.remove(this.options.cssClassError)

    textInput.parentNode.insertBefore(input, textInput)
    textInput.parentNode.removeChild(textInput)
  }

  /**
   * Listen to every keystroke on the input and update the masked and the unmasked value
   *
   * @param {Event} e
   *
   * @protected
   */
  _onKeystroke(e) {
    if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return
    if(e.keyCode !== 13) e.preventDefault()
    
    const input = e.target,
      mask = input.dataset.mask || this.options.mask,
      eventType = e.type

    input.classList.remove(this.options.cssClassError)
    input.classList.remove(this.options.cssClassSuccess)
    input.setCustomValidity('');

    let value = input.value,
      keyCode = e.keyCode,
      keyContent = e.key || e.code.replace(/[^0-9]/g, ''),
      key = keyContent ? (keyContent.length > 1 ? '' : keyContent) : '',
      insertPosition = findCaretPosition(value, mask),
      newValue,
      unmaskedValue,
      maskError = false

    switch (eventType) {
      case 'paste':
        newValue = maskIfNotMasked(
          (e.clipboardData || window.clipboardData).getData('Text'),
          mask
        )
        break
      case 'keyup':
        newValue = value
        break
      case 'keypress':
        const selectionStart = input.selectionStart
        if (selectionStart !== insertPosition) insertPosition = selectionStart

        newValue =
          value.substr(0, insertPosition) + key + value.substr(insertPosition)
        break
      default:
        break
    }

    unmaskedValue = unmask(newValue, mask)

    if ([35, 36, 37, 38, 39, 40].indexOf(keyCode) === -1) {
      try {
        input.value = StringMask.mask(unmaskedValue, mask, false)
        if(this._validateInput(input)) {
          input.dataset.valueUnmasked = unmaskedValue
          this.options.doc.querySelector(
            `#${input.getAttribute('id')}-unmasked`
          ).value = unmaskedValue
          this.__applyCssClassState(input, 'success')
          this.__fireOnUpdate(input.value, input.dataset.valueUnmasked, input)
        }
        maskError = false
      } catch (error) {
        this.__applyCssClassState(input, 'error')
        this.__fireOnInvalid(error, input)
        maskError = true
      }

      this._updateCaretPosition(input, mask)
    }

    if (!maskError) this._validateInput(input)
  }

  /**
   * Listen to focus events on the input and update the caret position
   * where the next char should be inserted according to the mask
   *
   * @param {FocusEvent} e
   *
   * @protected
   */
  _onFocus(e) {
    const input = e.target
    const mask = input.dataset.mask || this.options.mask
    this._updateCaretPosition(input, mask)
  }

  /**
   * Update the caret position on the input based on the given mask
   *
   * @param {HTMLInputElement} input instance
   * @param {String} mask  bbj string
   *
   * @protected
   */
  _updateCaretPosition(input, mask) {
    setTimeout(() => {
      const position = findCaretPosition(input.value, mask)
      input.setSelectionRange(position, position)
    }, 0)
  }

  /**
   * Trigger `checkValidity` on the input
   *
   * @param {HTMLInputElement} input
   *
   * @returns {Boolean} true when valid , false otherwise
   *
   * @protected
   */
  _validateInput(input) {
    const isValid = input.checkValidity()

    if (isValid) {
      this.__applyCssClassState(input, 'success')
      input.setCustomValidity('')
    } else {
      this.__applyCssClassState(input, 'error')
      this.__fireOnInvalid(input.validationMessage, input)
    }

    return isValid
  }

  /**
   * @private
   */
  __fireOnUpdate(valueMasked, valueUnmasked, input) {
    if (this.options.onUpdate) {
      this.options.onUpdate(valueMasked, valueUnmasked, input)
    }
  }

  /**
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
  __applyCssClassState(input, state) {
    if (input.hasAttribute('readonly') || input.hasAttribute('disabled')) {
      input.classList.remove(this.options.cssClassError)
      input.classList.remove(this.options.cssClassSuccess)
    } else {
      if (state === 'success') {
        input.classList.remove(this.options.cssClassError)
        input.classList.add(this.options.cssClassSuccess)
      }

      if (state === 'error') {
        input.classList.add(this.options.cssClassError)
        input.classList.remove(this.options.cssClassSuccess)
      }
    }
  }
}

export default TextInput
