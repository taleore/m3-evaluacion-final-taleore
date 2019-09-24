import React from "react";
import "../stylesheets/CharacterCard.scss";

const CharacterCard = props => {
  const { name, image, species } = props;
  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt={name}></img>
      </div>
      <div className="card__text">
        <h2>{name}</h2>
        <h3>{species}</h3>
      </div>
    </div>
  );
};

export default CharacterCard;
