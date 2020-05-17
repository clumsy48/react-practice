import React, { Component } from 'react';
import Axios from 'axios';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {login : [
            {user: null},
            {pass: null}
        ]};
    
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.sendToBackend = this.sendToBackend.bind(this);
      }
    sendToBackend(event){
        event.preventDefault();
        let valid =  this.validate()
        if(!valid) return 
        console.log(this.state.user+" "+this.state.pass);
        const user = {
            userid: this.state.user,
            pass: this.state.pass
          };
        Axios.post('https://localhost:8080',{user})
        .then(res=>{
            console.log(res);
        });
    }
    handleUserChange(event){
        this.setState({user:event.target.value})
    }
    validate(){
         if(this.state.user==='' || this.state.user===null || this.state.pass==='' || this.state.pass===null){
             console.log('user/pass cannnot be empty')
             return false
         }
         return true
    }
    handlePasswordChange(event){
        this.setState({pass:event.target.value})
    }
    render(){ 
        return (
        <div>
            <form onSubmit={this.sendToBackend}>
            <label>Username/Email : </label> 
            <textarea type='text' value={this.state.user} onChange={this.handleUserChange}/>
            <br></br>
            <label>Password : </label> 
            <textarea type='password' value={this.state.pass} onChange={this.handlePasswordChange}/>
            <br></br>
            <button type="submit">Login</button>
            </form>
        </div>
    );
   };
}


export default Login;