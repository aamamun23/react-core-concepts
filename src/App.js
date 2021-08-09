import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const style={
  "color": "red",
  "backgroundColor": "yellow",
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 style={style}>Heading One</h1>
        <Grid title="Title One" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem porro veritatis sunt impedit, vel praesentium minima maiores odit totam repellendus ipsam ullam ducimus. Nobis animi ipsum, temporibus veritatis voluptatibus necessitatibus?"></Grid> 
        <Grid title="Title Two"></Grid> 
        <Grid title="Title Three"></Grid> 
        <br />
        <br />
        <Count></Count>
        <br />
        <br />
        <Users></Users>
      </header>
    </div>
  );
}

function Count(){
  const [count, setCount] = useState(10);
  const handleCount = () => {
    const newCount = count +1;
    setCount(newCount);
  };
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);
  return (
    <div>
      <h3>User Count: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

function Grid(props){
  return (
    <div style={{border: '2px solid red', color: 'yellow', marginBottom: '10px',}}>
      <h1>{props.title}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem porro veritatis sunt impedit, vel praesentium minima maiores odit totam repellendus ipsam ullam ducimus. Nobis animi ipsum, temporibus veritatis voluptatibus necessitatibus?</p>
    </div>
  );
}

export default App;
