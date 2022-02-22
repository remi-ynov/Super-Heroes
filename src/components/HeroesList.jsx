import React, {useEffect, useState} from 'react';
import HeroItem from "./HeroItem";
import {fetchHeroes} from "../api/heroes";
import {useSelector} from "react-redux";

const HeroesList = () => {
  const { search } = useSelector((store) => store.heroes);
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