import React from 'react';

const InterviewContext = React.createContext({
    questions: [],
    responses: [],
    questionNumber: Number,
    addResponse: () => {},
    nextQuestion: () => {}
})

export default InterviewContext