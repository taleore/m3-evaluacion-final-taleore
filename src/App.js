import React from "react";
import { fetchCharacters } from "./services/FetchCharacters";
import Home from "./Components/Home";
import CharacterDetails from "./Components/CharacterDetails";
import { Switch, Route } from "react-router-dom";
import logo from "./images/logo.png";
import "./stylesheets/App.scss";

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
        <header className="header">
          <img className="logo" src={logo} alt="" />
        </header>
        <main className="app_main">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Home
                    getUserQuery={this.getUserQuery}
                    query={query}
                    characters={characters}
                  />
                );
              }}
            />

            <Route
              path="/character-detail/:id"
              render={routerProps => {
                return (
                  <CharacterDetails
                    routerProps={routerProps}
                    characters={characters}
                  />
                );
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
