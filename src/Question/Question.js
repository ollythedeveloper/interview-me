import React from 'react';
import './Question.css'

export default class Question extends React.Component {
    state = {
        showResults: false
    }

    onClick = () => {
        this.setState({
            showResults: !this.state.showResults
        })
    }

    render() {

        const { id, question, response, guidance } = this.props

        return (
            <div className="Question_container" key={id} onClick={this.onClick}>
                <h2 className="question">{question}</h2>
                {this.state.showResults ? <div className="Resp__guide" id="respGuide">
                    {response && <video 
                                    className="Recorded_response" 
                                    key={response} 
                                    src={response} 
                                    alt={question} 
                                    playsInline
                                    controls />}
                    <p className="guidance">{guidance}</p>
                </div> : null}
            </div> 
        )
    }
}