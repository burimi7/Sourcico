import {Ingredients} from './ingredients.model';

export class Recipe{
    // id: number;
    name: string='';
    source: string='';
    ingredients: Ingredients[] =[];
    preparation_time:any= {
        hours : 0,
        minutes : 0
    };
    instructions: string = '';
}