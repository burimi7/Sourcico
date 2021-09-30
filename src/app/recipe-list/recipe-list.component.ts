import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service'
import {Recipe} from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  constructor(public recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  SelectedRecipe = new Recipe();

  TruncateText(text, maxCharacters, suffix, cutWord) {
    if (cutWord) {
      return text.slice(0, maxCharacters) + suffix
    }
    else {
      return text.slice(0, maxCharacters) + text.slice(maxCharacters, text.length).split(' ')[0] + suffix
    }
  }

  deleteRecipe(RecipeSelected, ){
    if (confirm('Are you sure you want to delete the recipe '+Recipe.name+'?')) {
      // Save it!
      this.recipeService.Recipes = this.recipeService.Recipes.filter(recipe=>recipe.name!=RecipeSelected.name);
    } else {
      // Do nothing!
    }
  }

}
