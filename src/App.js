import React from "react";
import { fetchCharacters } from "./services/FetchCharacters";
import CharacterList from "./Components/CharacterList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      query: ""
    };

    this.getUserQuery = this.getUserQuery.bind(this);
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

  getUserQuery(event) {
    const query = event.currentTarget.value;

    this.setState({
      query: query
    });
  }

  render() {
    const { characters, query } = this.state;
    return (
      <div className="app">
        <h1 className="title">Rick and Morty</h1>
        <input type="text" onChange={this.getUserQuery} />
        <CharacterList characters={characters} query={query} />
      </div>
    );
  }
}

export default App;
