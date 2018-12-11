import React from 'react';
import { NavBar, Icon,  } from 'antd-mobile';

class MainLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openDrawer: false
        }
    }
    render() {
        return (
            <>
                <NavBar
                    style={{backgroundColor: '#24292e'}}
                    leftContent={<Icon type="ellipsis" style={{ height: '45px', padding: '0 1em' }} />}
                    rightContent={[
                        <span
                            key={0}
                            style={{ fontSize: '1.5em', lineHeight: '45px', padding: '0 1em' }}
                            onClick = {()=> {console.log(this.state.openDrawer);this.setState({openDrawer: !this.state.openDrawer})}}
                        >
                            +
                        </span>,
                    ]}
                >Ideas</NavBar>
                {React.cloneElement(this.props.children, {openDrawer: this.state.openDrawer})}
            </>
        )
    }
}

export default MainLayout;