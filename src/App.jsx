import { useState, useEffect } from 'react'
import Card from './components/Card'

import './App.css'

function App() {
  const API_KEY = 'live_F8shDaeIQ22M7Pdeg5C4lRawfLTwbc9iPMA5xY5Tisd6C830T77lGHDeBKDr3gLR'

  const [allImages, setAllImages] = useState([])
  
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

  

  console.log('oi',allImages)
  const imageList = allImages.map((img) => {
    return (
      <Card 
        key={img.id}
        title={img.id}
        imageUrl={img.url}
        shuffleCards={shuffleCards}
      />
    )
  })
  
  return (
    <>
      <div className="cards-container">{imageList}</div>
    </>
  )
}

export default App
