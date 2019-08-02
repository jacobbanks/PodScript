import React from 'react';
import styles from '../styles.css'

const PodcastSubmit = (props) => (
  <div className="podcast">
  <label htmlFor="pod-input">Submit your Podcast</label> <input id="pod-input" onChange={(e) => {props.logFeedData()}} className="podcast-input"></input>
  <button onClick={(e) => {props.transcriptSubmit()}} className="podcast-button" type="button">Submit</button>
  </div>
);

export default PodcastSubmit;
