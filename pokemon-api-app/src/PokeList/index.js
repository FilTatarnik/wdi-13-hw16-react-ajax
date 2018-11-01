import React, { Component } from 'react';


class PokeList extends Component {
    render(){
    	console.log(this.props, "this is this.props in PokeList");

    	// create an array of elements using .map
    	// const thePikes = asdfasdfasdf.mpasdf
    	const thePokes = this.props.pokemon.map((thePokes, i) => {
    			// console.log(thePokes);
    	})
        return(
        	<div>
	            <h1>pokelist</h1>
	            {this.props.PokeList}
            </div>
        )
    }
}
export default PokeList;
