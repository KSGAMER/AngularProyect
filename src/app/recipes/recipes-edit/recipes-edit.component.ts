import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  edithMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.edithMode = params['id'] != null;
      this.initForm();
    })
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    //ingredients
    const ingredients = new FormArray([]);

    if (this.edithMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount)
          })
          );
        }
      }

      this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName),
        'imagePath': new FormControl(recipeImagePath),
        'description': new FormControl(recipeDescription),
        'ingredients': ingredients
      });
    }
  }
}
