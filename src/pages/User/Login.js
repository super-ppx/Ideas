import React from 'react';
import { WingBlank } from 'antd-mobile';
import LoginForm from '../../components/LoginForm';
import './Login.css';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="login-page">
                <WingBlank size="lg">
                    <LoginForm className="login-page__form" />
                </WingBlank>
            </div>
        )
    }
}

export default LoginPage;