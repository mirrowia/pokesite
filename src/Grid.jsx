import "./Grid.css";
import axios from "./AxoisConfig/AxiosConfig";
import { useEffect, useState } from "react";
import MiniCard from "./MiniCard/MiniCard";

function Grid() {
  const [list, setList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(100);
  const [opened, setOpened] = useState();

  const getPokemonList = async () => {
    const response = await axios.get(`pokemon?offset=${offset}&limit=${limit}`);
    setList(response.data.results);
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  useEffect(() => {}, [list]);

  return (
    <>
      <div className="cards-container">
        <MiniCard key="gardevoir" id="gardevoir" isActive="true"/>
        <MiniCard key="alakazam" id="alakazam" isActive=""/>
      </div>
    </>
  );
}

export default Grid;
