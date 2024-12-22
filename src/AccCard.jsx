import React from 'react'
import './App.css'

const AccCard = (props) => {
  return (
    <div id="mainCardDiv">
        <div id="cards">
          <button id="new"><p>{props.new}</p></button>
          <h2 id="phoneName">{props.phoneName}</h2>
          <p id="phonePara">{props.phonePara}</p>
          <br /><br /><br />
          <p id="price">{props.price}</p>
        </div>
        <div>
          <img
            width={250}
            src={props.phoneImg}
            alt="Phone"
          />
        </div>
      </div>
  )
}

export default AccCard