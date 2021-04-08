import React from 'react';
import { Link } from 'react-router-dom';
import './InterviewForm.css';

export default function InterviewForm() {
    return (
        <div className="InterviewForm">
            <h4>Start a Mock Interview</h4>
            <form class="Request__form">
                <div>
                    <label for="questions">
                        Number of Questions: 
                    </label>
                    {' '}
                    <select name="questions" id="questions">
                        <option value="5">5</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <Link to={`/question/questionId`}>
                    <button type="submit">Start</button>
                </Link>
            </form>
        </div>
    )
}