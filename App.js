import React, { PropTypes, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpeechRecognition from 'react-speech-recognition'

// const propTypes = {
//   // Props injected by SpeechRecognition
//   transcript: PropTypes.string,
//   resetTranscript: PropTypes.func,
//   browserSupportsSpeechRecognition: PropTypes.bool
// }

class App extends Component {
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
        <button onClick={startListening}>Start</button>
        <button onClick={stopListening}>Stop</button>
        <span>{transcript}</span>
      </div>
    );
  }
}

// App.propTypes = propTypes

//export default App;
export default SpeechRecognition(App)

