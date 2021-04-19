import React from 'react';

const InterviewContext = React.createContext({
    allQuestions: [],
    questions: [],
    currentQuestion: Number,
    numberOfQuestions: Number,
    selectedNum: () => {},
    addResponse: () => {},
    nextQuestion: () => {},
    submitForm: () => {},
    resetQuestPlacement: () => {}
})

export default InterviewContext