/*
 * This file is part of basis-input-masking lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import NumberInput from '../../src/NumberInput'
import $ from 'jquery'

describe('#NumberInput', () => {
  const data = [
    {
      mask: '##,##0',
      masked: '1,234',
      unmasked: '1234',
      step: 1,
      min: 0,
      max: 15000,
      groupingSeparator: ',',
      decimalSeparator: '.',
      isValid: true,
    },
    {
      mask: '##,##0',
      masked: '1.234',
      unmasked: '1234',
      step: 1,
      min: 0,
      max: 15000,
      groupingSeparator: '.',
      decimalSeparator: ',',
      isValid: true,
    },
    {
      mask: '-#,##0.######',
      masked: '-5,000.123457',
      unmasked: '-5000.123456789',
      //step: .0000000001,
      min: -7000,
      max: 7000,
      groupingSeparator: ',',
      decimalSeparator: '.',
      isValid: true,
    },
  ]

  data.forEach((testCase, index) => {
    describe(`${index + 1})- Case [masked = "${
      testCase.masked
    }" , unmasked = "${testCase.unmasked}" , mask = "${
      testCase.mask
    }"]`, () => {
      let numberInput
      beforeEach(() => {
        document.body.innerHTML = `<input 
        id="test-${index + 1}" 
        name="test-${index + 1}" 
        value="${testCase.unmasked}" 
        data-mask="${testCase.mask}" 
        ${testCase.step ? `data-step=${testCase.step}` : ''}
        data-min="${testCase.min}"
        data-max="${testCase.max}"
        data-grouping-separator="${testCase.groupingSeparator}"
        data-decimal-separator="${testCase.decimalSeparator}"
        class="bbj-number-masked" />`

        numberInput = new NumberInput()
      })

      afterEach(() => {
        numberInput = null
      })

      //   context('* RefreshValue', () => {
      //     it('Calling refresh will re-initiate the input value', () => {
      //       const el = document.querySelector('input[type="hidden"]')
      //       el.value = ''
      //       numberInput.refresh()
      //       expect(isMaskedValue(el.value, testCase.mask)).to.be.true
      //     })
      //   })

      context('* wrapper', () => {
        it('creates a wrapper around the text input', () => {
          expect(document.querySelector('span')).to.be.instanceOf(
            HTMLSpanElement
          )
        })
      })

      context('* numberInput', () => {
        it('it is hidden Input by default', () => {
          expect(
            document.querySelector('input[type="hidden"]')
          ).to.be.instanceOf(HTMLInputElement)
        })

        it('it becomes number input when text input is focused', () => {
          const acutalInput = document.querySelector(
            'input:not([type="hidden"])'
          )
          acutalInput.focus()

          expect(
            document.querySelector('input[type="number"]').getAttribute('type')
          ).to.equal('number')
        })

        it('it becomes number input when text input is clicked', () => {
          const acutalInput = document.querySelector(
            'input:not([type="hidden"])'
          )
          acutalInput.click()

          expect(
            document.querySelector('input[type="number"]').getAttribute('type')
          ).to.equal('number')
        })

        it('it becomes hidden again when it is focused out', done => {
          const acutalInput = document.querySelector(
            'input:not([type="hidden"])'
          )
          acutalInput.click()

          setTimeout(() => {
            const unmaskedInput = document.querySelector('input[type="number"]')
            unmaskedInput.blur()
            expect(unmaskedInput.getAttribute('type')).to.equal('hidden')
            done()
          }, 250)
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

        it(`has the step property`, () => {
          const step = document
            .querySelector('input[type="hidden"]')
            .getAttribute('step')
          if (testCase.step) {
            expect(Number(step), `step equals ${testCase.step}`).to.equals(
              testCase.step
            )
          } else {
            expect(Number(step), 'step is not NaN').to.not.be.NaN
          }
        })

        it(`has the min property`, () => {
          const min = document
            .querySelector('input[type="hidden"]')
            .getAttribute('min')
          expect(Number(min)).to.equals(testCase.min)
        })

        it(`has the max property`, () => {
          const max = document
            .querySelector('input[type="hidden"]')
            .getAttribute('max')
          expect(Number(max)).to.equals(testCase.max)
        })

        it(`has the groupSeparator in its dataset`, () => {
          const groupSeparator = document.querySelector('input[type="hidden"]')
            .dataset.groupingSeparator
          expect(groupSeparator).to.equals(testCase.groupingSeparator)
        })

        it(`has the group decimalSeparator in its dataset`, () => {
          const decimalSeparator = document.querySelector(
            'input[type="hidden"]'
          ).dataset.decimalSeparator
          expect(decimalSeparator).to.equals(testCase.decimalSeparator)
        })

        it(`its value is "${testCase.unmasked}"`, () => {
          expect(document.querySelector('input[type="hidden"]').value).to.equal(
            testCase.unmasked
          )
        })

        context('* Validity', () => {
          it(`The input is ${testCase.isValid ? 'VALID' : 'IN-VALID'}`, () => {
            const acutalInput = document.querySelector(
              'input:not([type="hidden"])'
            )
            acutalInput.focus()

            const unmaskedInput = document.querySelector('input[type="number"]')
            // console.log(unmaskedInput, '\n')
            expect(unmaskedInput.checkValidity()).to.equal(testCase.isValid)
          })

          it(`has the css ${
            testCase.isValid ? 'SUCCESS' : 'ERROR'
          } class`, () => {
            const acutalInput = document.querySelector(
              'input:not([type="hidden"])'
            )
            acutalInput.focus()

            const unmaskedInput = document.querySelector('input[type="number"]')
            const errorClass = numberInput.options.cssClassError
            const successClass = numberInput.options.cssClassSuccess
            if (testCase.isValid) {
              expect(
                unmaskedInput.classList.contains(errorClass),
                'input does not have error class'
              ).to.be.false
              expect(
                unmaskedInput.classList.contains(successClass),
                'input has success class'
              ).to.be.true
            } else {
              expect(
                unmaskedInput.classList.contains(errorClass),
                'input has error class'
              ).to.be.true
              expect(
                unmaskedInput.classList.contains(successClass),
                'input does not have success class'
              ).to.be.false
            }
          })
        })
      })

      context('* textInput', () => {
        it('it is visible be default', () => {
          expect(
            document.querySelector('input:not([type="hidden"])')
          ).to.be.instanceOf(HTMLInputElement)
        })

        it('it becomes hidden on focus ', () => {
          const acutalInput = document.querySelector(
            'input:not([type="hidden"])'
          )
          acutalInput.focus()

          expect(acutalInput.getAttribute('type')).to.equal('hidden')
        })

        it('it becomes hidden on click ', () => {
          const acutalInput = document.querySelector(
            'input:not([type="hidden"])'
          )
          acutalInput.click()

          expect(acutalInput.getAttribute('type')).to.equal('hidden')
        })

        it('has valueUnmasked in its dataset ', () => {
          const acutalInput = document.querySelector(
            'input:not([type="hidden"])'
          )

          expect(acutalInput.dataset.valueUnmasked).to.equal(testCase.unmasked)
        })

        it(`its value is "${testCase.masked}"`, () => {
          expect(
            document.querySelector('input:not([type="hidden"])').value
          ).to.equal(testCase.masked)
        })
      })
    })
  })

  describe('# Callbacks', () => {
    it('onUpdate is fired when the input value is set', done => {
      document.body.innerHTML =
        '<input class="bbj-number-masked" name="test" id="test" value="1234" data-mask="##,##0">'
      const onUpdate = (maskedValue, unmaskedValue, input) => {
        expect(input, 'input param is received').to.deep.equal(
          document.querySelector('#test')
        )
        expect(maskedValue, 'masked value is received').to.deep.equal('1,234')
        expect(unmaskedValue, 'unmaskedValue value is received').to.deep.equal(
          '1234'
        )
        done()
      }

      new NumberInput({ onUpdate })
    })

    it('onInvalid is fired when the input is invalid', done => {
      document.body.innerHTML =
        '<input class="bbj-number-masked" name="test" id="test" value="-5000.123456789" data-step="1" data-mask="-#,##0.######">'
      const onInvalid = (error, input) => {
        expect(input, 'input param is received').to.deep.equal(
          document.querySelector('#test')
        )
        expect(error, 'error message is received').to.not.be.empty
        done()
      }

      new NumberInput({ onInvalid })
    })
  })

  describe('#forms', () => {
    it('masked and unmasked values can be submitted in forms', () => {
      document.body.innerHTML = `<form>
        <input class="bbj-number-masked" name="test" id="test" value="1234" data-mask="##,##0">
        </form>`
      new NumberInput()

      expect($('form').serializeArray()).to.eql([
        { name: 'test-unmasked', value: '1234' },
        { name: 'test', value: '1,234' },
      ])
    })
  })
})
