import React from 'react';
import './App.css';
import Student from './components/Student';
class App extends React.Component{
  constructor(){
    super();
    this.state={}
  }
  render(){
    return(
      <div className="App">
      <h1 className="leadersBoardHeading">Leaders Board</h1>
      <Student name="Maha" university="sir syed university" score={345}/>
      <Student name="Susan" university="NED" score={320}/>
      <Student name="Anna" university="NUST" score={349}/>
      </div>
    )
  }
}
export default App;
