import React, {Component} from 'react';

class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="search-form">
                <form onSubmit={this.props.getRecipe}>
                    <input type="text" name="recipe" placeholder="food item..." />
                    <button>Get Recipe</button>
                </form>
            </div>
         );
    }
}
 
export default Form;