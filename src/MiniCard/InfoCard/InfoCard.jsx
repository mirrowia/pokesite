import "./InfoCard.css";
import axios from "../../AxoisConfig/AxiosConfig";
import { useEffect, useState } from "react";

function InfoCard(props) {
  const [pokemon, setPokemon] = useState(props.pokemon);

  useEffect(() => {}, []);

  useEffect(() => {}, [pokemon]);

  if (!pokemon) return null;

  return (
    <>
      <div className="info-card">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="info-card-img"
        />
        <p className="mini-card-id">#{pokemon.id}</p>
        <p className="mini-card-name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </p>
        <div className="grid-stats">
          <p className="info-card-stats grid-stats-left">height</p>
          <p className="info-card-stats grid-stats-right">{pokemon.height}</p>
          {pokemon.stats.map((stat) => {
            return (
              <>
                <p className="info-card-stats grid-stats-left">
                  {stat.stat.name}
                </p>
                <p className="info-card-stats grid-stats-right">
                  {stat.base_stat}
                </p>
              </>
            );
          })}
          <p className="info-card-stats grid-stats-left">types</p>
          {pokemon.types.map((type) => {
            return (
              <p className="info-card-stats grid-stats-right">
                {type.type.name}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default InfoCard;
