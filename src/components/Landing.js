import React from 'react';

export class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render(){
    return (
    <div>
      <img src={"http://www.stickpng.com/assets/thumbs/58597bdf4f6ae202fedf2896.png"} className="App-logo" alt="logo" />
      <h2>Welcome to your birthday game!</h2>
      <p>So smart you are,</p>
      <p>no ordinary peasant.</p>
      <p>Can you answer five riddles</p>
      <p>to see your present???</p>
      <div>
        <button onClick={() => this.props.changePageNum(1)}>Riddle Me</button>
      </div>
    </div>
    )
  }
}