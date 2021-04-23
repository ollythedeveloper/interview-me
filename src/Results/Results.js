import React, { useContext } from 'react';
import InterviewContext from '../InterviewContext';
import Question from '../Question/Question';
import how from './question2.png';
import './Results.css'

export default function Results() {
    const { questions = [] } = useContext(InterviewContext)
    return (
        <div className="Results">
            <h2 className="Instructions">* Click on the Interview Question to review your response and guidance.</h2>
            <section className="results-section1">
                <div className="group">
                    <div className="item">
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
                </div>
            </section>
            <section className="results-section2">
                <div className="group">
                    <div className="item">
                        <h4>So...how did you do?</h4>
                        <img src={how} />
                    </div>
                </div>

            </section>
        </div>
    )
}