import React, { Component } from "react";

class GeneralInfo extends Component{

  constructor(props){
    super(props);
    this.state ={
      fullName: '',
      email: '',
      phone: '',
    }
  }
  render(){
        const { fullName,email,phone } = this.state;

    return(
    <div>
      <h2><u>General Info</u></h2>
    <input type="text" id="fullName" placeholder='Full Name' value={fullName} className="form-control" />
    <input type='email' id='email' placeholder='Email'value={email}className='form-control'/>
    <input type="tel" id="phone" placeholder='Phone Number: (xxx)-xxx-xxxx' value={phone} className='form-control'
  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
    </div>)}  
}

export default GeneralInfo;