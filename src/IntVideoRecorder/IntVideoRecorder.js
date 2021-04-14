import React, { useContext, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import InterviewContext from '../InterviewContext';
import './IntVideoRecorder.css';

export const RecordView = (props) => {
    const curQuestion = props.curQuestion;

    const {
        status,
        startRecording,
        stopRecording,
        pauseRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({ video: true });

    const stoppedRec = async () => {
        pauseRecording();
        stopRecording();
        const audioBlob = await fetch(mediaBlobUrl).then(r => r.blob());

        const url = window.URL.createObjectURL(
            new Blob([audioBlob]))

        let audioFile = url;
        curQuestion.response = audioFile;
        console.log(curQuestion)
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