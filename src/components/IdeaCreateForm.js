import React from 'react';
import { withRouter } from 'react-router-dom';
import { InputItem, Button, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import './LoginForm.css';
import userIcon from '../asserts/icons/user.png';
import lockIcon from '../asserts/icons/lock.png';

class LoginForm extends React.Component {
    state = {
        loading: false
    }
    signIn = () => {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loding: false
            });
            this.props.history.push('/');
        }, 1500)
    }
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} login-form`}>
                <InputItem
                    placeholder="Username or email"
                    clear
                    maxLength={20}
                    name="username"
                    labelNumber=""
                    className="login-from__input"
                >
                    <img src={userIcon} className="login-from__icon" alt="" />
                </InputItem>
                <WhiteSpace size="xl" />
                <InputItem
                    type="password"
                    placeholder="Password"
                    clear
                    maxLength={20}
                    name="password"
                    labelNumber=""
                    className="login-from__input"
                >
                    <img src={lockIcon} className="login-from__icon" alt="" />
                </InputItem>
                <WhiteSpace size="xl" />
                <Button
                    type="primary"
                    loading={this.state.loading}
                    onClick={this.signIn}
                >
                    Sign in
                </Button>
            </div>
        )
    }
}

export default withRouter(createForm()(LoginForm));