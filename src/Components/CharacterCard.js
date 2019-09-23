import React from "react";

const CharacterCard = props => {
  const { name, image, species } = props;
  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt={name}></img>
      </div>
      <h2>{name}</h2>
      <h3>{species}</h3>
    </div>
  );
};

export default CharacterCard;
