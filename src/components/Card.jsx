import { useState } from "react"
import "../styles/card.css"

export default function Card({title, imageUrl, shuffleCards, beenClicked, onClick, id}) {

    return (
        <div className="card" >
            <p>{title}</p>
            <h3>{beenClicked && "Clicked"}</h3>
            <img 
                src={imageUrl} 
                alt="" 
                onClick={onClick}
                id={id} 
            />
        </div>
    )
}