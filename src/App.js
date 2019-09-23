import React from "react";
import { fetchCharacters } from "./services/FetchCharacters";
import CharacterList from "./Components/CharacterList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchCharacters().then(data => {
      this.setState({
        characters: data.results
      });
    });
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="app">
        <h1 className="title">Rick and Morty</h1>
        <CharacterList characters={characters} />
      </div>
    );
  }
}

export default App;
