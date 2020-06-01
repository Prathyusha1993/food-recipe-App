import React, {useState} from 'react';
import RecipeDetails from './recipeDetails';


const Recipe = ({title, calories, image, url, ingredients}) =>{
    const[show, setShow] = useState(false);

    return(
        <div className="recipe">
            <h3>{title}</h3>
            <p>calories: {calories}</p>
            <img src={image} alt=""/><br/>
            <a href={url} target="_blank" rel="noopener noreferrer">URL</a>
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients}/>}
        </div>
    )
}

export default Recipe;