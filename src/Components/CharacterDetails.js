import React from "react";
import { Link } from "react-router-dom";

const CharacterDetails = props => {
  const { routerProps, characters } = props;
  const id = parseInt(routerProps.match.params.id);

  const character = characters.filter(item => item.id === id);
  const { name, image, status, species, origin, episode } = character[0];

  return (
    <React.Fragment>
      <div className="character_detail">
        <div className="character_detail__img">
          <img src={image} alt={name} />
        </div>
        <h2 className="character_detail__name">{name}</h2>
        <h3>{status}</h3>
        <h3>{species}</h3>
        <h3>{origin.name}</h3>
        <h3>{episode.length}</h3>
      </div>

      <Link to="../">Volver al listado</Link>
    </React.Fragment>
  );
};

export default CharacterDetails;
