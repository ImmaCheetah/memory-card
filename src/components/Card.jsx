import { useState } from "react"
import "../styles/card.css"

export default function Card({imageUrl, beenClicked, onClick}) {

    return (
        <div className="card" onClick={onClick}>
            {/* <h3>{beenClicked && "Clicked"}</h3> */}
            <img 
                src={imageUrl} 
                alt="" 
                onClick={onClick}
            />
        </div>
    )
}