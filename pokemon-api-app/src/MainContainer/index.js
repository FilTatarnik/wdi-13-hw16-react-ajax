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


  getPokemon = async () => {
    try{
      // By default fetch is making a GET request
      const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/');
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
        console.log(pokemon.results, "this is what came back from the ajax call in componentDidMount in MainConatinar");

        this.setState({
          pokemon: pokemon.results
        });          
      })

  }
    render(){
      console.log(this.state.pokemon);
        return(
          <div>
            <h1>Main Container</h1>
              <PokeList pokemon={this.state.pokemon} />
              <h1>hello, {this.props.username}</h1>
          </div>
        )
    }
}
export default MainContainer;
