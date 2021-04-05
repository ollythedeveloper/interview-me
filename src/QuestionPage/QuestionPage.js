import React,  { useContext, useState }from 'react';
import { useHistory } from 'react-router-dom';
import {RecordView} from '../IntVideoRecorder/IntVideoRecorder';
import InterviewContext from '../InterviewContext';
import './QuestionPage.css';

export default function QuestionPage(props) {
    const { questions=[], questionNumber, nextQuestion } = useContext(InterviewContext)
    // const [questionNumber, setQuestionNumber] = useState(0);
    const numberOfQuestions = questions.length
    const history = useHistory();
    console.log(questionNumber)

    const handleComplete = () => history.push('/results');

    // const updateQuestion = () => {
    //     setQuestionNumber(questionNumber +1)
    // }
    
    console.log(questions)
    return (
        <div className="QuestionPage">
            <section className="Qustion">
                <h2>{questions[questionNumber].question}</h2>
                <div className="VidRecorder">
                    <RecordView />
                </div>
                <div className="Qpage__buttons">
                    <button type="button">Exit</button>
                    {' '}
                    <button type="button">Skip</button>
                    {' '}
                    <button type="button" onClick={nextQuestion}>Submit Response</button>
                    {' '}
                    <button type="button" onClick={handleComplete}>Complete Interview</button>
                </div>
            </section>

        </div>
    );
}