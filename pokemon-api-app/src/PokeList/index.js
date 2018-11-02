import React, { Component } from 'react';


class PokeList extends Component {
    render(){
    	// console.log(this.props, "<--this is this.props in PokeList");
    	// console.log(this.props);
    	// create an array of elements using .map
    	// const thePikes = asdfasdfasdf.mpasdf
    	const thePokes = this.props.pokemon.map(
            (poke, i) => {
    			return (

                    <li key={i}>
                        {poke.name}
                        {poke.img}
                    </li>
                )
                // console.log(thePokes);
        	}
        )
	


            // console.log(this.props.pokemon);
        return(
        	<ul>{thePokes}</ul>


        )
    }
}
export default PokeList;

