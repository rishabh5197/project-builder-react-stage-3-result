
import {  Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="quizboard invitation">
            <h1>Quiz App</h1>
            <Link to={"/quiz"}><button className="play">Play</button></Link>
        </div>
    )
}
export default Home