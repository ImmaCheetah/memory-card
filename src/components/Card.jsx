import { useState } from "react"
import "../styles/card.css"

export default function Card({title, imageUrl, shuffleCards}) {

    const [beenClicked, setBeenClicked] = useState(false)

    function toggleClicked() {
        setBeenClicked(true)
        console.log(beenClicked)
    }

    return (
        <div className="card">
            <p>{title}</p>
            <h3>{beenClicked && "Clicked"}</h3>
            <img 
                src={imageUrl} 
                alt="" 
                onClick={()=> { 
                    shuffleCards()
                    toggleClicked()
                }} 
            />
        </div>
    )
}