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

    const stoppedRec = () => {
        stopRecording();
        console.log(mediaBlobUrl);
    }

    return (
        <div className="recorder">
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            {' '}
            <button onClick={stoppedRec}>Stop Recording</button>
            <br />
            <video src={mediaBlobUrl} controls />
        </div>
    );
};