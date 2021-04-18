import React, { useContext }from 'react';
import { useHistory } from 'react-router-dom';
import InterviewContext from '../InterviewContext';
import './InterviewForm.css';

export default function InterviewForm() {
    const { numberOfQuestions, selectedNum, submitForm } = useContext(InterviewContext)
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        selectedNum(e.target.value);
        submitForm();
        // history.push('/question/questionId')
    }

    const handleChange = e => {
        selectedNum(e.target.value)
    }

    return (
        <div className="InterviewForm">
            <h4>Start a Mock Interview</h4>
            <p>{numberOfQuestions}</p>
            <form className="Request__form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="questions">
                        Number of Questions: 
                    </label>
                    {' '}
                    <select 
                        name="questionNum" 
                        id="questionNum"
                        onChange={handleChange}>
                        <option value={5}>5</option>
                        <option value={8}>8</option>
                        <option value={10}>10</option>
                    </select>
                </div>
                    <button type="submit">Start</button>
            </form>
        </div>
    )
}