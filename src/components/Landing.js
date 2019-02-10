import React from 'react';
import happyBirthdayLogo from '../birthdayLogo.png';

export class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render(){
    return (
    <div className='landing'>
      <img src={happyBirthdayLogo} className="App-logo" alt="logo" />
      <h2>Welcome to your birthday game!</h2>
      <p>So smart you are,</p>
      <p>no ordinary peasant.</p>
      <p>Can you answer five riddles</p>
      <p>to see your present???</p>
      <div>
        <button onClick={() => this.props.changePageNum(1)}>Sure!</button>
      </div>
    </div>
    )
  }
}