import React,  { useContext, useState }from 'react';
import { useHistory } from 'react-router-dom';
import {RecordView} from '../IntVideoRecorder/IntVideoRecorder';
import InterviewContext from '../InterviewContext';
import './QuestionPage.css';

export default function QuestionPage(props) {
    const { questions=[] } = useContext(InterviewContext)
    const [currentQuestion, setCurrentQuestion ] = useState(0);
    const history = useHistory();

    const handleComplete = () => history.push('/results');

    const handleExit = () => history.push('/');
    
    const handleSubmitResponse = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else {
            history.push('/results')
        }
    };
    
    return (
        <div className="QuestionPage">
            <section className="Qustion">
                <h2>{questions[currentQuestion].question}</h2>
                <div className="VidRecorder">
                    <RecordView />
                </div>
                <div className="Qpage__buttons">
                    <button type="button" onClick={handleExit}>Exit</button>
                    {' '}
                    <button type="button" onClick={handleSubmitResponse}>Skip</button>
                    {' '}
                    <button type="button" onClick={handleSubmitResponse}>Submit Response</button>
                    {' '}
                    <button type="button" onClick={handleComplete}>Complete Interview</button>
                </div>
            </section>

        </div>
    );
}