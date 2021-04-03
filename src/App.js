import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import InterviewContext from './InterviewContext';
import store from './dummy-store';
import './App.css';

class App extends Component {
  state = {
    questions: [],
    responses: [],
    questionNumber: 0,
    answered: 0
  };

  handleNextQuestion = e => {
    e.preventDefault()
    this.state.questionNumber++;
  }

  componentDidMount() {
    this.setState({
      questions: store.questions
    })

  }

  render() {
    const contextValue = {
      questions: this.state.questions,
      responses: this.state.responses
    }
    console.log(this.state.questions)
    return (
      <InterviewContext.Provider value={contextValue}>
        <div className="App">
          <nav className="App__nav">
            <Nav />
          </nav>
          <main className="App__main">
            <Home />
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
