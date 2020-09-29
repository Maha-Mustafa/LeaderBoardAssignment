import React from "react";
import './student.css';
class Student extends React.Component{
  constructor(props){
    super(props);
    this.state={
      score : 0,
      success: false,
      failure: false
    }
  }
  componentDidMount() {
      this.setState({score: this.props.score})
  }
  addScore(){
    this.setState({
      score: this.state.score +1
    },()=>{
      if(this.state.score >=350){
        this.setState({success:true})
      }
    })
  }
  subScore(){
    this.setState({
      score:this.state.score -1
    },()=>{
      if(this.state.score <=340){
        this.setState({failure:true})
      }
    })
  }
  render(){
    const isSuccess = this.state.success;
    let text;
    if(isSuccess){
      text = <span>success</span>
    }
    else{
      text = ""
    }
    
    const isFail = this.state.failure;
    let textFail;
    if(isFail){
      textFail = <span id="fail">Fail</span>
    }
    else{
      textFail = ""
    }
    return(
      <div className="student">
       <div className="left">
        <h2 className="studentName">{this.props.name}
        <button onClick={() => this.addScore()} className="addBtn">+</button>
        <button onClick={() => this.subScore()} className="subBtn">-</button>
        </h2>
        <p className="universityName">{this.props.university}
        {text}{textFail}
        </p>
       </div>
       <div className="right">
        <div className="score">{this.state.score}</div>
       </div>
      </div>
    )
  }
}
export default Student;