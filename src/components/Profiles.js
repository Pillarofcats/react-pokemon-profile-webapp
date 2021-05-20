import React from 'react';
import Profile from './Profile.js';
//styles
import "./Profiles.css"
//Images
import pokemonImages from "../pokemon-images/pokemon-images.js";

const Profiles = ({pokemon}) => {

  return (
    <div className = 'Profiles-container'>
      {
        pokemon.map((aPokemon, index) => {
          return (
            <Profile
              key = {index}
              id = {index}
              image = {pokemonImages[aPokemon.name]}
              name = {aPokemon.name}
            />
          )
        })
      }
    </div>
  )
};

export default Profiles;