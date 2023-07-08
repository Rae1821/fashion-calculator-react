import React from 'react'
import Button from './Button'

function Results(props) {

  return (
    <div className="results-container">
      <div className="results">
        <h3>
          <span className="confetti">🎉</span> 
            {props.bodyShape} 
          <span className="confetti">🎉</span>
        </h3>
        <p>Some characteristics of the {props.name} body shape include:</p>
        <ul className="characteristics">
            <li>{props.mainCharacteristic}</li>
            <li>{props.secondaryCharacteristic}</li>
            <li>{props.additionalCharacteristic}</li>
        </ul>
      <Button handleClick={props.handleStartOver} text="Start Over" type="start-over-btn" />

      </div>
    </div>
  )
}

export default Results
