const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const symbols = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '\\', '', '\'', ',', '.', '/', '{', '}', '|', ':', '"', '<', '>', '?', '^']

const getFromList = ( list ) => list[Math.floor(Math.random()*list.length)]

const randomCharacter = ( character, characters ) => {
  let randomChar = character

  switch (characters) {
    case 'all':
      randomChar = getFromList( [...capitalLetters, ...lowerLetters, ...numbers, ...symbols] )
      break
    case 'capital-letters':
      randomChar = getFromList( capitalLetters )
      break
    case 'lower-letters':
      randomChar = getFromList( lowerLetters )
      break
    case 'numbers':
      randomChar = getFromList( numbers )
      break
    case 'symbols':
      randomChar = getFromList( symbols )
      break
    default:
      const isCapital = capitalLetters.includes( character )
      const isLower = lowerLetters.includes( character )
      const isNumber = numbers.includes( character )
      const isSymbol = symbols.includes( character )

      if( isCapital ) randomChar = getFromList( capitalLetters )
      else if( isLower ) randomChar = getFromList( lowerLetters )
      else if( isNumber ) randomChar = getFromList( numbers )
      else if( isSymbol ) randomChar = getFromList( symbols )
      else randomChar = getFromList( [...capitalLetters, ...lowerLetters, ...numbers, ...symbols] )
      break
  }

  return randomChar
}

export {randomCharacter, hackerText}