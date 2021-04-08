import React from 'react';

const InterviewContext = React.createContext({
    questions: [],
    responses: [],
    currentQuestion: Number,
    addResponse: () => {},
    nextQuestion: () => {}
})

export default InterviewContext