import "../styles/card.css"

export default function Card({imageUrl, onClick}) {

    return (
        <div className="card" onClick={onClick}>
            <img 
                src={imageUrl} 
                alt="Bengal cat" 
                onClick={onClick}
            />
        </div>
    )
}