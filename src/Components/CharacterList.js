import React from "react";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

const CharacterList = props => {
  const { characters, query } = props;
  return (
    <ul className="characters">
      {characters
        .filter(myCharacter =>
          myCharacter.name.toUpperCase().includes(query.toUpperCase())
        )
        .map(character => {
          return (
            <li className="character" key={character.id}>
              <Link to="/character-detail" className="pokemon-link">
                <CharacterCard
                  name={character.name}
                  image={character.image}
                  species={character.species}
                />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default CharacterList;
