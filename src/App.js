import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
    currentQuestion: 0,
    error: null,
  };

  handleAddResponse = response => {
    this.setState({
      responses: [...this.state.responses, response]
    })
  }

  handleNextQuestion = () => {
    const nextQuestion = this.state.currentQuestion + 1;
    if (nextQuestion < this.state.questions.length) {
      this.setState({
        currentQuestion: nextQuestion
      })
    } else {
      this.history.push('/results')
    }
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
      currentQuestion: this.state.currentQuestion,
      addResponse: this.handleAddResponse,
      nextQuestion: this.handleNextQuestion,
    }

    // let shouldStop = false;
    // let stopped = false;
    // const downloadLink = document.getElementById('download');
    // const stopButton = document.getElementById('stop');

    // stopButton.addEventListener('click', function() {
    //   shouldStop = true;
    // }) 

    // var player = document.getElementById('player');

    // var handleSuccess = function(stream) {
    //   const options = {mimeType: 'video/webm'};
    //   const recordedChunks = [];
    //   const mediaRecorder = new MediaRecorder(stream, options);

    //   mediaRecorder.addEventListener('dataavailable', function(e) {
    //     if (e.data.size > 0) {
    //       recordedChunks.push(e.data);
    //     }

    //     if(shouldStop === true && stopped === false) {
    //       mediaRecorder.stop();
    //       stopped = true;
    //     }
    //   });

    //   mediaRecorder.addEventListener('stop', function() {
    //     downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
    //     downloadLink.download = 'acetest.webm';
    //   });

    //   mediaRecorder.start();
    // };

    // navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    //   .then(handleSuccess)


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
            {/* <video id="player" controls />
            <a id="download">Download</a>
            <button id="stop">Stop</button> */}
            {/* <video src="http://localhost:3000/8c6310a7-8cf9-4025-a102-5c7e840b47e0" /> */}

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
