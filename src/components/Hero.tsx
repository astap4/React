import React from 'react';
import IHero from '../interfaces/hero';

export default class Hero extends React.Component<IHero> {
  constructor(props: IHero) {
    super(props);
  }

  render() {
    return (
      <div className="hero">
        <h3 className="name">{this.props.name}</h3>
        <div className="characters">{this.props.birth_year}</div>
        <div className="characters">{this.props.created}</div>
        <div className="characters">{this.props.hair_color}</div>
      </div>
    );
  }
}
