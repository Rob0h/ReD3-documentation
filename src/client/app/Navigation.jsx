import React, {Component} from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  container: { textAlign: 'center', paddingTop: 200
  }
};

const muiTheme = getMuiTheme({
  palette: { accent1Color: deepOrange500 }
});

const linkStyle = {
  color:'white',
  'textDecoration':'none'
};

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  handleDrawerToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title='ReD3'
            onLeftIconButtonTouchTap={this.handleDrawerToggle}/>
          <Drawer
            docked={false}
            open={this.state.open}>
            <Link to="/" style={linkStyle}>
              <MenuItem>Get Started</MenuItem>
            </Link>
            <Link to="/" style={linkStyle}>
              <MenuItem>Components</MenuItem>
            </Link>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Navigation;