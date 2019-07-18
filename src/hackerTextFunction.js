import * as utils from './utils'

let changingLetter = {}
let textLength = 0;
let timeoutWrite = undefined;
const defaultOptions = {changes:4, speed:50}

const hackerTextFunction = (text, setState, options={}) => {
  if( !setState ) return
  if( timeoutWrite ) clearTimeout( timeoutWrite );
  
  if( textLength > text.length ) {
    verifyConsistency( text )
  }
  textLength = text.length

  const textIndex = text.length - 1;
  options = {...defaultOptions, ...options}
  if( !changingLetter[textIndex] ) changingLetter[textIndex] = {index: textIndex, changes: 0, original: text[textIndex]}

  verifyLettersToChange( text, setState, options )
}

const verifyLettersToChange = ( text, setState, options ) => {
  let hackerText = ''
  for (let index = 0; index < text.length; index++) {
    const char = text[index]
    
    if( typeof changingLetter[index] === 'undefined' ) {
      hackerText += char
      continue
    }

    changingLetter[index].changes++
    if( changingLetter[index].changes >= options.changes ) {
      changingLetter[index].showingLetter = changingLetter[index].original
      hackerText += changingLetter[index].original
    }
    else {
      const randomChar = utils.randomCharacter( char, options.characters )
      changingLetter[index].showingLetter = randomChar
      hackerText += randomChar
    }
  }

  setState( hackerText );
  timeoutWrite = setTimeout( () => verifyLettersToChange( text, setState, options ), options.speed )
}

const verifyConsistency = ( text ) => {
  Object.keys( changingLetter ).forEach( key => {

    const char = text[key]
    if( typeof changingLetter[key] === 'undefined' || typeof changingLetter[key].showingLetter === 'undefined' ) return
    
    if( char !== changingLetter[key].showingLetter ) changingLetter[key] = undefined;
  } );
}

export {hackerTextFunction};