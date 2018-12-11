import React from 'react';
import { WingBlank } from 'antd-mobile';
import LoginForm from '../../components/IdeaCreateForm';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="idea-create-page">
        <WingBlank size="lg">
          <LoginForm className="idea-create-page__form" />
        </WingBlank>
      </div>
    );
  }
}

export default LoginPage;
