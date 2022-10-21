import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
        <p>Sistema Solar</p>
      </main>
    );
  }
}

export default App;
