import React, { Component } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Results from './Results/Results';
import InterviewContext from './InterviewContext';
import store from './dummy-store';
import './App.css';
import QuestionPage from './QuestionPage/QuestionPage';

class App extends Component {
  state = {
    questions: [],
    responses: [],
    questionNumber: 0,
    answered: 0,
    error: null,
  };

  

  handleNextQuestion = e => {
    e.preventDefault()
    this.setState({
      questionNumber: this.state.questionNumber+ 1})
  }

  handleAddResponse = response => {
    this.setState({
      responses: [...this.state.responses, response]
    })
  }

  componentDidMount() {
    this.setState({
      questions: store.questions
    })

  }

  render() {
    const contextValue = {
      questions: this.state.questions,
      responses: this.state.responses,
      questionNumber: this.state.questionNumber,
      addResponse: this.handleAddResponse,
      nextQuestion: this.handleNextQuestion,
    }
    console.log(this.state.questions)
    return (
      <InterviewContext.Provider value={contextValue}>
        <div className="App">
          <nav className="App__nav">
            <Nav />
          </nav>
          <main className="App__main">
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route
            path='/question/:questionId'
            component={QuestionPage}
            />
            <Route 
            path='/results'
            component={Results}/>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </InterviewContext.Provider>
    );
  }
}
export default App;
