import React from 'react';
import Hero from '../HeroCard/Hero';
import IHero from '../../interfaces/hero';
import './people.css';

interface PeopleProps {
  people: IHero[];
  searchItem: string;
}

export default function People(props: PeopleProps) {
  const { people, searchItem } = props;
  const filteredPeople = people.filter((item) =>
    item.name.includes(searchItem)
  );
  return (
    <div className="cards-container">
      {filteredPeople.map((item) => (
        <Hero key={item.url} {...item} />
      ))}
    </div>
  );
}
