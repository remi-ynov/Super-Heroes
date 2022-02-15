import React from 'react';

const HeroItem = ({ hero }) => {
  return (
    <div className="card hero-item" style={{width: '18rem'}}>
      <img src={hero.images.md} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
        </div>
    </div>
  );
};

export default HeroItem;