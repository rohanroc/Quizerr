import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'
const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [quetion, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (quetion.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
            }
        }
    }
    return (
        <div className='container'>
            <h1>Quizerr <p>-a quiz app</p></h1>
            <hr />
            <h2>{index + 1}. {quetion.question}</h2>
            <ul>
                <li onClick={(e) => { checkAns(e, 1) }}>{quetion.option1}</li>
                <li onClick={(e) => { checkAns(e, 2) }}>{quetion.option2}</li>
                <li onClick={(e) => { checkAns(e, 3) }}>{quetion.option3}</li>
                <li onClick={(e) => { checkAns(e, 4) }}>{quetion.option4}</li>
            </ul>
            <button>Next</button>
            <div className="index">1 of 10 questions</div>
        </div>
    )
}

export default Quiz
