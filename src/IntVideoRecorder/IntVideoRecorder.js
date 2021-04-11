import React, { useContext, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import InterviewContext from '../InterviewContext';
import './IntVideoRecorder.css';

export const RecordView = (props) => {
    const curQuestion = props.curQuestion;
    // const { questions=[], currentQuestion } = useContext(InterviewContext)

    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({ video: true });

    const stoppedRec = async () => {
        stopRecording();
        const audioBlob = await fetch(mediaBlobUrl).then(r => r.blob());

        const url = window.URL.createObjectURL(
            new Blob([audioBlob]))

        let audioFile = url;
        curQuestion.response = audioFile
        console.log(curQuestion)
        // questions[currentQuestion].response = audioFile
        // console.log(questions[currentQuestion])
    }


    return (
        <div className="recorder">
             <button onClick={startRecording}>Start Recording</button>
            {' '}
            <button onClick={stoppedRec}>Stop Recording</button>
            <h3>{status}</h3>
            <br />
            <video className="hidden" src={mediaBlobUrl} controls />
        </div>
    );
};