import React, { Component } from "react";
import PodcastSubmit from "./Components/PodcastSubmit.jsx";

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1> PodScript </h1>
        <PodcastSubmit />
      </div>
    );
  }
}

export default App; 