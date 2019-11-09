import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password : '',
      loggedIn : false,
    };

  }
  SubmitForm = (e) =>{
    e.preventDefault()
    var {username,password} = this.state
    if (username === "admin" && password ==="123") {
      this.setState({loggedIn : true})
      localStorage.setItem('username', username);
      
    }
  }
  onChange = (event) =>{
    var target =event.target;
    var name =target.name;
    var value =target.value;
    this.setState({
      [name] : value,
    });
  }


  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)
    if (this.state.loggedIn) {
      return <Redirect to="/postlist"/>;
    }
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form onSubmit={this.SubmitForm} className="login100-form validate-form">
              <span className="login100-form-title p-b-26">
                Xin chào
              </span>

              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="username" value={this.state.username} onChange={this.onChange} placeholder="Tên đăng nhập"/>
                <span className="focus-input100"></span>
              </div>

              <div className="wrap-input100 validate-input">
                <input className="input100" type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Mật khẩu"/>
                <span className="focus-input100"></span>
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn" type="submit" value="login">
                    Đăng nhập
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;