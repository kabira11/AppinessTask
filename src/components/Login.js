import React, { Component } from 'react';
import { connect } from 'react-redux'
import { USER_LIST } from '../redux/userActionType'

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }

    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleSubmitForm = (event) => {
        event.preventDefault();

        const {user} = this.props.user
        if(this.state.email === user.username && this.state.password === user.password){
                this.props.setLoggedIn()
                this.props.history.push("/employeeList");

        }else {
            alert(" User credential wrong")
        }

     }

    render() {
        return (
        <form className="text-center border border-light p-5" onSubmit={this.handleSubmitForm}>
            <div className = "col-md-4 offset-md-4">
                <p className="h4 mb-4">Log In</p>
                <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" onChange={this.handleChange} placeholder="E-mail" name="email" required=''/>
                <input type="password" id="defaultRegisterFormPassword" className="form-control" onChange={this.handleChange} placeholder="Password" name="password" aria-describedby="defaultRegisterFormPasswordHelpBlock" required=''/>
                <button className="btn btn-info my-4 btn-block btn-sm" type="submit" onClick={this.handleSubmitForm}>Sign In</button>
            </div>
        </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const  mapDispatchToProps = dispatch => {
    return {
    setLoggedIn : () =>  dispatch({
        type: USER_LIST, 
        payload: true
    })
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Login);
