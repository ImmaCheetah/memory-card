import "../styles/card.css"

export default function Card({title, imageUrl}) {

    return (
        <div className="card">
            <p>{title}</p>
            <img src={imageUrl} alt="" />
        </div>
    )
}