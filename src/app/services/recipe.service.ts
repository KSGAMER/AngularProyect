import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "./ingredients.service";


@Injectable() // Decorador para poder agregar un servicio dentro de otro
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 'This is a simply test ', 'https://www.ngenespanol.com/wp-content/uploads/2018/08/%C2%BFEs-m%C3%A1s-sano-desayunar-pizza-o-cereal.png', 
    [
        new Ingredient('bread', 2)
    ]),
        new Recipe('A test recipe 2', 'This is a simply test', 'https://www.ngenespanol.com/wp-content/uploads/2018/08/%C2%BFEs-m%C3%A1s-sano-desayunar-pizza-o-cereal.png',
        [
            new Ingredient('Beef', 3),
            new Ingredient('Juice', 1)
        ]),
        new Recipe('A test recipe 3', 'This is a simply test', 'https://www.ngenespanol.com/wp-content/uploads/2018/08/%C2%BFEs-m%C3%A1s-sano-desayunar-pizza-o-cereal.png',
        [
            new Ingredient('Sauce', 2),
        ])
    ];

    //Crear constructor para utilizar el ingredientsService
    constructor(private ingredientsService: IngredientsService){}

      getRecipes(){
          return this.recipes.slice();
      }

      //Metodo para invocar desde la vista
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.ingredientsService.addIngredients(ingredients);
      }
}