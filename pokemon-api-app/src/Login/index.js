import React, { Component } from 'react';


class Login extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: ''
		}
	}
	handleInput = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});		
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleLogin(this.state.username, true);		
	}
    render(){
        return(
            <h1>login</h1>
            	<Form onSubmit={this.handleSubmit}>
            	
        )
    }
}
export default Login;
