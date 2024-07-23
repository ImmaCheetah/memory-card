import { useState, useEffect } from 'react'
import Card from './components/Card'
import Scoreboard from './components/Scoreboard'
import './App.css'

function App() {
  const API_KEY = 'live_F8shDaeIQ22M7Pdeg5C4lRawfLTwbc9iPMA5xY5Tisd6C830T77lGHDeBKDr3gLR'

  const [allImages, setAllImages] = useState([])
  const [clickedArray, setClickedArray] = useState([])
  const [highScore, setHighScore] = useState(0)

  const clickedCount = clickedArray.length;
  
  // Fetch images from API and load it once when app starts
  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=10&api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => setAllImages(data))
  }, [])
      
  // Function to randomize array elements
  function shuffleCards() {
    let newArray = allImages;
    let currentIndex = newArray.length;

    // While there are elements to reorder
    while (currentIndex !== 0) {
  
      // Pick a remaining element
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // Swap it with the current element
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex], newArray[currentIndex]];
    }

    // Triggers a re-render to update cards on screen
    setAllImages((prevImages) => {
      return [...prevImages]
    })
  }

  // Keep track of high score
  function storeHighScore() {
    if (clickedCount < highScore) {
      return
    } else {
      setHighScore(highScore + 1)
    }
  }

  function handleClick(id) {
    // If same image is clicked set reset array/score
    if (clickedArray.includes(id)) {
      setClickedArray([])
    } else {
    // Add to array and add 1 to score
      setClickedArray([
        ...clickedArray,
        id
      ])
      storeHighScore()
    }

    shuffleCards()
  }

  // Load card components based off fetched data
  const cardList = allImages.map((img) => {
    return (
      <Card 
        key={img.id}
        beenClicked={clickedArray.includes(img.id)}
        imageUrl={img.url}
        shuffleCards={shuffleCards}
        onClick={() => handleClick(img.id)}
      />
    )
  })
  
  return (
    <div className='app-container'>
      <h1 className='header'>Cat Memory Game</h1>
      <Scoreboard 
        score={clickedCount} 
        highScore={highScore}
      />
      <div className="cards-container">{cardList}</div>
      <h4 className='win-text'>{clickedArray.length === allImages.length && 'Well Done!'}</h4> 
    </div>
  )
}

export default App
