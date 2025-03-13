import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import Card from "./Card.jsx"

class Game{

  constructor(){
    this._points = 0;  
  }

  increasePoints(){
    this._points++;
    console.log(this._points);
  }

  resetPoints(){
    this._points = 0;
  }

  checkWin(){
    if(this._points === 12){
      
    }
  }
}

let game   = new Game();


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Card Game</h1>
    <div className='card-container'>
    <Card></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
      <Card game={game}></Card>
    </div>

    </>
  )
}

export default App
