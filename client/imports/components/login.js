import React from "react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Login extends React.Component {
  constructor(props) {
    super(props);

    // Create initial state.
    this.state = {
      shareId: "",      // Holds the value of the shareId text field.
      password: "",     // Holds the value of the password text field.
      loginType: ""     // Holds the selected login type choice.
    };

    // Bind event handlers to "this"
    this._onShareIdChange = this._onShareIdChange.bind(this);
    this._onPasswordChange = this._onPasswordChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._onLoginType = this._onLoginType.bind(this);
  }
  _onLoginType(evt, value) {
    // Store the selection.
    this.setState({loginType: value});

    // If using the auth server to login, redirect there now.
    if (value === "authServer") {
      FlowRouter.go("authServerRedirect");
    }
  }
  _onKeyDown(evt) {
    // Check for ENTER key press when typing in login fields, and submit the form.
    if (evt.keyCode === 13) {
      evt.preventDefault();
      this._onSubmit();
    }
  }
  _onSubmit(evt) {
    // Fire the onEnter property.
    this.props.onEnter(this.state.shareId, this.state.password);
  }
  _onShareIdChange(e,value) {
    // Store the entered shareId text in state.
    this.setState({shareId:value});
  }
  _onPasswordChange(e,value) {
    // Store the entered password text in state.
    this.setState({password:value});
  }
  render() {
    var styles = {
      card: {
        margin: 20,
        padding: 20
      }
    };
    var loginContent;

    // If shareId login type is chosen, render a login form.
    if (this.state.loginType === "shareToken") {
      loginContent = (
        <form>
          <br />
          <br />
          <TextField type="text" floatingLabelText="share key id" onChange={this._onShareIdChange} value={this.state.shareId} onKeyDown={this._onKeyDown} />
          <br />
          <TextField type="password" floatingLabelText="password" onChange={this._onPasswordChange} value={this.state.password} onKeyDown={this._onKeyDown} />
          <br />
          <br />
          <RaisedButton onTouchTap={this._onSubmit} label="login" />
        </form>
      );
    }

    return (
      <Card style={styles.card}>
        <CardTitle title="select login method" />
        <CardText>
          <RadioButtonGroup name="loginType" onChange={this._onLoginType}>
            <RadioButton value="authServer" label="authentication server" />
            <RadioButton value="shareToken" label="share key" />
          </RadioButtonGroup>
          {loginContent}
        </CardText>
      </Card>
    );
  }
}

Login.propTypes = {
  onEnter: React.PropTypes.func.isRequired
}

export default Login;
