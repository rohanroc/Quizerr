import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'
const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [quetion, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_arr = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (quetion.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
                option_arr[quetion.ans - 1].current.classList.add("correct");
            }
        }
    }

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_arr.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }
    return (
        <>
            <div className='container'>
                <h1 className='head'>Quizerr <p className='subhead'>(a quiz app)</p></h1>
                <hr />
                {result ?
                    <>
                        <h2>You Scored {score} Out Of {data.length}</h2>
                        <button onClick={reset}>Reset</button>
                    </>
                    :
                    <>
                        <h2>{index + 1}. {quetion.question}</h2>
                        <ul>
                            <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{quetion.option1}</li>
                            <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{quetion.option2}</li>
                            <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{quetion.option3}</li>
                            <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{quetion.option4}</li>
                        </ul>
                        <button onClick={next}>Next</button>
                        <div className="index">{index + 1} of {data.length} questions</div>
                    </>}
            </div>


            <div className='credit'>
                <p>Made With ❤️ By <a href="https://github.com/rohanroc"> "Arijit"</a></p>
            </div>
        </>
    )
}

export default Quiz
