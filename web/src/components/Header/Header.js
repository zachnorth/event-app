import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

import 'typeface-pacifico';

import { signOut, getUser } from '../../utils/userState';

const linkStyle = {
  textDecoration: 'none',
  color: 'rgb(33, 150, 243)',
};

const appBarStyle = {
  position: 'fixed',
  top: '0px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.user = getUser();
  }

  signOut = async () => {
    try {
      await signOut();
      this.props.history.push('/landing');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.user);

    return (
      <div style={{marginBottom: '90px'}}>
        <AppBar
          title={<Link to='/dash' style={linkStyle}>Event Aggregators</Link>}
          titleStyle={{fontFamily: 'Pacifico', textAlign: 'center'}}
          style={appBarStyle}
          iconElementRight={
            <IconMenu
              iconButtonElement={<IconButton style={{padding: 0}}><Avatar src={this.user.imageUrl} /></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText={this.user.name}/>
              <MenuItem primaryText='Help'/>
              <MenuItem primaryText='Support'/>
              <MenuItem primaryText='Settings'/>
              <MenuItem primaryText='Sign out' onClick={this.signOut}/>
            </IconMenu>
          }
        />
      </div>
    );
  }
}

export default Header;