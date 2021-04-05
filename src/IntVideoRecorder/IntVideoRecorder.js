import React from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import './IntVideoRecorder.css';

export const RecordView = () => {

    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({ video: true });
    // console.log(mediaBlobUrl)

    const stoppedRec = () => {
        stopRecording();
        console.log(mediaBlobUrl);
    }

    return (
        <div className="recorder">
            <p>{status}</p>
            <button onClick={startRecording}>Start</button>
            {' '}
            <button onClick={stoppedRec}>Stop</button>
            <br />
            <video src={mediaBlobUrl} controls />
        </div>
    );
};