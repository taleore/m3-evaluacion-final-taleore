import React from "react";
import "../stylesheets/Filters.scss";

const Filters = props => {
  const { getUserQuery, query } = props;
  return (
    <div className="app__filter">
      <input type="text" onChange={getUserQuery} value={query} />
    </div>
  );
};

export default Filters;
