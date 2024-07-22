import "../styles/scoreboard.css"

export default function Scoreboard({score, highScore}) {
    return (
        <div className="scoreboard">
            <h1 className="current score">Current Score: {score}</h1>
            <h2 className="high score">High Score: {highScore}</h2>
            <p className="guide">Click all images without clicking the same image</p>
        </div>
    )
}