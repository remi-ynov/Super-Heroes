import React, {useState} from 'react';

const SearchBar = ({ placeholder }) => {
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="input-group my-5">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div>Vous recherchez : {search}</div>
    </>
  );
};

export default SearchBar;