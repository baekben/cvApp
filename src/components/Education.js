import React, { Component } from "react";

class Education extends Component{

  constructor(props){
    super(props);
    this.state ={
      school: '',
      degree: '',
      gradDate: '',
    }
  }
  render(){
        const { school, degree, gradDate } = this.state;

    return(
        <div>
            <h2><u>Education</u></h2>
        <input type='text' placeholder='School name'id='schooName' value={school}className="form-control"/>
        <input type='text' placeholder='Degree/Area of Study'id='degree' value={degree}className="form-control"/>
        <input type='text' placeholder='Graduation Date'id='gradDate' value={gradDate}className="form-control"/>
        </div>)}  
}

export default Education;