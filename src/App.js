import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
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
    numberOfQuestions: 5,
    currentQuestion: 0,
    error: null,
  };

  directToResults = () => {
    const { history } = this.props;
    if (history) history.push('/results');
  };

  handleAddResponse = response => {
    this.setState({
      responses: [...this.state.responses, response]
    })
  }

  handleSelectedNum = (quantity) => {
    this.setState({
      numberOfQuestions: quantity
    })
    
  }

  handleNextQuestion = () => {
    const nextQuestion = this.state.currentQuestion + 1;
    if (nextQuestion < this.state.questions.length) {
      this.setState({
        currentQuestion: nextQuestion
      })
    } else {
      this.directToResults()
    }
  }

  componentDidMount() {
    let randomQuestions = [];
    let questions = store.questions;
    let numberOfQuestions = this.state.numberOfQuestions;
    while(questions.length !== 0) {
      let randomIndex = Math.floor(Math.random() * questions.length);
      randomQuestions.push(questions[randomIndex]);
      questions.splice(randomIndex, 1);
    }
    this.setState({
      questions: randomQuestions.slice(0, numberOfQuestions)
    })
  }

  render() {
    const contextValue = {
      questions: this.state.questions,
      responses: this.state.responses,
      currentQuestion: this.state.currentQuestion,
      numberOfQuestions: this.state.numberOfQuestions,
      selectedNum: this.handleSelectedNum,
      addResponse: this.handleAddResponse,
      nextQuestion: this.handleNextQuestion,
    }

    return (
      <InterviewContext.Provider value={contextValue}>
        <div className="App">
          <nav className="App__nav">
            <Nav />
          </nav>
          <main className="App__main">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/question/:questionId' component={QuestionPage} />
              <Route path='/results' component={Results} />
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </InterviewContext.Provider>
    );
  }
}
export default withRouter(App);
