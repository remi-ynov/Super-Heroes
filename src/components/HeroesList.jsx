import React, {useEffect, useState} from 'react';
import HeroItem from "./HeroItem";
import {fetchHeroes} from "../api/heroes";

// TODO: Gérer les erreurs.
const HeroesList = () => {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);

    const getHeroes = async () => {
      const data = await fetchHeroes();
      setHeroes(data ?? []);
      setLoading(false);
    }

    useEffect(() => {
      getHeroes();
    }, [])


    if (loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    }

    return (
      <div className="heroes-list">
        {heroes.map((hero) => (
          <HeroItem key={hero.id} hero={hero} />
        ))}
      </div>
    );
};

export default HeroesList;