import React, { Component } from 'react'
import { thisExpression } from '@babel/types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../actions/index';
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isAuthenticate : false
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onLogin = () => {
        this.props.onLogin({
            username : this.state.username,
            password : this.state.password
        })
    }

    render() {
        let { isAuthenticate } = this.props.data
        
        if (isAuthenticate) {
            console.log("chay vao day");
            return <Redirect to='/' />
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-6 ">
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">User name</label>
                                    <input type="text"
                                        onChange={this.onChange}
                                        name="username"
                                        value={this.state.name}
                                        class="form-control" placeholder="Enter user name" />

                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                        name="password"
                                        class="form-control" placeholder="Password" />
                                </div>
                                <button type="button" class="btn btn-primary" onClick={this.onLogin}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: (data) => {
            dispatch(action.login(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
