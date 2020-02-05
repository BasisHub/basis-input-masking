/*
 * This file is part of basis-input-masking lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  maskIfNotMasked,
  unmask,
  findCaretPosition,
  generatePatternFromMask,
  IS_UNICODE_PROPERTY_SUPPORTED,
} from '../../src/TextInput/tools.js'

describe('#TextInput#Tools', () => {
  describe('#unmask', () => {
    const data = [
      ['DE-44', 'UU-00', 'de44'],
      ['DE-44', 'AA-00', 'de44'],
      ['()-  ', 'UU-00', '()'],
      ['D!-44', 'AU-00', 'd!44'],
      ['Dä-44', 'AA-00', 'dä44'],
      ['+(49) 123 456 789 10', '+(00) 000 000 000 00', '4912345678910'],
      ['QQQ-12', 'AA-00', 'qq'],
      ['1-12', 'AA-00', ''],
      ['s-12', 'AA-00', 's'],
      ['-12', 'AA-00', ''],
    ]

    it('can cache values', () => {
      const maskedValue = 'BD-44'
      const mask = 'AA-00'
      const unmaskedValue = unmask(maskedValue, mask)
      const cacheKey = `${maskedValue}-${mask}`

      expect(unmask.__CACHE__, 'cache object exists').to.haveOwnProperty(
        cacheKey
      )
      expect(unmask.__CACHE__[cacheKey], 'value is cached').to.equal(
        unmaskedValue
      )
    })

    data.forEach(testCase => {
      it(`unmask("${testCase[0]}","${testCase[1]}") => ${testCase[2]}`, () => {
        expect(unmask(testCase[0], testCase[1])).to.equal(testCase[2])
      })
    })
  })

  describe('#findCaretPosition', () => {
    const data = [
      ['+(47) 4         ', '+(00) 000 000 00', 7],
      ['+(4) 123 456 78 91', '+(00) 000 000 000 00', 3],
      ['WD-', 'AA-00', 3],
      ['Q-33', 'AA-00', 1],
      ['-33', 'AA-00', 0],
      ['DE-33', 'AA-00', 5],
      ['()-', 'UU-00', 3],
      ['DE-44', 'UU-00', 5],
      ['D - ', 'UU-00', 3],
    ]

    it('can cache values', () => {
      const maskedValue = 'BD-44'
      const mask = 'AA-00'
      const position = findCaretPosition(maskedValue, mask)
      const cacheKey = `${maskedValue}-${mask}`

      expect(
        findCaretPosition.__CACHE__,
        'cache object exists'
      ).to.haveOwnProperty(cacheKey)
      expect(findCaretPosition.__CACHE__[cacheKey], 'value is cached').to.equal(
        position
      )
    })

    data.forEach(testCase => {
      it(`findCaretPosition("${testCase[0]}","${testCase[1]}") => ${testCase[2]}`, () => {
        expect(findCaretPosition(testCase[0], testCase[1])).to.equal(
          testCase[2]
        )
      })
    })
  })

  describe('#maskIfNotMasked', () => {
    var data = [
      ['de44', 'AA-00', 'DE-44'], // masked
      ['DE-44', 'AA-00', 'DE-44'], // unmasked
      ['de', 'AA-00', 'DE-  '], // unmasked
      ['-44', 'AA-00', '  -  '], // unmasked
    ]

    it('can cache values', () => {
      const value = 'VD-44'
      const mask = 'AA-00'
      const newValue = maskIfNotMasked(value, mask)
      const cacheKey = `${value}-${mask}`

      expect(
        maskIfNotMasked.__CACHE__,
        'cache object exists'
      ).to.haveOwnProperty(cacheKey)
      expect(maskIfNotMasked.__CACHE__[cacheKey], 'value is cached').to.equal(
        newValue
      )
    })

    data.forEach(testCase => {
      it(`maskIfNotMasked("${testCase[0]}","${testCase[1]}") => ${testCase[2]}`, () => {
        expect(maskIfNotMasked(testCase[0], testCase[1])).to.equal(testCase[2])
      })
    })
  })

  describe('#generatePatternFromMask', () => {
    var data = [
      ['X', '😲', true],
      ['a', 'M', true],
      ['A', 'B', true],
      ['0', 5, true],
      ['z', 'M', true],
      ['z', 5, true],
      ['Z', 'M', true],
      ['Z', 5, true],
      ['U', 'M', true],
      ['U', 5, true],
      ['U', '!', true],
      ['U', ' ', true],
      ['AA-00', 'DE-44', true],
      ['+(00) 000 000 000 00', '+(49) 123 456 789 10', true],
      // not passable
      ['AA-00', 'DE-', false],
      ['a', 5, false],
      ['A', 5, false],
      ['z', '😲', false],
      ['Z', '😲', false],
      ['U', '😲', false],
    ]

    it('can cache values', () => {
      const mask = 'AA-00'
      const pattern = generatePatternFromMask(mask)
      const cacheKey = mask

      expect(
        generatePatternFromMask.__CACHE__,
        'cache object exists'
      ).to.haveOwnProperty(cacheKey)
      expect(
        generatePatternFromMask.__CACHE__[cacheKey],
        'value is cached'
      ).to.equal(pattern)
    })

    data.forEach(testCase => {
      it(`generatePatternFromMask(mask: "${testCase[0]}" , value: "${testCase[1]}") => ${testCase[2]}`, () => {
        const pattern = new RegExp(
          generatePatternFromMask(testCase[0]),
          IS_UNICODE_PROPERTY_SUPPORTED ? 'u' : ''
        )
        expect(pattern.test(testCase[1])).to.equal(testCase[2])
      })
    })
  })
})
