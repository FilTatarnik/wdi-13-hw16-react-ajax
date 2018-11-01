import React, { Component } from 'react';


class PokeList extends Component {
    render(){
    	console.log(this.props, "this is this.props in PokeList");

    	// create an array of elements using .map
    	// const thePikes = asdfasdfasdf.mpasdf

        return(
        	<div>
	            <h1>pokelist</h1>
	            {thePokes}
            </div>
        )
    }
}
export default PokeList;
