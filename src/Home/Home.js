import React from 'react';
import InterviewForm from '../InterviewForm/InterviewForm';
import './Home.css';

export default function Home() {
    return (
        <div className="Home">
            <header>
                <h1>Interview Me</h1>
            </header>
            <section>
                <header>
                    <h2>Practice Makes Perfect</h2>
                </header>
                <p>How can you get rid of nerves and become confident in your interview skills?
                        By <i>practicing</i>, of course! Get used to answering interview questions before the real deal.
                    </p>
            </section>
            <section>
                <header>
                    <h4>Receive Inteview Questions</h4>
                </header>
                <p>[<em>placeholder for screenshot of interview prompt</em>]</p>
                <p>You will receive the number of interview questions of your chosing.
                After receiving a question you will be able to video record your response.
                    </p>
            </section>
            <section>
                <header>
                    <h4>Record Your Response</h4>
                </header>
                <p>[<em>placeholder for screenshot of video-recording</em>]</p>
                <p>Once you are ready, click the "Start Recording" button to capture your response. 
                    The Recorder Status will let you know when the recorder is active. 
                    When you finish your response click the "Stop Recording" button then "Submit Response" to move on to the next question.
                </p>
            </section>
            <section>
                <header>
                    <h4>Review Your Performance</h4>
                </header>
                <p>[<em>placeholder for screenshot of review page</em>]</p>
                <p>After you have answered all the questions you will be able to watch the video of your responses. 
                    You will also receive guidance on how to best answer the questions you received. 
                    If you are not satisfied with your performance feel free to do it again. Remember practice makes perfect!!!
                </p>
            </section>
            <InterviewForm />
        
        </div>
    );
}