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
        <div className="info-card-stat-container">
          <div className="left-info">
            <p>id</p>
          </div>
          <div className="right-info">
            <p>{pokemon.id}</p>
          </div>
        </div>
        <div className="info-card-stat-container">
          <div className="left-info">
            <p>height</p>
          </div>
          <div className="right-info">
            <p>{pokemon.height}</p>
          </div>
        </div>
        <div className="info-card-stat-container">
          <div className="left-info">
            <p>weight</p>
          </div>
          <div className="right-info">
            <p>{pokemon.weight}</p>
          </div>
        </div>
        {pokemon.stats.map((stat) => {
          return (
            <div className="info-card-stat-container">
              <div className="left-info">
                <p>{stat.stat.name}</p>
              </div>
              <div className="right-info">
                <p>{stat.base_stat}</p>
              </div>
            </div>
          );
        })}
        <div className="info-card-stat-container">
          <div className="left-info">
            <p>abilities</p>
          </div>
          <div className="right-info">
            {pokemon.abilities.map((ability) => {
              return <p>{ability.ability.name}</p>;
            })}
          </div>
        </div>
        <div className="info-card-stat-container">
          <div className="left-info">
            <p>types</p>
          </div>
          <div className="right-info">
            {pokemon.types.map((type) => {
              return <p>{type.type.name}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
