import React, { useState } from 'react';
import RecipeDetails from './recipeDetails';


const Recipe = ({ title, calories, image, url, ingredients }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="recipe">
            <div class="receipe-title">{title}</div>
            <p><b>Calories:</b> {calories}</p>
            <img src={image} alt="" /><br />
            <a href={url} target="_blank" rel="noopener noreferrer">Recipe URL</a>
            <br />
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    )
}

export default Recipe;