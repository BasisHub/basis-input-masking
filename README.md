# BASIS Input Masking

[![Build Status](https://travis-ci.org/BasisHub/basis-input-masking.svg?branch=master)](https://travis-ci.org/BasisHub/basis-input-masking)
![GitHub](https://img.shields.io/github/license/BasisHub/basis-input-masking)
![GitHub file size in bytes](https://img.shields.io/github/size/BasisHub/basis-input-masking/dist/basis-input-masking.min.js)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/BasisHub/basis-input-masking)
![David](https://img.shields.io/david/BasisHub/basis-input-masking)

[Demo](https://basishub.github.io/basis-input-masking/docs/demo/) | [API](https://basishub.github.io/basis-input-masking/docs/api/) <br>

A small javascript library to force inputs masking using BBj supported masks

## Installation

```
yarn add BasisHub/bbj-masks BasisHub/basis-input-masking  
npm install BasisHub/bbj-masks BasisHub/basis-input-masking
```

## Usage 

```html
<script src="node_modules/bbj-masks/dist/bbj-masks.min.js"></script>
<script src="node_modules/basis-input-masking/dist/basis-input-masking.js"></script>
```


## Components

The library ships two components :

- TextInput : force [bbj-string masks](https://github.com/BasisHub/bbj-masks#string-masks) on inputs
- NumberInput : force [bbj-number masks](https://github.com/BasisHub/bbj-masks#number-masks) on inputs

## TextInput

The TextInput will wrap text inputs and apply the given bbj string mask. You can combine masks with patterns to get accurate validation. In case the input lives in a form then the masked and the unmasked values will be submitted when the form is submitted

```html
<!-- masked value is +(49) 156 610 110 20 -->
<input
  class="bbj-text-masked"
  name="test"
  id="test"
  value="4915661011020"
  data-mask="+(00) 000 000 000 00"
/>

<script>
  document.addEventListener('DOMContentLoaded', function(e) {
    new Basis.InputMasking.TextInput({
      onUpdate: (maskedValue, rawValue, input) => {
        // do something
      },
      onInvalid: (err, input) => {
        // do something
      },
    })
  })
</script>
```

**Options**

_Options can be passed via data attributes . For data attributes, append the option name to data-, as in data-mask_

| Option | Default | Description                                                                                     |
| ------ | ------- | ----------------------------------------------------------------------------------------------- |
| mask   |         | The bbj string mask @see [BBj String Masks](https://github.com/BasisHub/bbj-masks#string-masks) |

## NumberInput

The NumberInput will wrap text inputs and apply the given bbj number mask. In case the input lives in a form then the masked and the unmasked values will be submitted when the form is submitted

```html
<!-- masked value is 1,234 -->
<input
  class="bbj-number-masked"
  name="test"
  id="test"
  value="1234"
  data-mask="##,##0"
/>

<script>
  document.addEventListener('DOMContentLoaded', function(e) {
    new Basis.InputMasking.NumberInput({
      onUpdate: (maskedValue, rawValue, input) => {
        // do something
      },
      onInvalid: (err, input) => {
        // do something
      },
    })
  })
</script>
```

**Options**

_Options can be passed via data attributes . For data attributes, append the option name to data-, as in data-mask_

| Option               | Default | Description                                                                                                                                                                             |
| -------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mask                 |         | The bbj number mask @see [BBj Number Masks](https://github.com/BasisHub/bbj-masks#number-masks)                                                                                         |
| min                  |         | The maximum value to accept for this input                                                                                                                                              |
| max                  |         | The minimum value to accept for this input                                                                                                                                              |
| step                 |         | A stepping interval to use when using up and down arrows to adjust the value, as well as for validation                                                                                 |
| grouping-separator   | ,       | a char which will be used as a grouping separator                                                                                                                                       |
| decimal-separator    | .       | a char which will be used as a decimal separator                                                                                                                                        |
| force-trailing-zeros | false   | Affects the output by switching the way a mask with "#" characters in the trailing positions is filled. for example, the function NumberMask.mask(.10:"#.##") returns .10 instead of .1 |

## License

Licensed under the [MIT License](https://github.com/BasisHub/basis-input-masking/blob/master/LICENSE).