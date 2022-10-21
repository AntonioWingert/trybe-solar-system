import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="planetas" />
        <ul>
          {planets
            .map((planet) => (
              <PlanetCard
                key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />))}
        </ul>
      </div>
    );
  }
}
