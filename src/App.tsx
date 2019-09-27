import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App: React.FC = () => {
  const [name, setName] = useState('Guenther')
  const [age, setAge] = useState(28)
  const [text, setText] = useState('and I am not stupid')

  const switchNameHandler = () => {
    if (name === 'Guenther') {
      setName('Pedro')
      setAge(16)
      setText('')
    } else {
      setName('Guenther')
      setAge(68)
      setText('and I am stupid')
    }  
  }
  return (
    <div className="App">
     
        <h1>Hi, I am a React App</h1>
        <h3>with TypeScript</h3>
        <Person click={switchNameHandler} name={name} age={age}>{text}</Person>
        <button onClick={switchNameHandler}>Switch Name</button>
    </div>
  );
}

export default App;
