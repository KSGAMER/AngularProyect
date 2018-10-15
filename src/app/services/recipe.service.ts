import {Recipe} from '../recipes/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A test recipe 1', ' This is a simply test',
        'https://www.milkbusiness.com/sites/default/files/2018-02/Pizza%20Hut%20Pan%20Pizza.jpg', [new Ingredient('Bread', 2)]),
        new Recipe('A test recipe 2', ' This is a simply test',
        'https://www.milkbusiness.com/sites/default/files/2018-02/Pizza%20Hut%20Pan%20Pizza.jpg', [new Ingredient('Apple', 2)]),
        new Recipe('A test recipe 3', ' This is a simply test',
        'https://www.milkbusiness.com/sites/default/files/2018-02/Pizza%20Hut%20Pan%20Pizza.jpg', [new Ingredient('Juice', 2), new Ingredient('Orange', 3)])
      ];

      getRecipes(){
          return this.recipes.slice();
      }
    }
