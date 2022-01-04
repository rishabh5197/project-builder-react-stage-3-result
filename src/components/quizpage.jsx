import React from "react"
import { Link } from "react-router-dom"
import quiz from "./source"


const Quiz = () => {
    const [value, setvalue] = React.useState(-1)
    const [score, setscore] = React.useState(0)
    const [result, setresult] = React.useState('')

    const [sno, setno] = React.useState(0)

    const next = () => {
        setno(sno => sno !== quiz.length - 1 ? ++sno : sno)
        setscore(score => value === currentquestion.correctIndex ? ++score : score)
        setvalue(-1)
    }
    const previous = () => {
        sno > 0 ? setno(no => --no) : setvalue(0)
        setscore(score => score !== 0 ? --score : 0)
    }
    const optionclick = (index) => {
        console.log("click");
        setvalue(index)
        setresult(index === currentquestion.correctIndex ? "correct" : "wrong")
        console.log(currentquestion.correctIndex === index);
        console.log(currentquestion.correctIndex);
        console.log(index);

    }
    const currentquestion = quiz[sno]
    console.log("current ans is " + currentquestion.answers[currentquestion.correctIndex]);


    return (
        <React.Fragment>
            <div className={`banner ${result}   `   }>{result}</div>
            <h1>Question</h1>
            <span>{sno + 1} of {quiz.length}</span>
            <span>{currentquestion.question}</span>
            <div className="options">
                {
                    currentquestion.answers.map((ele, index) => <div key={ele} id={index} onClick={() => optionclick(index)} >{ele}</div>)
                }
            </div>
            <div className="buttons">
                <button onClick={previous} disabled={sno !== 0 ? false : true}   >Previous</button>
                <button onClick={next} disabled={value !== -1 && sno !== quiz.length - 1 ? false : true} >Next</button>
               {sno !== quiz.length-1 ? <Link to="/" className=" button quit" >Quit</Link>   : <Link to={`/results/${quiz.length}/${value === currentquestion.correctIndex ? score+1 : score}`}  className="button submit" >Submit</Link>}
                </div>
                </React.Fragment>
    )
            }

export default Quiz
/**
 * {
    "question": "What is the scientific name of a butterfly?",
    "answers": [
    "Apis",
    "Coleoptera",
    "Formicidae",
    "Rhopalocera"
    ],
    "correctIndex": 3
    },
 */