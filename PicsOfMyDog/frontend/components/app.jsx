import React from 'react';
import NavbarContainer from './navbar/navbar_container';

const App = ({ children }) => (
  <div>
    <h1>500 pics of my dog</h1>
    <NavbarContainer />
    { children }
  </div>
);

export default App;
