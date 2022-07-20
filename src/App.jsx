import { useState } from 'react'
import './App.css'

function App() {
  const [word, setWord] = useState('')

  function palindrome(word){
    let letters = /\W/ig;
    word = word.toString().toLowerCase().split(letters).join('')

    if(word.length === 0 || word.length === 1){
      return true
    } else {
      return (word.slice(0, 1) === word.slice(-1)) && 
      palindrome(word.slice(1, -1))
    }
  }

  function valid(palindrome) {
    if (palindrome){
      return 'Your word is a palindrome or whatever'
    }
    return 'Your word is not a palindrome'
  }

  return (
    <div className="App">
      <input type='text' onChange={(word) => setWord(word.target.value)} />
      <h3>{word}</h3>
      <h4>{valid(palindrome(word))}</h4>
    </div>
  )
}

export default App
