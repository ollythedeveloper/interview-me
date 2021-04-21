import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
// import Footer from './Footer/Footer';
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

  resetQuestPlacement = () => {
    this.setState({
      currentQuestion: 0
    })
    this.setState({
      numberOfQuestions: 5
    })
  }

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
    history.push('/interview');
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
    fetch(config.API_BASE_URL, {
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
    const numberOfQuestions = this.state.numberOfQuestions;
    const allQuestions = this.state.allQuestions;
    var m = allQuestions.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);

      t = allQuestions[m];
      allQuestions[m] = allQuestions[i];
      allQuestions[i] = t;
    }
    this.setState({
      questions: allQuestions.slice(0, numberOfQuestions)
    })
  }

  render() {
    const contextValue = {
      allQuestions: this.state.allQuestions,
      questions: this.state.questions,
      currentQuestion: this.state.currentQuestion,
      numberOfQuestions: this.state.numberOfQuestions,
      selectedNum: this.handleSelectedNum,
      nextQuestion: this.handleNextQuestion,
      submitForm: this.handleSubmitForm,
      resetQuestPlacement: this.resetQuestPlacement,
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
              <Route path='/interview' component={QuestionPage} />
              <Route path='/results' component={Results} />
            </Switch>
          </main>
          <footer>
            {/* <Footer /> */}
          </footer>
        </div>
      </InterviewContext.Provider>
    );
  }
}
export default withRouter(App);
