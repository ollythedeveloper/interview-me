import React, { useContext }from 'react';
import { useHistory } from 'react-router-dom';
import InterviewContext from '../InterviewContext';
import './InterviewForm.css';

export default function InterviewForm() {
    const { selectedNum, submitForm } = useContext(InterviewContext)
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        submitForm();
        history.push('/interview')
    }

    const handleChange = e => {
        selectedNum(e.target.value)
    }

    return (
        <div className="InterviewForm">
            <h4>Start a Mock Interview</h4>
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