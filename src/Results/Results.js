import React, { useContext } from 'react';
import InterviewContext from '../InterviewContext';
import Question from '../Question/Question';
import './Results.css'

export default function Results() {
    const { questions=[] } = useContext(InterviewContext)
    return (
        <div className="Results">
            <h2 className="Instructions">* Click on the Interview Question to review your response and guidance.</h2>
            <ul>
                {questions.map(question =>
                    <li key={question.id}>
                        <Question
                            id={question.id}
                            question={question.question}
                            guidance={question.guidance}
                            response={question.response}
                        />
                    </li>)}
            </ul>
        </div>
    )
}