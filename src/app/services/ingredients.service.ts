import { Ingredient } from "../shared/ingredient.model"
import { Subject } from "rxjs";

export class IngredientsService {
    ingredientsUpdate = new Subject<Ingredient[]>();
    startedEdit = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Wuayaba', 5),
        new Ingredient('ManzanitaSol', 3)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsUpdate.next(this.ingredients.slice());
    }

    addIngredients(auxIngredients: Ingredient[]) {
        for (const i of auxIngredients) {
            (this.ingredients.find(element => element.name==i.name))?this.ingredients.find(element => element.name==i.name).amount=this.ingredients.find(element => element.name==i.name).amount+i.amount:this.ingredients.push(i)
        }
        this.ingredientsUpdate.next(this.ingredients.slice());
    }

    dropIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsUpdate.next(this.ingredients.slice());
    }

    updateIngredient(index: number, ingredient: Ingredient){
        this.ingredients[index] = ingredient;
        this.ingredientsUpdate.next(this.ingredients.slice());
    }
}