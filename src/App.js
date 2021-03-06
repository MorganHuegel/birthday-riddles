import React, { Component } from 'react';

import './App.css';

import { Landing } from './components/Landing';
import { RiddleOne } from './components/RiddleOne';
import { RiddleTwo } from './components/RiddleTwo';
import { RiddleThree } from './components/RiddleThree';
import { RiddleFour } from './components/RiddleFour';
import { RiddleFive } from './components/RiddleFive';
import { CorrectLightBox } from './components/CorrectLightBox';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageNum: 0,
      correctScreen: false,
      correctMsg: ''
    }
  }

  changePageNum = (pageNum) => {
    this.setState({
      pageNum,
      correctScreen: false
    })
  }

  toggleCorrectScreen = (bool, correctMsg) => {
    const newPageNumber = bool ? this.state.pageNum : this.state.pageNum + 1;
    this.setState({
      pageNum: newPageNumber,
      correctScreen: bool,
      correctMsg
    })
  }


  render() {
    let mainComponent;
    switch (this.state.pageNum) {
      case(0):
        mainComponent = <Landing changePageNum={this.changePageNum}/>
        break;
      case(1):
        mainComponent = <RiddleOne toggleCorrectScreen={this.toggleCorrectScreen}/>
        break;
      case(2):
        mainComponent = <RiddleTwo toggleCorrectScreen={this.toggleCorrectScreen}/>
        break;
      case(3):
        mainComponent = <RiddleThree toggleCorrectScreen={this.toggleCorrectScreen}/>
        break;
      case(4):
        mainComponent = <RiddleFour toggleCorrectScreen={this.toggleCorrectScreen}/>
        break;
      case(5):
        mainComponent = <RiddleFive toggleCorrectScreen={this.toggleCorrectScreen}/>
        break;
      default:
        mainComponent = null;
    }

    let buttonMsg = 'Next Question';

    // WIN State
    if (this.state.pageNum === 5 && this.state.correctScreen) {
      mainComponent = null;
      buttonMsg = 'See Present'
    }

    const correctLightBox = this.state.correctScreen ? 
      <CorrectLightBox toggleCorrectScreen={this.toggleCorrectScreen} correctMsg={this.state.correctMsg} buttonMsg={buttonMsg}/> 
      : null;

    return (
      <div className="App">
        {correctLightBox}
        <header className="App-header">
          {mainComponent}
        </header>
      </div>
    );
  }
}

export default App;
