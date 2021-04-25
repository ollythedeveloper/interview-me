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
            <section className="form_section">
            <h4 className="start-interview">Start a Mock Interview</h4>
            <form className="Request__form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="questionNum">
                        Number of Questions: 
                    </label>
                    {' '}
                    <select 
                        name="questionNum" 
                        id="questionNum"
                        aria-label="Number of interview questions"
                        onChange={handleChange}>
                        <option value={5}>5</option>
                        <option value={8}>8</option>
                        <option value={10}>10</option>
                    </select>
                </div>
                <br/>
                    <button type="submit">Start</button>
            </form>
            </section>
        </div>
    )
}