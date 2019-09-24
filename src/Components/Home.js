import React, { Fragment } from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

const Home = props => {
  const { getUserQuery, query, characters } = props;
  return (
    <Fragment>
      <Filters getUserQuery={getUserQuery} query={query} />

      <CharacterList characters={characters} query={query} />
    </Fragment>
  );
};

export default Home;
