import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategorizerComponent } from './components/categorizer/categorizer.component'

const routes: Routes = [
  { path: '', redirectTo: 'categorizer', pathMatch: 'full' },
  { path: 'categorizer', component: CategorizerComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }