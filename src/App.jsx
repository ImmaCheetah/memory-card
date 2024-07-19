import { useState, useEffect } from 'react'
import Card from './components/Card'
import { v4 as uuidv4 } from "uuid";

import './App.css'

function App() {
  const API_KEY = 'live_F8shDaeIQ22M7Pdeg5C4lRawfLTwbc9iPMA5xY5Tisd6C830T77lGHDeBKDr3gLR'

  const [allImages, setAllImages] = useState([])
  const [clickedArray, setClickedArray] = useState([])
  
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
    setClickedArray(
      clickedArray.map((click) => {
        if (click.id === id) {
          return {...click, beenClicked: true}
        } else {
          return click
        }
      })
    )
    
    console.log('clicked', clickedArray)

    // setClickedArray(prevClick => {
    //   return [
    //     ...prevClick, 
    //     {
    //       id: uuidv4(),
    //       beenClicked: true
    //     }
    //   ]
    // })
  }

  console.log('oi',allImages)
  const cardList = allImages.map((img) => {
    
    return (
      <Card 
        key={img.id}
        title={img.id}
        imageUrl={img.url}
        shuffleCards={shuffleCards}
        onClick={handleClick}
        
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
