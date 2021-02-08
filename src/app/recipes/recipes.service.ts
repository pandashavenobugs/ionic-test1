import { Injectable } from '@angular/core';
import { element } from 'protractor';
import {Recipe} from "../recipes/recipe.model"

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes:Recipe[]=[
    {
      id:'r1',
      title:'schnitzel',
      imageUrl:'https://www.thespruceeats.com/thmb/dFLHcwFFtDguBZGylUlDN8KaNaw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      ingredients:['French Friez','Pork','salad']
    },
    {
      id:'r2',
      title:'spaghetti',
      imageUrl:'https://www.simplyhappyfoodie.com/wp-content/uploads/2018/02/instant-pot-spaghetti-4.jpg',
      ingredients:['spaghetti','meat','tomatoes']
    },
  ]
  constructor() { }
  getAllRecipes(){
    //copy of array
    return [...this.recipes];
  }

  getRecipe(recipeId:string){
    //copy of data
    return {...this.recipes.find(element=> element.id===recipeId)}
  }

  deleteRecipe(recipeId:string){
    this.recipes = this.recipes.filter(element=> element.id!==recipeId);
  }
}
