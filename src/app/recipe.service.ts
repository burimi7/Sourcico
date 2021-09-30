import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model'
import {Ingredients} from './ingredients.model'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() {}

public Recipes: Recipe[] = [
  {
    name: 'Recipe1',
    source: 'Link of the Recipe1',
    ingredients: [
      {
        name: 'Ingredient1',
        quantity: '1'
      },
      {
        name: 'Ingredient2',
        quantity: '2',
      }
    ],
    preparation_time: {hours:1,minutes:23},
    instructions: 'Instructions1'
},
{
  name: 'Recipe2',
  source: 'Link of the Recipe2',
  ingredients: [
    {
      name: 'Ingredient2',
      quantity: '2'
    },
    {
      name: 'Ingredient3',
      quantity: '3'
    },
    {
      name: 'Ingredient4',
      quantity: '4',
    }
  ],
  preparation_time: {hours:0,minutes:50},
  instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
},
{
  name: 'Recipe3',
  source: 'Link of the Recipe3',
  ingredients: [
    {
      name: 'Ingredient3',
      quantity: '3'
    },
    {
      name: 'Ingredient4',
      quantity: '4'
    },
    {
      name: 'Ingredient5',
      quantity: '5',
    },
    {
      name: 'Ingredient6',
      quantity: '6',
    },
    {
      name: 'Ingredient7',
      quantity: '7',
    }
  ],
  preparation_time: {hours:0,minutes:50},
  instructions: 'Instructions3'
}
];

  public Ingredients = ['Flour','Milk','Oil','Salt','Sugar','Eggs','Tomatoes','Peppers','Cheese','Potatoes','Meat'  ]
  
  IsAddingNewRecipe=false;

}
