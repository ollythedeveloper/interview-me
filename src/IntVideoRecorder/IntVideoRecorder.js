import React from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import './IntVideoRecorder.css';

export const RecordView = (props) => {
    const curQuestion = props.curQuestion;

    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({ video: true });

    const stoppedRec = () => {
        stopRecording();
        console.log(mediaBlobUrl);
        console.log(curQuestion);
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