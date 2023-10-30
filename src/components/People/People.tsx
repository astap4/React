import React from 'react';
import Hero from '../HeroCard/Hero';
import IHero from '../../interfaces/hero';
import './people.css';

interface PeopleProps {
  people: IHero[];
  searchItem: string;
}

export default class People extends React.Component<PeopleProps> {
  constructor(props: PeopleProps) {
    super(props);
  }

  render() {
    const { people, searchItem } = this.props;
    const filteredPeople = people.filter((item) =>
      item.name.includes(searchItem)
    );
    return (
      <div className="cards-container">
        {filteredPeople.map((item) => (
          <Hero
            key={item.url}
            name={item.name}
            height={item.height}
            mass={item.mass}
            hair_color={item.hair_color}
            skin_color={item.skin_color}
            eye_color={item.eye_color}
            birth_year={item.birth_year}
            gender={item.gender}
          />
        ))}
      </div>
    );
  }
}
