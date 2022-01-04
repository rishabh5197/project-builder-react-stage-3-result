import { useParams } from "react-router-dom";

const Result = () => {
    const { total, score } = useParams()
    console.log(total);
    const point = Number.parseInt((score / total) * 100)
    console.log(point);
    const msg = point <= 40 ? "You need more pratice!" : point < 80 ? "Revise Again and Try!" : "Great Work"
    return (
        <div className="quizboard">
            <h1 className="msg">{msg}</h1>
            <h1 className="point">Your point {point}%</h1>
            <p>Total No of questions <span>{total}</span></p>
            <p>No of Attempted  <span>{total}</span></p>
            <p>No of Correct Answer  <span>{score}</span></p>
            <p>No of Wrong Answer  <span>{total - score}</span></p>




        </div>

    )
}

export default Result