import React from 'react';
import Hero from './Hero';
import IHero from '../interfaces/hero';

interface PeopleProps {
  people: IHero[];
}

export default class People extends React.Component<PeopleProps> {
  constructor(props: PeopleProps) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.people.map((item) => (
          <Hero
            key={item.url}
            name={item.name}
            height={0}
            mass={0}
            hair_color={''}
            skin_color={''}
            eye_color={''}
            birth_year={''}
            gender={''}
            homeworld={''}
            films={[]}
            species={[]}
            vehicles={[]}
            starships={[]}
            created={''}
            edited={''}
            url={''}
          />
        ))}
      </div>
    );
  }
}
