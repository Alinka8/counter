import React from 'react'
import "./App.css"
import Counter from './counter/Counter'

const App = () => {
  return (
    <>
    <div><Counter sumadd={10}/></div>
    <div><Counter sumadd={100}/></div>
    <div><Counter sumadd={200}/></div>
    <div><Counter sumadd={300}/></div>
    </>
  )
}

export default App