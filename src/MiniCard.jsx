import "./MiniCard.css";
import axios from "./AxoisConfig/AxiosConfig";
import { useEffect, useState } from "react";

function MiniCard(props) {
  const [pokemon, setPokemon] = useState([]);
  const [sprite, setSprite] = useState();
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [endpoint, setEndpoint] = useState(`pokemon/${props.id}`);

  const getPokemon = async () => {
    const response = await axios.get(endpoint);
    setPokemon(response.data);
    setId(response.data.id);
    setSprite(response.data.sprites.front_default);
    setName(
      response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1)
    );
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {}, [pokemon]);

  return (
    <div className="mini-card">
      <img src={sprite} alt={name} className="mini-card-img" />
      <p className="mini-card-id">#{id}</p>
      <p className="mini-card-name">{name}</p>
    </div>
  );
}

export default MiniCard;
