import React, {useContext, useEffect, useState} from 'react';
import HeroItem from "./HeroItem";
import {fetchHeroes} from "../api/heroes";
import {HeroesContext} from "../states/HeroesProvider";

// TODO: Gérer les erreurs.
const HeroesList = () => {
  const [state] = useContext(HeroesContext);
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getHeroes = async () => {
    const data = await fetchHeroes();
    setHeroes(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    getHeroes();
  }, [])

  useEffect(() => {
    if (state.search.trim().length > 0) {
      setFilteredHeroes(
        heroes.filter((hero) => hero.name.toLowerCase().includes(state.search.toLowerCase()))
      )
    } else {
      setFilteredHeroes(heroes);
    }
  }, [state.search, heroes])

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