import { useState, useEffect } from 'react'
import Card from './components/Card'
import { v4 as uuidv4 } from "uuid";
import apiKey from '../config'
import './App.css'

function App() {
  const API_KEY = apiKey()

  const [allImages, setAllImages] = useState([])
  const [clickedArray, setClickedArray] = useState(fillArray())
  
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

  function fillArray() {
    let filledArray = []

    for (let i = 0; i < 10; i++) {
      filledArray.push({
        id: uuidv4(),
        beenClicked: false
      })
    }

    return filledArray
  }

  function handleClick(e, id) {
    // check if clicked array contains 
    console.log(e.target.id)

    setClickedArray(
      clickedArray.map((click) => {
        console.log('Single click value', click)
        console.log(`This is clickID: ${click.id}, this is id: ${id}`)
        if (click.id === id) {
          return {...click, beenClicked: true}
        } else {
          return click
        }
      })
    )
    
    console.log('clicked', clickedArray)
  }

  // console.log('oi',allImages)
  const cardList = allImages.map((img) => {
    
    return (
      <Card 
        key={img.id}
        id={2}
        title={img.id}
        imageUrl={img.url}
        shuffleCards={shuffleCards}
        onClick={(e) => {
          handleClick(e, e.target.id) }}
      />
    )
  })
  
  return (
    <>
      <div className="cards-container">{cardList}</div>
    </>
  )
}

export default App
