import React, { Component } from 'react'
import HackerText, { hackerTextFunction } from '../../dist'

export default class App extends Component {
  state = {
    text: ''
  }
  
  render () {
    return (
      <div>
        <HackerText text='Olá. ' />
        <HackerText text='Estamos em 2019.' delay={1500} />

        <br />

        <input 
          value={this.state.text} 
          onChange={e => 
            hackerTextFunction( 
              e.target.value, 
              value => this.setState( {text: value} )
            )
          } 
        />
      </div>
    )
  }
}
