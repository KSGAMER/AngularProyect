import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [IngredientsService],
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  constructor(private ingedientsService: IngredientsService) { }

  ngOnInit() {
    this.ingredients = this.ingedientsService.getIngredients();
    this.ingedientsService.uploadIngredient.subscribe(
      (recipe: Ingredient) => {
        this.ingredients = this.ingedientsService.getIngredients();
      }
    )
  }

  addIngredientsItem() {
    
  }
}
