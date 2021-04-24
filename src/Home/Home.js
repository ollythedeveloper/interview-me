import React from 'react';
import InterviewForm from '../InterviewForm/InterviewForm';
import logo from './interview2.png';
import idea from './idea4.png';
import question from './question4.png';
import './Home.css';

export default function Home() {
    return (
        <div className="Home">

            <header className="Logo">
                <div className="group">
                    <div className="item-double">
                        <h1>Interview Me.</h1>
                    </div>
                    <div className="item">
                        <img src={logo} alt="interview" />
                    </div>
                </div>
            </header>

            <div className="disclaimer">
                <p>* Disclaimer: The Media Recorder used in Interview Me is currently not supported on iOS and Safari.</p>
            </div>

            <section className="Practice">
                <div className="group">
                    <div className="item">
                        <header>
                            <h2>Practice Makes Perfect</h2>
                        </header>
                        <p>How can you get rid of nerves and become confident in your interview skills?
                            </p>
                            <h3 className="practice">
                        By <i>practicing</i>, of course! 
                        </h3>
                        <p>
                        Get used to answering interview questions before the real deal.
                    
                    </p>
                    </div>
                    <div className="item">
                        <img src={idea} alt="idea" />
                    </div>
                </div>
            </section>

            <section className="How1">
                <h2>HOW IT WORKS:</h2>
                <div className="group">
                    <div className="item">
                        <header>
                            <h4>Receive Interview Questions</h4>
                        </header>
                        <p>You will receive the number of interview questions of your choosing.
                        After receiving a question you will be able to video record your response.
                        </p>
                    </div>
                    <div className="item">
                        <img src={question} alt="question" />
                    </div>
                    <div className="item">
                        <header>
                            <h4>Record Your Responses</h4>
                        </header>
                        <p>Once you are ready, click the "Start Recording" button to capture your response.
                        The Recorder Status will let you know when the recorder is active.
                        When you finish your response click the "Stop Recording" button then "Submit Response" to move on to the next question.
                        </p>
                    </div>
                </div>
            </section>

            <section className="How2">
            <div className="group">
                <div className="item">
                <header>
                    <h4>Review Your Performance</h4>
                </header>
                
                <p>After you have answered all the questions you will be able to watch the video of your responses.
                You will also receive guidance on how to best answer the questions you received.
                If you are not satisfied with your performance feel free to do it again. Remember practice makes perfect!!!
                </p>
                </div>
                </div>
            </section>

            <section className="Notice">
                <div className="group">
                    <div className="item">
                        <p className="note">*Please note, like a real interview, you will not be able to see yourself responding. 
                            The goal is to get comfortable giving smooth and natural responses without seeing yourself.</p>
                    </div>
                </div>
            </section>
            <InterviewForm />
        </div>
    );
}