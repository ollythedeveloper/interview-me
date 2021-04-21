import React, { useContext, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import InterviewContext from '../InterviewContext';
import './IntVideoRecorder.css';

export const RecordView = (props) => {
    const curQuestion = props.curQuestion;
    const { nextQuestion } = useContext(InterviewContext);

    const {
        status,
        startRecording,
        stopRecording,
        clearBlobUrl,
        mediaBlobUrl
    } = useReactMediaRecorder({ video: true });

    const [curStatus, setCurStatus] = useState(status);

    const startedRec = () => {
        startRecording();
    }

    const stoppedRec = async () => {
        stopRecording();
        clearBlobUrl();
        const audioBlob = await fetch(mediaBlobUrl).then(r => r.blob());

        const url = window.URL.createObjectURL(
            new Blob([audioBlob]))

        let audioFile = url;
        curQuestion.response = audioFile;
        setCurStatus('stopped')
    }

    const nextQuest = async () => {
        if (curStatus !== 'stopped') {
            alert('You must start and stop new recording before submitting the response')

        } else {
            stopRecording();
            const audioBlob = await fetch(mediaBlobUrl).then(r => r.blob());

            const url = window.URL.createObjectURL(
                new Blob([audioBlob]))

            let audioFile = url;
            curQuestion.response = audioFile;
            clearBlobUrl();
            nextQuestion();
            setCurStatus('idle')
        }
    }


    return (
        <div className="recorder">
            <button onClick={startedRec}>Start Recording</button>
            {' '}
            <button onClick={stoppedRec}>Stop Recording</button>
            {' '}
            <button onClick={nextQuest}>Submit Response</button>
            <h3 className="recorderStatus">Recorder Status: {status}</h3>
            <br />
            <span class="material-icons-outlined">
                videocam
            </span>
            <video className="hidden" src={mediaBlobUrl} controls />
        </div>
    );
};