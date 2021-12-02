import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { MathGameComponent } from './MyComponents/math-game/math-game.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent },
    { path: 'mathgame', component: MathGameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }