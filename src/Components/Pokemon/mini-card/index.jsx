import "./index.css";
import axios from "../../../AxoisConfig/AxiosConfig";
import { useEffect, useState } from "react";
import InfoCard from "./info-card";

function MiniCard(props) {
  const [pokemon, setPokemon] = useState();
  const [endpoint, setEndpoint] = useState(`pokemon/${props.id}`);
  const [isSelected, setIsSelected] = useState(false);
  const [classStyle, setClassStyle] = useState("notSelected");

  const getPokemon = async () => {
    const response = await axios.get(endpoint);
    setPokemon(response.data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    if (isSelected) {
      setClassStyle("Selected");
    } else {
      setClassStyle("notSelected");
    }
  }, [isSelected]);

  if (!pokemon) return null;

  return (
    <div key={pokemon.id} className="mini-card">
      <div className={"info-card-container " + classStyle}>
        <InfoCard pokemon={pokemon} />
      </div>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mini-card-img"
        onClick={() => {
          setIsSelected(!isSelected);
        }}
      />
      <p className="mini-card-id">#{pokemon.id}</p>
      <p className="mini-card-name">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </p>
    </div>
  );
}

export default MiniCard;
