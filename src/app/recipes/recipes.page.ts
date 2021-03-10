import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Recipe } from './recipe.model';
import {RecipesService} from "./recipes.service"

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  repices:Recipe[];

  constructor(private recipesService:RecipesService) { }

  ngOnInit() {
    console.log('ngonInit')
  }
 
  //ngOninit runs once. if we want to get back the our page when route through the pages
  //ngOninit wont works because it loaded before.
  // ionViewWillEnter can run over and over unlike ngOninit.
  // ionViewWillEnter runs when all content is loaded 
  ionViewWillEnter(){
    this.repices=this.recipesService.getAllRecipes();
    console.log('ionViewWillEnter');
  }
  // ionViewDidEnter runs after all ionViewWillEnter is loaded
  // but we dont have to use ionViewWillEnter if we want to use ionViewWillEnter
  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  //ionViewWillLeave 
  //when we leave the page the ionViewWillLeave runs
  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }
  //after ionViewWillLeave but we dont have to run ionViewWillLeave if we want to use ionViewDidLeave
  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }


}
