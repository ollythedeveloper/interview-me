import React from 'react';

export default class Question extends React.Component {
    render() {
        const { id, question, response, guidance } = this.props

        return (
            <div className="Question" key={id}>
                <h2>{question}</h2>
                <div className="Video__response">
                    {response && <video src={response} alt={question} controls/>}
                </div>
                <p>{guidance}</p>
            </div>
        )
    }
}