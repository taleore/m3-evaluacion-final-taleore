import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetails.scss";

const CharacterDetails = props => {
  const { routerProps, characters } = props;
  const id = parseInt(routerProps.match.params.id);

  const character = characters.filter(item => item.id === id);

  if (character[0]) {
    const { name, image, status, species, origin, episode } = character[0];

    return (
      <React.Fragment>
        <Link to="../">Volver</Link>
        <div className="character_detail">
          <div className="character_detail__img">
            <img src={image} alt={name} />
          </div>
          <div className="character_detail__container">
            <h2 className="character_detail__name">{name}</h2>
            <h3>status: {status}</h3>
            <h3>species: {species}</h3>
            <h3>origin: {origin.name}</h3>
            <h3>episodes: {episode.length}</h3>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>noooooooo</p>
        <Link to="../">Volver</Link>
      </React.Fragment>
    );
  }
};

export default CharacterDetails;
