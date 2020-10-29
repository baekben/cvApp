import React, { Component } from "react";

class Experience extends Component{

  constructor(props){
    super(props);
    this.state ={
      company: '',
      position: '',
      task: '',
      tasks:[],
      startDate: '',
      endDate: '',
    }
  }
  render(){
        const { company,position,task,startDate,endDate } = this.state;

    return(
    <div>
      <h2><u>Experience</u></h2>
    <input type="text" id="company" placeholder='Company Name' value={company} className="form-control" />
    <input type='text' id='position' placeholder='Position'value={position}className='form-control'/>
    <div className='form-tasks'>
        <input type="text" id="task" placeholder='Task' value={task} className='form-control'/>
        <button type='submit'className="btn btn-primary">Add Task</button>
    </div>
    <label><h5>Time Worked: </h5></label>
    <input type='text' id='startDate' placeholder='Starting Date' value={startDate} className='form-control'/>
    <input type='text' id='endDate' placeholder='Date Ended' value={endDate} className='form-control'/>
    </div>)}  
}

export default Experience;