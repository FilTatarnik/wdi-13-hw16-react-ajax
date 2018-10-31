import React, { Component } from 'react';
import PokeList from '../PokeList';

// https://pokeapi.co/api/v2/pokemon/{id or name}/
class MainContainer extends Component {
	constructor(){
		super();

		this.state = {
			pokemon: []
		}
	}


  getPokemon = async (index) => {
    try{
      // By default fetch is making a GET request
      const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + index + '/');
      // The response from API's is in JSON, notice the end of the crimes.json
      // So we have to parse that into a regular object, so we can use it.
      const pokemonJson = await pokemon.json();
      return pokemonJson;

    }catch(err){
      return err
    }
  }

  componentDidMount() {
    // ajax call
    this.getPokemon().then((pokemon) => {
      console.log(pokemon, '<-----This is data');

      this.setState({pokemon: pokemon});   
    }).catch((err) => {
        console.log(err);
    })

    console.log(this.state);
  }
    render(){
        return(
          <div>
            <h1>Main Container</h1>
              <PokeList />
          </div>
        )
    }
}
export default MainContainer;
