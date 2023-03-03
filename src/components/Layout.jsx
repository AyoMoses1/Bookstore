import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';

function Layout() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
