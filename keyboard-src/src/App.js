





import React, { Component } from 'react';
import './App.css';
import Keyboard from './scenes/keyboard';
// import CSSProject from './css_project';


class App extends Component {

  sqrt = () => {

    //find slope of high
    //find where slope line intersects with x
    //find where function reaches that x
    //does fn(x)>x? if yes, fn(x) is the new high, otherwise new low
    //find slope of new high (x2)
    //find where slope line intersects with x2

    ////////////////////

    let high = 10
    let low = 0
    let something = high - low > 0.001;
    let n = prompt("choose a number from 1 to 10")

    while (something) {
      let avg = (high + low) / 2
      let sqrtN = Math.sqrt(n)

      if (sqrtN > avg) low = avg
      else high = avg;

      console.log(avg)
      if (sqrtN == avg) something = false
    }
  }

  render() {
    return (
      <div /*onClick={() => this.sqrt()}*/ className="container">
        <Keyboard />
        {/* <CSSProject /> */}
      </div>
    );
  }
}

export default App;