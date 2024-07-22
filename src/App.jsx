import { useState, useEffect } from 'react'
import Card from './components/Card'
import { v4 as uuidv4 } from "uuid";
import apiKey from '../config'
import './App.css'

function App() {
  const API_KEY = apiKey()

  const [allImages, setAllImages] = useState([])
  const [clickedArray, setClickedArray] = useState([])

  const clickedCount = clickedArray.length;
  
  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=10&api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => setAllImages(data))
  }, [])
      

  function shuffleCards() {
    console.log('shuffle ran')
    console.log(allImages)
    let newArray = allImages;
    let currentIndex = newArray.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex], newArray[currentIndex]];
    }

    // Triggers a re-render to update cards on screen
    setAllImages((prevImages) => {
      return [...prevImages]
    })
  }

  function handleClick(id) {

    if (clickedArray.includes(id)) {
      setClickedArray(clickedArray.filter(click => {
        return click
      }))
    } else {
      setClickedArray([
        ...clickedArray,
        id
      ])
    }
    shuffleCards()
    console.log('clicked', clickedArray)
  }

  // console.log('oi',allImages)
  const cardList = allImages.map((img) => {
    
    return (
      <Card 
        key={img.id}
        id={img.id}
        beenClicked={clickedArray.includes(img.id)}
        imageUrl={img.url}
        shuffleCards={shuffleCards}
        onClick={() => handleClick(img.id)}
      />
    )
  })
  
  return (
    <>
      <div className="cards-container">{cardList}</div>
      <h4># Clicked - {clickedCount}</h4>
    </>
  )
}

export default App
