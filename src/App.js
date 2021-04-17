import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Results from './Results/Results';
import InterviewContext from './InterviewContext';
// import store from './dummy-store';
import config from './config';
import './App.css';
import QuestionPage from './QuestionPage/QuestionPage';

class App extends Component {
  state = {
    allQuestions: [],
    questions: [],
    responses: [],
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

  getRandomQuestions = () => {
    // console.log(this.state.allQuestions)
    let randomQuestions = [];
    let questions = this.state.allQuestions;
    console.log(questions)
    let numberOfQuestions = this.state.numberOfQuestions;
    while (questions.length !== 0) {
      let randomIndex = Math.floor(Math.random() * questions.length);
      randomQuestions.push(questions[randomIndex]);
      questions.splice(randomIndex, 1);
    }
    this.setState({
      questions: randomQuestions.slice(0, numberOfQuestions)
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
    // let randomQuestions = [];
    // let questions = this.state.allQuestions;
    // console.log(questions)
    // let numberOfQuestions = this.state.numberOfQuestions;
    // while (questions.length !== 0) {
    //   let randomIndex = Math.floor(Math.random() * questions.length);
    //   randomQuestions.push(questions[randomIndex]);
    //   questions.splice(randomIndex, 1);
    // }
    // this.setState({
    //   questions: randomQuestions.slice(0, numberOfQuestions)
    // })
    // getRandomQuestions = () => {
    //   console.log(this.state.allQuestions)
    //   let randomQuestions = [];
    //   let questions = this.state.allQuestions;
    //   console.log(questions)
    //   let numberOfQuestions = this.state.numberOfQuestions;
    //   while (questions.length !== 0) {
    //     let randomIndex = Math.floor(Math.random() * questions.length);
    //     randomQuestions.push(questions[randomIndex]);
    //     questions.splice(randomIndex, 1);
    //   }
    //   this.setState({
    //     questions: randomQuestions.slice(0, numberOfQuestions)
    //   })
    // }
    // this.getRandomQuestions()
  }

  // renderRandomQuestions(){
  //   const {allQuestions} = this.state;
  //     let randomQuestions = [];
  //     let questions = this.state.allQuestions;
  //     console.log(questions)
  //     let numberOfQuestions = this.state.numberOfQuestions;
  //     while (questions.length !== 0) {
  //       let randomIndex = Math.floor(Math.random() * questions.length);
  //       randomQuestions.push(questions[randomIndex]);
  //       questions.splice(randomIndex, 1);
  //     }
  //     this.setState({
  //       questions: randomQuestions.slice(0, numberOfQuestions)
  //     })
  // }

  render() {
    console.log(this.state.allQuestions)
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
