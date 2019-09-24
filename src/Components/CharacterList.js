import React from "react";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterList.scss";

const CharacterList = props => {
  const { characters, query } = props;
  return (
    <ul className="character_list">
      {characters
        .filter(myCharacter =>
          myCharacter.name.toUpperCase().includes(query.toUpperCase())
        )
        .map(character => {
          return (
            <li className="character" key={character.id}>
              <Link
                to={`/character-detail/${character.id}`}
                className="character-link"
              >
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
