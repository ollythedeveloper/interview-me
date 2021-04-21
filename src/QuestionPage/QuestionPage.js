import React,  { useContext }from 'react';
import { useHistory } from 'react-router-dom';
import {RecordView} from '../IntVideoRecorder/IntVideoRecorder';
import InterviewContext from '../InterviewContext';
import './QuestionPage.css';

export default function QuestionPage(props) {
    const { questions=[], currentQuestion, resetQuestPlacement, nextQuestion } = useContext(InterviewContext)

    const history = useHistory();

    const handleExit = () => {
        resetQuestPlacement();
        history.push('/')
    };

    const curQuestion = questions[currentQuestion];
    
    return (
        <div className="QuestionPage">
            <section className="Qustion">
                <h2 className="Question__text">{curQuestion.question}</h2>
                <div className="VidRecorder">
                    <RecordView curQuestion={curQuestion}/>
                </div>
                <div className="Qpage__buttons">
                    <button type="button" onClick={handleExit}>Exit</button>
                    {' '}
                    <button type="button" onClick={nextQuestion}>Skip</button>
                </div>
            </section>

        </div>
    );
}