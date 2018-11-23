import { Recipe } from "../recipes/recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "./ingredients.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    //recipeSelected = new EventEmitter<Recipe>();
    RecetaCambio = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 'This is a simply test ', 'https://www.ecestaticos.com/imagestatic/clipping/30c/07e/30c07ee22ed273aa6817dccd2118d171/como-hacer-la-hamburguesa-perfecta-segun-la-tradicion-yankee.jpg?mtime=1459956932',
            [
                new Ingredient('bread', 2),
                new Ingredient('tomatoes', 3)
            ]),
        new Recipe('A test recipe 2', 'This is a simply test', 'https://www.ecestaticos.com/imagestatic/clipping/30c/07e/30c07ee22ed273aa6817dccd2118d171/como-hacer-la-hamburguesa-perfecta-segun-la-tradicion-yankee.jpg?mtime=1459956932',
            [
                new Ingredient('Beef', 3),
                new Ingredient('garlic', 1)
            ]),
        new Recipe('A test recipe 3', 'This is a simply test', 'https://www.ecestaticos.com/imagestatic/clipping/30c/07e/30c07ee22ed273aa6817dccd2118d171/como-hacer-la-hamburguesa-perfecta-segun-la-tradicion-yankee.jpg?mtime=1459956932',
            [
                new Ingredient('Sauce', 2),
            ])
    ];
    getRecipes() {
        return this.recipes.slice();
    }
    constructor(private ingredientsService: IngredientsService) {

    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.ingredientsService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.RecetaCambio.next(this.recipes.slice());
        console.log(this.getRecipes())
    }
    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.RecetaCambio.next(this.recipes.slice());
    }



}