import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  toggleSideDrawer = () => {
    this.setState(prevState => ({
      sideDrawerOpen: !prevState.sideDrawerOpen
    }));
  };

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Toolbar onToggleSideDrawer={this.toggleSideDrawer} />
        <SideDrawer open={this.state.sideDrawerOpen} />
        <Backdrop
          display={this.state.sideDrawerOpen}
          click={this.toggleSideDrawer}
        />
        <main style={{ marginTop: '64px' }}>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
