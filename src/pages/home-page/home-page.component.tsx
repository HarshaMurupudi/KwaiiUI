import React from 'react'

import NavBar from '../../components/app-bar/app-bar'
import SideDrawer from '../../components/side-drawer/side-drawer.component';

const HomePage: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerClick = () => {
    // setOpen(true);
    console.log("hit");
  };

  return (
    <div>
      <NavBar />
      <SideDrawer handleDrawerClick={handleDrawerClick} />

    </div>
  )
}

export default HomePage;