import React, {Component} from 'react';

class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="search-form">
                <form onSubmit={this.props.getRecipe} style={{padding: "5px"}}>
                    <input type="text" name="recipe" placeholder="Enter a food item.. ex: milk" />
                    <button>Get Recipe</button>
                </form>
            </div>
         );
    }
}
 
export default Form;