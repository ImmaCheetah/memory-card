import { useState, useEffect } from 'react'

import './App.css'

function App() {
  
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
        .then(res => res.json())
        .then(data => console.log(data))
  }, [])
  
  return (
    <>
      <p>hello</p>
    </>
  )
}

export default App
