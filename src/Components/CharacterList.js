import React from "react";
import CharacterCard from "./CharacterCard";

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
              <CharacterCard
                name={character.name}
                image={character.image}
                species={character.species}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default CharacterList;
