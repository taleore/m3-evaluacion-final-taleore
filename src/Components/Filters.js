import React from "react";
import "../stylesheets/Filters.scss";

const Filters = props => {
  const { getUserQuery, query } = props;
  return (
    <div>
      <input
        type="text"
        className="app__filter"
        onChange={getUserQuery}
        value={query}
      />
    </div>
  );
};

export default Filters;
