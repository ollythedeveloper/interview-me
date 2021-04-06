import React from 'react';

export default class Question extends React.Component {
    render() {
        const { id, question, response, guidance } = this.props

        return (
            <div className="Question" key={id}>
                <h2>{question}</h2>
                <div className="Video__response">
                    <video src={response} />
                </div>
                <p>{guidance}</p>
            </div>
        )
    }
}