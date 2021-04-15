import React, { useContext, useState }from 'react';
import { Link, useHistory } from 'react-router-dom';
import InterviewContext from '../InterviewContext';
import './InterviewForm.css';

export default function InterviewForm() {
    const { numberOfQuestions, selectedNum } = useContext(InterviewContext)
    const history = useHistory();

    const [selectNumber, setSelectNumber] = useState(numberOfQuestions);

    const handleSubmit = e => {
        e.preventDefault()
        // const { questionNum } = e.target.value
        // const selectedNum = questionNum.value
        // console.log(questionNum)
        history.push('/question/questionId')
        console.log(selectNumber)
        // numberOfQuestions = selectNumber
    
        // console.log(questions.value)
        // console.log(numberOfQuestions)
    }

    const handleChange = e => {
        setSelectNumber(e.target.value);
        selectedNum(selectNumber)
        console.log(selectNumber)
    }

    return (
        <div className="InterviewForm">
            <h4>Start a Mock Interview</h4>
            <form class="Request__form" onSubmit={handleSubmit}>
                <div>
                    <label for="questions">
                        Number of Questions: 
                    </label>
                    {' '}
                    <select 
                        name="questionNum" 
                        id="questionNum"
                        // value={selectNumber}
                        onChange={handleChange}>
                        <option value={5}>5</option>
                        <option value={8}>8</option>
                        <option value={10}>10</option>
                    </select>
                </div>
                {/* <Link to={`/question/questionId`}> */}
                    <button type="submit">Start</button>
                {/* </Link> */}
            </form>
        </div>
    )
}