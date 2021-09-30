import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Ingredients} from '../ingredients.model';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.sass']
})
export class RecipeAddComponent implements OnInit {

  constructor(public recipeService:RecipeService) { }

  ngOnInit(): void {}

  NewIngredient = new Ingredients();
  NewRecipe = new Recipe();

  addIngredient(){
    this.NewRecipe.ingredients.push(this.NewIngredient);
    this.NewIngredient = new Ingredients();
  }

  cancelRecipe(){
    this.NewIngredient = new Ingredients();
    this.NewRecipe = new Recipe();
    this.recipeService.IsAddingNewRecipe=false;
  }

  removeIngredient(indexIngredient){
    this.NewRecipe.ingredients.splice(indexIngredient, 1)
  }

  addRecipe(){
    this.recipeService.Recipes.push(this.NewRecipe);
    this.NewRecipe = new Recipe();
    this.recipeService.IsAddingNewRecipe=false;

  }

}
