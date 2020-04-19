import React, { Component } from "react";
class LoginForm extends Component {
  state = { account: { username: "", password: "" } };

  handleSubmit = (e) => {
    e.preventDefault();
    //some server calls

    console.log("Submitted");
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  // username = React.createRef();
  // componentDidMount() {
  //   this.username.current.focus();
  // }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group col-lg-3">
              <label htmlFor="username">UserName</label>
              <input
                ref={this.username}
                autoFocus
                value={this.state.account.username}
                onChange={this.handleChange}
                name="username"
                id="username"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-3">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="text"
                value={this.state.account.password}
                onChange={this.handleChange}
                name="password"
                className="form-control"
              />
            </div>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
