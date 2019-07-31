import React from 'react';
import styles from '../styles.css'

const PodcastSubmit = () => (
  <div>
  <label for="pod-input">Submit your Podcast</label> <input iD="pod-input" className="podcast-input"></input>
  <button className="podcast-button" type="button">Submit</button>
  </div>
);

export default PodcastSubmit;
