import IHero from '../../interfaces/hero';
import './hero.css';

export default function Hero(props: IHero) {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = props;

  return (
    <div className="card">
      <h3 className="name">{name}</h3>
      <div className="characters">Height: {height}</div>
      <div className="characters">Mass: {mass}</div>
      <div className="characters">Hair color: {hair_color}</div>
      <div className="characters">Scin color: {skin_color}</div>
      <div className="characters">Eye color: {eye_color}</div>
      <div className="characters">Birth year: {birth_year}</div>
      <div className="characters">Gender: {gender}</div>
    </div>
  );
}
