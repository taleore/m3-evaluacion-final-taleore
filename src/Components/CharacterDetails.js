import React from "react";
import { Link } from "react-router-dom";

const CharacterDetails = props => {
  return (
    <React.Fragment>
      <div>Soy el detalle</div>
      <Link to="./">Volver al listado</Link>
    </React.Fragment>
  );
};

export default CharacterDetails;
