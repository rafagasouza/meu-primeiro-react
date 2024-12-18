import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
const mary = 'Mary'
  return (
    <>
    <Pessoa nome='Ráfaga Matos' idade="29" profissao="Programador" foto="https://avatars.githubusercontent.com/u/183849922?v=4"/>
    </>
  )
}

export default App
