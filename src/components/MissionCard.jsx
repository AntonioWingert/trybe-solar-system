import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missionCard">
        <p data-testid="mission-name" className="missionName">{ name }</p>
        <p data-testid="mission-year" className="missionOthers">{ year }</p>
        <p data-testid="mission-country" className="missionOthers">{ country }</p>
        <p data-testid="mission-destination" className="missionOthers">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
