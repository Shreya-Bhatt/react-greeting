import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let date = new Date();
date = date.getHours();
let greeting = '';
const cssStyle = {};

if(date >=4 && date <12) {
  greeting = 'Good Morning';
  cssStyle.color = 'green';
} else if(date >=12 && date <16) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'red';
} else if(date >=16 && date <20) {
  greeting = 'Good Evening';
  cssStyle.color = 'orange';
} else {
  greeting = 'Good Night';
  cssStyle.color = 'blue';
}

ReactDOM.render(
  <>
    <div className="background">
      <div className="greet">
        Hello sir, <span style={cssStyle}> {greeting} </span>
      </div>
    </div>
  </>,
  document.getElementById('root')
);
