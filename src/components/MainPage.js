//Dependencies
import React, {Component} from 'react';
//Components
import Header from "../components/Header.js";
import Scroll from "../components/Scroll.js";
import Profiles from "../components/Profiles.js";
import Search from "../components/Search.js";
import ErrorBoundary from "../components/ErrorBoundary.js";
//Styles
import './MainPage.css';

class MainPage extends Component {

  componentDidMount() {
    // //Get data from a server and initialize state with it
    this.props.onRequestPokemon();
  };

  filteredPokemon = () => {
    //Filter through each cat profile that matches our current searching state and return those cat profiles
    return this.props.pokemon_list.filter(pokemon => {

      return pokemon.name.toLowerCase().includes(this.props.searching.toLowerCase());
    });
  };

  render() {
    //Destructure state variables
    const {onSearchChange, isPending} = this.props;
    
      // else if(pokemon.id.toLowerCase().includes(searching.toLowerCase())) {
      //   return true;
      // }

    return (
      <div className="App">
            <div className = "Search-container">
              <Header />
              <Search 
                searchingOnChange = {onSearchChange}
              />
            </div>
            {/* <Scroll> */}
              { isPending ? <h1>Loading..</h1> :
                // <div className = 'Profiles-container'>
                  /* <ErrorBoundary> */
                    <Profiles pokemon = {this.filteredPokemon()}/>
                  /* </ErrorBoundary> */
                // </div>
              }
            {/* </Scroll> */}
      </div>
        );
  }
};
//Connect App to React-Redux store using {connect}
export default MainPage;
