# react-hacker-text

> 

[![NPM](https://img.shields.io/npm/v/react-hacker-text.svg)](https://www.npmjs.com/package/react-hacker-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![](https://raw.githubusercontent.com/daniellrs/react-hacker-text/master/assets/example1.gif)
![](https://raw.githubusercontent.com/daniellrs/react-hacker-text/master/assets/example2.gif)

## Install

```bash
npm install --save react-hacker-text
or
yarn add react-hacker-text
```

## Usage

To render a hacker text in the page we have to import HackerText:

```jsx
import React, { Component } from 'react'
import HackerText, { hackerTextFunction } from 'react-hacker-text'

class Example extends Component {
  render () {
    return (
      <HackerText text='react-hacker-text 😄🎉' />
    )
  }
}
```

HackerText props:

| Prop       | Type           | Description  |
| ------------- |:-------------:| ------------- |
| text      | string | Text that will be rendered. |
| element      | string | Element that will be rendered. Default is span. |
| speed      | number | Speed in milliseconds between characters is changed. Default is 50. |
| delay      | number | Delay in milliseconds before the text is rendered. |
| changes      | number | Quantity of characters to be rendered in each character. |
| characters      | string | The type of characters that will be showed(all, capital-letters, lower-letters, numbers, symbols). Default is all. |
| onStart      | function | Function called before the render began |
| onFinished      | function | Function called when finishes the text |


To render a hacker text in a input we have to import hackerTextFunction:

```jsx
import React, { Component } from 'react'
import HackerText, { hackerTextFunction } from 'react-hacker-text'

class Example extends Component {
  state = {
    text: ''
  }
  
  setText = value => this.setState( {text: value} )
  
  render () {
    const options = {changes: 5, speed: 100, characters: 'symbols'}
    
    return (
      <input 
        value={this.state.text} 
        onChange={e => 
          hackerTextFunction(e.target.value, this.setText, options)
        }
      />
    )
  }
}
```

hackerTextFunction receive 3 params:

| Param       | Type           | Description  |
| ------------- |:-------------:| ------------- |
| text      | string | Text that will be displayed. |
| callback      | function | Function called with the changed text. |
| options      | object | Object that accepts 3 configurations: speed, changes, and characters. Read the HackerText props to know how to use them. |

## License

MIT © [daniellrs](https://github.com/daniellrs)
