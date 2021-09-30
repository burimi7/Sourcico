import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RecipeService} from './recipe.service';
import { RecipeAddComponent } from './recipe-add/recipe-add.component'

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
