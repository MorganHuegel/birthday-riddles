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
      correctScreen: false
    }
  }

  changePageNum = (pageNum) => {
    this.setState({
      pageNum,
      correctScreen: false
    })
  }

  toggleCorrectScreen = (bool) => {
    const newPageNumber = bool ? this.state.pageNum : this.state.pageNum + 1;
    this.setState({
      pageNum: newPageNumber,
      correctScreen: bool
    })
  }


  render() {
    let mainComponent;
    switch (this.state.pageNum) {
      case(0):
        mainComponent = <Landing />
        break;
      case(1):
        mainComponent = <RiddleOne />
        break;
      case(2):
        mainComponent = <RiddleTwo />
        break;
      case(3):
        mainComponent = <RiddleThree />
        break;
      case(4):
        mainComponent = <RiddleFour />
        break;
      case(5):
        mainComponent = <RiddleFive />
        break;
      default:
        mainComponent = null;
    }

    const correctLightBox = this.state.correctScreen ? <CorrectLightBox toggleCorrectScreen={this.toggleCorrectScreen}/> : null

    return (
      <div className="App">
        {correctLightBox}
        <header className="App-header">
          <img src={"http://www.stickpng.com/assets/thumbs/58597bdf4f6ae202fedf2896.png"} className="App-logo" alt="logo" />
        </header>
        {mainComponent}
      </div>
    );
  }
}

export default App;