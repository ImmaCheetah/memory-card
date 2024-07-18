import { useState, useEffect } from 'react'
import Card from './components/Card'

import './App.css'

function App() {

  const [image, setImage] = useState({
    title: 'bam',
    imageUrl: ''
  })

  const [allImages, setAllImages] = useState([])
  
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
        .then(res => res.json())
        .then(data => setAllImages(data))
      }, [])
      
      
    console.log('oi',allImages)
    const imageList = allImages.map((img) => {
      return (
        <Card 
          key={img.id}
          title={img.id}
          imageUrl={img.url}
        />
      )
    })
  
  return (
    <>
      <p>hello</p>
      {imageList}
    </>
  )
}

export default App
