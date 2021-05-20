//Dependencies
import React, {Component} from 'react';
import {connect} from "react-redux";
//State Management
import {setSearching, requestPokemon} from "../actions.js";
//Components
import MainPage from "../components/MainPage.js";
// //Styles
// import './App.css';


//Select specific state from the store that the connected component needs. Called every time store state changes.
const mapStateToProps = (state) => {
  return {
    //Reducer function states
    searching: state.searchPokemon.searching,
    pokemon_list: state.requestPokemon.pokemon_list,
    isPending: state.requestPokemon.isPending,
  }
}

//Higher Order Function return another function - Dispatches actions to the store
const mapDispatchToProps = () => (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearching(event.target.value)),
    onRequestPokemon: () => dispatch(requestPokemon())
  }
}

class App extends Component {

  render() {
    return <MainPage {...this.props}/>
  }
};

//Connect App to React-Redux store using {connect}
export default connect(mapStateToProps, mapDispatchToProps)(App);
