/*
 * This file is part of basis-input-masking lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import TextInput from '../../src/TextInput'
import { isMaskedValue } from '../../src/TextInput/tools'
import $ from 'jquery'

describe('#TextInput', () => {
  const data = [
    {
      html: `<input id="test-1" name="test-1" value="de44" data-mask="AA-00" class="bbj-text-masked" />`,
      mask: 'AA-00',
      masked: 'DE-44',
      unmasked: 'de44',
      isValid: true,
      caretPosition: 5,
    },
    {
      html: `<input id="test-2" name="test-2" value="Q -44" data-mask="UU-00" class="bbj-text-masked" />`,
      mask: 'UU-00',
      masked: 'Q -44',
      unmasked: 'q 44',
      isValid: true,
      caretPosition: 5,
    },
    {
      html: `<input id="test-3" name="test-3" value="-44" data-mask="aa-00" class="bbj-text-masked" />`,
      mask: 'aa-00',
      masked: '  -  ',
      unmasked: '',
      isValid: false,
      caretPosition: 0,
    },
  ]

  data.forEach((testCase, index) => {
    describe(`${index + 1})- Case [masked = "${
      testCase.masked
    }" , unmasked = "${testCase.unmasked}" , mask="${testCase.mask}"]`, () => {
      let textInput
      beforeEach(() => {
        document.body.innerHTML = testCase.html
        textInput = new TextInput()
      })

      afterEach(() => {
        textInput = null
      })

      context('* RefreshValue', () => {
        it('Calling refresh will re-initiate the input value', () => {
          const el = document.querySelector('input:not([type="hidden"])')
          el.value = ''
          textInput.refresh()
          expect(isMaskedValue(el.value, testCase.mask)).to.be.true
        })
      })

      context('* wrapper', () => {
        it('creates a wrapper around the text input', () => {
          expect(document.querySelector('span')).to.be.instanceOf(
            HTMLSpanElement
          )
        })
      })

      context('* hiddenInput', () => {
        it('creates hidden Input', () => {
          expect(
            document.querySelector('input[type="hidden"]')
          ).to.be.instanceOf(HTMLInputElement)
        })

        it(`its value is "${testCase.unmasked}"`, () => {
          expect(document.querySelector('input[type="hidden"]').value).to.equal(
            testCase.unmasked
          )
        })

        it(`its name ends with "unmasked"`, () => {
          expect(
            document.querySelector('input[type="hidden"]').getAttribute('name')
          ).to.match(/.*\-unmasked/)
        })

        it(`its Id ends with "unmasked"`, () => {
          expect(
            document.querySelector('input[type="hidden"]').getAttribute('id')
          ).to.match(/.*\-unmasked/)
        })
      })

      context('* textInput', () => {
        it('can be found in the wrap', () => {
          expect(
            document.querySelector('input:not([type="hidden"])')
          ).to.be.instanceOf(HTMLInputElement)
        })

        it(`its value is "${testCase.masked}"`, () => {
          expect(
            document.querySelector('input:not([type="hidden"])').value
          ).to.equal(testCase.masked)
        })

        context('* Validity', () => {
          it(`The input is ${testCase.isValid ? 'VALID' : 'IN-VALID'}`, () => {
            const isValid = document
              .querySelector('input:not([type="hidden"])')
              .checkValidity()
            expect(isValid).to.equal(testCase.isValid)
          })

          it(`The input has css ${
            testCase.isValid ? 'SUCCESS' : 'ERROR'
          } class`, () => {
            const el = document.querySelector('input:not([type="hidden"])')
            const errorClass = textInput.options.cssClassError
            const successClass = textInput.options.cssClassSuccess
            if (testCase.isValid) {
              expect(
                el.classList.contains(errorClass),
                'input does not have error class'
              ).to.be.false
              expect(
                el.classList.contains(successClass),
                'input has success class'
              ).to.be.true
            } else {
              expect(el.classList.contains(errorClass), 'input has error class')
                .to.be.true
              expect(
                el.classList.contains(successClass),
                'input does not have success class'
              ).to.be.false
            }
          })
        })

        context('* focus', () => {
          it(`onfocusin forces the caret position to "${testCase.caretPosition}"`, done => {
            const el = document.querySelector('input:not([type="hidden"])')
            el.focus()
            setTimeout(() => {
              expect(el.selectionEnd).to.equal(testCase.caretPosition)
              done()
            }, 250)
          })
        })
      })
    })
  })

  describe('# Callbacks', () => {
    it('onUpdate is fired when the input value is set', done => {
      document.body.innerHTML =
        '<input id="test-1" name="test-1" value="de44" data-mask="AA-00" class="bbj-text-masked" />'
      const onUpdate = (maskedValue, unmaskedValue, input) => {
        expect(input, 'input param is received').to.deep.equal(
          document.querySelector('#test-1')
        )
        expect(maskedValue, 'masked value is received').to.deep.equal('DE-44')
        expect(unmaskedValue, 'unmaskedValue value is received').to.deep.equal(
          'de44'
        )
        done()
      }

      new TextInput({ onUpdate })
    })

    it('onInvalid is fired when the input is invalid', done => {
      document.body.innerHTML =
        '<input id="test-1" name="test-1" value="de-" data-mask="AA-00" class="bbj-text-masked" />'
      const onInvalid = (error, input) => {
        expect(input, 'input param is received').to.deep.equal(
          document.querySelector('#test-1')
        )
        expect(error, 'error message is received').to.not.be.empty
        done()
      }

      new TextInput({ onInvalid })
    })
  })

  describe('#forms', () => {
    it('masked and unmasked values can be submitted in forms', () => {
      document.body.innerHTML =
        '<form><input id="test" name="test" value="DE-44" data-mask="AA-00" class="bbj-text-masked" /></form>'
      new TextInput()

      expect($('form').serializeArray()).to.eql([
        { name: 'test-unmasked', value: 'de44' },
        { name: 'test', value: 'DE-44' },
      ])
    })
  })
})
