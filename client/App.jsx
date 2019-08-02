import React, { Component } from "react";
import PodcastSubmit from "./Components/PodcastSubmit.jsx";
import TranscriptArea from './Components/TranscriptArea.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      feed: '',
      transcript: {
        transcript: "",
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange() {
    this.setState({feed: event.target.value})
  }


  handleSubmit() {
    fetch('/transcript')
    .then(response => response.json())
    .then(transcript => this.setState( {transcript} ));
    };


  render() {

        return (
          <div className="App">
            <h1> PodScript </h1>
            <PodcastSubmit logFeedData={this.handleChange} transcriptSubmit={this.handleSubmit}/>
            <TranscriptArea  transcript={this.state.transcript} />
          </div>
        );
      }
    }
 
export default App; 