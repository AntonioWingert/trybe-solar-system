import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const alternativeText = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card" className="planets">
        <img src={ planetImage } alt={ alternativeText } className={ planetName } />
        <p data-testid="planet-name" className="planetName">
          { planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
