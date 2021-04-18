import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Results from './Results/Results';
import InterviewContext from './InterviewContext';
import config from './config';
import './App.css';
import QuestionPage from './QuestionPage/QuestionPage';

class App extends Component {
  state = {
    allQuestions: [],
    questions: [],
    numberOfQuestions: 5,
    currentQuestion: 0,
    error: null,
  };

  setAllQuestions = allQuestions => {
    this.setState({
      allQuestions,
      error: null,
    })
  }
  
  setQuestions = questions => {
    this.setState({
      questions
    })
  }

  directToResults = () => {
    const { history } = this.props;
    if (history) history.push('/results');
  };

  directToQuestions = () => {
    const { history } = this.props;
    history.push('/questions/questionId');
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
    fetch(config.API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setAllQuestions)
      .catch(error => this.setState({ error }))
  }

  handleSubmitForm = () => {
    const allQuestions = this.state.allQuestions;
    const numberOfQuestions = this.state.numberOfQuestions;
    console.log(allQuestions, numberOfQuestions)
    let randomQuestions = [];
    while(allQuestions.length !== 0) {
      let randomIndex = Math.floor(Math.random() * allQuestions.length);
      randomQuestions.push(allQuestions[randomIndex]);
      allQuestions.splice(randomIndex, 1);
    };
    this.setState({
      questions: randomQuestions.slice(0, numberOfQuestions)
    })
    console.log(this.state.questions)
  }

  render() {
    console.log(this.state.allQuestions)
    const contextValue = {
      allQuestions: this.state.allQuestions,
      questions: this.state.questions,
      currentQuestion: this.state.currentQuestion,
      numberOfQuestions: this.state.numberOfQuestions,
      selectedNum: this.handleSelectedNum,
      nextQuestion: this.handleNextQuestion,
      submitForm: this.handleSubmitForm
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
