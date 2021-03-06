import {Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { SigninComponent } from './auth/signin/signin.component';
const routes: Routes = [
    {
        path:'', redirectTo:'/sigin', pathMatch:'full'
    },
    {
        path: 'sigin', component: SigninComponent
    },
    {
        path:'recipes', component:RecipesComponent, canActivate: [AuthGuard], children:[
            {path:'', component: RecipesStartComponent },
            {path:'new', component: RecipesEditComponent },
            {path:':id', component: RecipesDetailComponent },
            {path:':id/edit', component: RecipesEditComponent },
        ]
    },
    {
        path:'shoppinglist', component: ShoppingListComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}