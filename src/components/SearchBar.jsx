import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../states/heroesSlice";

const SearchBar = ({ placeholder }) => {
  const heroes = useSelector((store) => store.heroes);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearch(event.target.value))
  }

  return (
    <>
      <div className="input-group my-5">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={heroes.search}
          onChange={handleChange}
        />
      </div>

      <div>Vous recherchez : {heroes.search}</div>
    </>
  );
};

export default SearchBar;