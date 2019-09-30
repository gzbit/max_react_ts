import React, { useState, Component } from 'react';
import './App.css';
import Person from './Person/Person'

const App_asFunction: React.FC = () => {
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

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28, clever: true  },
      { name: 'Manu', age: 29, clever: true  },
      { name: 'Stephanie', age: 26, clever: false  },
    ],
    otherState: 'some other value',
  }

  handleNameSwitch = (newName: string) => {
    this.setState({
      persons: [
        { name: newName, age: 28, clever: true },
        { name: 'Manu', age: 29, clever: true },
        { name: 'Stephanie', age: 26, clever: false },
      ]
    })
  }

  handleNameChange = (event: any) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28, clever: true },
        { name: event.target.value, age: 29, clever: true },
        { name: 'Stephanie', age: 26, clever: false },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>
          <button onClick={this.handleNameSwitch.bind(this, 'Maximilian')}>Switch Name</button>
        </p>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          clever={this.state.persons[0].clever}
          click={this.handleNameSwitch.bind(this, 'Max')}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          clever={this.state.persons[1].clever}
          change={this.handleNameChange}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          clever={this.state.persons[2].clever}
        />
      </div>
    )
  }

}

export default App;
