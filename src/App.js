import './App.css';
import { useState } from 'react';
function App() {

  const [counter, setCounter] = useState(0);

  const increment = () => {    
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);   
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h2>Testing in React...</h2>        
      </header>
      <div className='App-description'>
        <h3>Keith Lienert</h3>
        <p>Cloud for Develpers - Project #4 <br />Spring 2024</p>
        <small>It's not the prettiest example, but it demonstrates the CI/CD concept.</small>
      </div>
      <div className='App-counter'>
        <h3>Counter Example</h3>
        <p className='counter'>Counter: {counter} </p>
        <p className='counter-btns'>
          <button onClick={increment} type="button">+</button>
          <button onClick={decrement} type="button">-</button>
        </p>
      </div>
      
    </div>
  );
}

export default App;
