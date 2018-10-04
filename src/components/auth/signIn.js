import React, { Component } from 'react';

class SignIn extends Component {
  state={
    email:'',
    password:''
  }

 handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>sign In</h5>
          <div className="input-field">
            <label htmlFor='email'>email</label>
            <input type='email' id='email' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor='password'>password</label>
            <input type='password' id='password' onChange={this.handleChange}/>
          </div>
          <div>
            <button className='btn'>Login</button>
          </div>
        </form>
      </div>

    )

  }

}

export default SignIn
