import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe:Recipe
  constructor(
    private activerRoute:ActivatedRoute,
    private recipesService:RecipesService,
    private router:Router,
    private alertCtrl:AlertController
  ) { }

  ngOnInit() {
    this.activerRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('recipeId')){
        //redirect
        return;
      }
      const recipeId=paramMap.get('recipeId');
      this.loadedRecipe= this.recipesService.getRecipe(recipeId);
    })
  }
  onDeleteRecipe(){
    this.alertCtrl.create({
      header:'Are you sure ?',
      message:'do you realy want to delete the recipe?',
      buttons:[
        {
          text:'cancel',
          role:'cancel'
        },
        {
          text:'Delete',
          handler:()=>{
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes'])
          }
        }
      ]
    }).then(alertEl=>{
      alertEl.present()
    })
    
  }

}
