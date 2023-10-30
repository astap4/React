import React from 'react';
import IHero from '../../interfaces/hero';
import './hero.css';

export default class Hero extends React.Component<IHero> {
  render() {
    return (
      <div className="card">
        <h3 className="name">{this.props.name}</h3>
        <div className="characters">Height: {this.props.height}</div>
        <div className="characters">Mass: {this.props.mass}</div>
        <div className="characters">Hair color: {this.props.hair_color}</div>
        <div className="characters">Scin color:{this.props.skin_color}</div>
        <div className="characters">Eye color:{this.props.eye_color}</div>
        <div className="characters">Birth year:{this.props.birth_year}</div>
        <div className="characters">Gender:{this.props.gender}</div>
      </div>
    );
  }
}
