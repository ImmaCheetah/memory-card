import "../styles/card.css"

export default function Card({title, imageUrl, onClick}) {

    return (
        <div className="card">
            <p>{title}</p>
            <img src={imageUrl} alt="" onClick={onClick} />
        </div>
    )
}