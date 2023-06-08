import "./MiniCard.css";
import axios from "../AxoisConfig/AxiosConfig";
import { useEffect, useState } from "react";
import InfoCard from "./InfoCard/InfoCard";

function MiniCard(props) {
  const [pokemon, setPokemon] = useState();
  const [endpoint, setEndpoint] = useState(`pokemon/${props.id}`);

  const getPokemon = async () => {
    const response = await axios.get(endpoint);
    setPokemon(response.data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {}, [pokemon]);

  if (!pokemon) return null;

  return (
    <>
      <div className="mini-card">
        <div className="info-card-container">
          <InfoCard pokemon={pokemon} />
        </div>

        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mini-card-img"
        />
        <p className="mini-card-id">#{pokemon.id}</p>
        <p className="mini-card-name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </p>
      </div>
    </>
  );
}

export default MiniCard;
