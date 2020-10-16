import React from 'react';
import logo from './logo.svg';
import Sidebar from './containers/SidebarContainer';
import Catalog from './containers/CatalogContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Catalog></Catalog>
        <Sidebar></Sidebar>
      </header>
    </div>
  );
}

export default App;
