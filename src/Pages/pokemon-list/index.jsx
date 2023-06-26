import "./index.css";
import axios from "../../AxoisConfig/AxiosConfig";
import { useEffect, useState } from "react";
import MiniCard from "../../Components/Pokemon/mini-card";
import { getPokemons } from "../../Services/api/pokemon";
import InfoCard from "../../Components/Pokemon/mini-card/info-card";

function Grid() {
  const [list, setList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(9);
  const [opened, setOpened] = useState();

  useEffect(() => {
    getPokemons(offset, limit).then((data) => {
      setList(data);
    });
  }, []);

  useEffect(() => {}, [list]);

  return (
    <>
      <div className="cards-container">
        {list.map((pokemon) => {
          return (
            <MiniCard key={pokemon.name} id={pokemon.name} isActive="true" />
          );
        })}
      </div>
    </>
  );
}

export default Grid;
