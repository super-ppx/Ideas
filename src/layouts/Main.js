import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';

class MainLayout extends React.Component {
  render() {
    const { match, location } = this.props;
    return (
      <>
        <NavBar
          style={{ backgroundColor: '#24292e' }}
          leftContent={
            <Icon
              type="ellipsis"
              style={{
                color: 'rgba(255,255,255, .75)',
                height: '45px',
                padding: '0 1em'
              }}
            />
          }
          rightContent={[
            <span key={0} style={{ lineHeight: '45px', padding: '0 1em' }}>
              {location.pathname.includes('/idea/create') ? (
                <Link
                  style={{ color: 'rgba(255,255,255, .75)' }}
                  to={`${match.path}/ideas`}
                >
                  Back
                </Link>
              ) : (
                <Link
                  style={{ color: 'rgba(255,255,255, .75)', fontSize: '1.5em' }}
                  to={`${match.path}/idea/create`}
                >
                  +
                </Link>
              )}
            </span>
          ]}
        >
          Ideas
        </NavBar>
        {this.props.children}
      </>
    );
  }
}

export default withRouter(MainLayout);
