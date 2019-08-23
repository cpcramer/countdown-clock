import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countdown: '00:00',
      secondTimer: 0,
    };
    this.updateCounter = this.updateCounter.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  updateCounter (e) {
    this.setState({countdown: e.target.value})
  }

  countDown () {
    // if(!this.state.countdown.test(/^\d{1,}:\d{2}$/)){
    //   alert('Not valid input');
    //   return;
    // }
    
    let time = this.state.countdown;
    let splitArr = time.split(':');
    console.log(splitArr)
    let seconds = 0;
    seconds += Number(splitArr[0]) * 60;
    seconds += Number(splitArr[1]);
    
    const timer  = () => {
      setTimeout(() => {
        seconds--;
        let min = Math.floor(seconds / 60);
        let sec = seconds - (min * 60);
        let stringNum = `${min}:${sec}`;
        this.setState({countdown: stringNum})
        if(seconds > 0){
          timer();
        }
      }, 1000);
    }

    timer();
  }

  render() {
    return (
      <div>
        <h1>CountDown Clock</h1>
        <form>
          <input type="text" placeholder="00:00" onChange={this.updateCounter}></input>
        </form>
        <h1>{this.state.countdown}</h1>
        <input type="submit" value="Start!" onClick={this.countDown}></input>
      </div>
    )
  }
}
export default App;