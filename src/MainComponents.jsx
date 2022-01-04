import { Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import Quiz from './components/quizpage';
import Result from "./components/results";



const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quiz' element={<div className="quizboard"><Quiz /></div>} />
            <Route path='/results/:total/:score' element={<Result/> } />
        </Routes>
    )
}

export default Main