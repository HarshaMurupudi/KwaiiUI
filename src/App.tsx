import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/app-bar/app-bar'
import Layout from './components/layouts/layout.component';
import SideDrawer from './components/side-drawer/side-drawer.component';

import SmileyPage from './pages/toggle/toggle-page.component';
import HomePage from './pages/home/home-page.component';
import ButtonPage from './pages/button/button-page.component';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerClick = (drawerStatus: boolean) => {
    setOpen(drawerStatus);
  };

  return (
    <div className="App">
      {/* Header */}
      {/* <SmileyPage /> */}
      <Router>
        <SideDrawer handleDrawerClick={handleDrawerClick} isDrawerOpen={open} />
        <NavBar handleDrawerClick={handleDrawerClick} isDrawerOpen={open} />

        <Layout isDrawerOpen={open}>
          <Switch>
            {/* main layout */}
            <Route exact path="/" render={props => <HomePage />} />
            <Route exact path="/toggle" render={props => <SmileyPage />} />
            <Route exact path="/button" render={props => <ButtonPage />} />
          </Switch>
        </Layout>
      </Router>
      {/* Footer */}
    </div>
  );
}

export default App;
