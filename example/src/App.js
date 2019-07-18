import React, { Component } from 'react'
import HackerText, { hackerTextFunction } from '../../dist'

export default class App extends Component {
  state = {
    text: ''
  }
  
  render () {
    return (
      <div>
        <HackerText text='Hello!' element='h2' speed={80} />
        <HackerText text='react-hacker-text 😄🎉' element='h2' speed={80} delay={2000} characters='numbers' />

        <br />

        <input 
          value={this.state.text} 
          onChange={e => 
            hackerTextFunction( 
              e.target.value, 
              value => this.setState( {text: value} ),
              {changes: 10, speed: 100, characters: 'symbols'}
            )
          }
        />
      </div>
    )
  }
}
