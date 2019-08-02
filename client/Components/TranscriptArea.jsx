import React from 'react';
import styles from '../styles.css'

const TranscriptArea = (props) => (

  <div className="transcript">
  <textarea name="transcript" defaultValue={props.transcript.transcript} id="trascript-area" cols="100" rows="40"></textarea>
  </div>
);
// value={props.transcript} 
export default TranscriptArea;
