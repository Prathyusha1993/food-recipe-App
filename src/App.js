import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import Form from './components/form';
import Recipe from './components/recipe';
import {v4 as uuidv4} from 'uuid';

const APP_ID = "fd05a623";
const APP_KEY = "4bc9e4cd93109a08f3b61dbefd7891a3";


class App extends Component {
  state = { 
    recipes : [],
    alert : ""
   }

   
  getRecipe = async (e) =>{
    e.preventDefault();
    const recipe = e.target.elements.recipe.value;
    const url=`https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const result = await Axios.get(url);
    console.log(result);

    if(recipe !== ""){
      this.setState({
      recipes : result.data.hits
    })}else{
      this.setState({
        alert : "please fill the form"
      })
    }
}

  render() { 
    return ( 
      <div className="App">
        <h3>Food Recipe App</h3>
        <div className="title-container">
        <Form getRecipe={this.getRecipe}/></div>
        <div className="recipes">
          {this.state.recipes !== [] && this.state.recipes.map(recipe => 
            <Recipe key={uuidv4()} recipe={this.recipes}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              url={recipe.recipe.url}
              ingredients={recipe.recipe.ingredients}
              />)}
        </div>
        {/*<Recipes getRecipesList = {this.getRecipesList}<h4>{recipe.recipe.label}</h4>/>*/}
        
      </div>
     );
  }
}
 
export default App;

