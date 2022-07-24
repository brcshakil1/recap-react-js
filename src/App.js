import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [names, setNames] = useState([])
  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setNames(data))
  }, [])

  // const names =[
  //   {name: "Bayazid", passion: 'Programming'}, 
  //   {name: "Shahid", passion: 'Cooking'}, 
  //   {name: "Arif", passion: 'Riding'}, 
  //   {name: "Samad", passion: 'Football'}
  // ];
  return (
    <div className="App">
      <PersonCount></PersonCount>
      <header className="App-header">
        {
          names.map(item => <Myself name = {item.name} key = {item.id} email = {item.email}></Myself>)
        }
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function PersonCount(){
  const [count, setCount] = useState(0);
const handleClick = () => setCount(count + 1)

  return (
    <div>
      <button onClick={handleClick}>Add Person</button>
      <h3>Number Of Person: {count} </h3>
      <PersonDisplay number = {count + 5}></PersonDisplay>
      <PersonDisplay number = {count + 1}></PersonDisplay>
      <PersonDisplay number = {count + 10}></PersonDisplay>
    </div>
  )
}

function PersonDisplay (props){
  return <h4>Person displayed no: {props.number}</h4>
}

function Myself(props){
  // const msStyle = {
  //   border: '2px solid red'
  // };
  return (
    <div style={{margin: "20px", border: '2px solid red'}}>
      <h1>Hello I'm- {props.name}.</h1>
      <h3>My Email -- {props.email}</h3>
    </div>
  )
}

export default App;
