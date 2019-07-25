import React, { Component } from 'react'
import { hackerTextFunction } from './hackerTextFunction'
import * as utils from './utils'

export default class HackerText extends Component {
  state = {
    hackerText: ''
  }
  changingLetter = {index: 0, changes: 0}

  componentDidMount() {
    const { delay=0 } = this.props
    this.timeoutDelay = setTimeout( () => {
      if( this.props.onStart ) this.props.onStart();
      this.write();
    }, delay )
  }

  componentDidUpdate(prevProps) {
    const { text, delay=0 } = this.props
    if( text !== prevProps.text ) {
      this.changingLetter = {index: 0, changes: 0}
      this.timeoutDelay = setTimeout( () => {
        if( this.props.onStart ) this.props.onStart();
        this.write();
      }, delay )
    }
  }

  componentWillUnmount() {
    clearTimeout( this.timeoutDelay )
    clearTimeout( this.timeoutWrite )
  }

  write = () => {
    const { text='', changes=4, speed=50, characters, onFinished } = this.props

    const isLastChange = this.changingLetter.changes === changes-1
    const character = isLastChange ? text[this.changingLetter.index] : utils.randomCharacter( text[this.changingLetter.index], characters )
    this.setState( {hackerText: `${text.substring( 0, this.changingLetter.index )}${character}`} )

    this.changingLetter.changes++
    if( this.changingLetter.changes >= changes ) this.changingLetter = {index: ++this.changingLetter.index, changes: 0}
    if( this.changingLetter.index < text.length ) this.timeoutWrite = setTimeout( this.write, speed )
    else this.setState( {hackerText: text}, onFinished )
  }

  render() {
    const { hackerText } = this.state
    const { text, changes, speed, delay, characters, onStart, onFinished, element='span', ...props } = this.props

    return React.createElement(
      element,
      props,
      hackerText
    )
  }
}

export {hackerTextFunction};