import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {Recipe} from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipes-items',
  templateUrl: './recipes-items.component.html',
  styleUrls: ['./recipes-items.component.css']
})
export class RecipesItemsComponent implements OnInit {
   @Input() recipe: Recipe;
   @Input() index: number;
   //@Output() recipeSelected = new EventEmitter<void>();
/*
  constructor(private recipeService: RecipeService) { }
*/
  ngOnInit() {
  }
/*
  onSelected() {
    //this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }
*/
  
}
