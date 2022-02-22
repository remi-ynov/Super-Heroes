import React, {useEffect, useState} from 'react';
import HeroItem from "./HeroItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchHeroes} from "../states/heroesSlice";

const HeroesList = () => {
  const { search, heroes, loading, error } = useSelector((store) => store.heroes);
  const dispatch = useDispatch();
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, [])

  useEffect(() => {
    if (search.trim().length > 0) {
      setFilteredHeroes(
        heroes.filter((hero) => hero.name.toLowerCase().includes(search.toLowerCase()))
      )
    } else {
      setFilteredHeroes(heroes);
    }
  }, [search, heroes])

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div className="heroes-list">
      {filteredHeroes.map((hero) => (
        <HeroItem key={hero.id} hero={hero}/>
      ))}
    </div>
  );
};

export default HeroesList;