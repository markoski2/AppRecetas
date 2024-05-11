import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationCard } from 'src/app/Service/interfaces.service';
import { RecipesService } from 'src/app/Service/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router:Router,private recipes:RecipesService,private activatedRouted:ActivatedRoute) { }
  ObjectArray:InformationCard[]=[]
  CategoryOne?:string
  CategoryTwo?:string

  ngOnInit() {
    var ejemplo=null
    ejemplo=this.activatedRouted.snapshot.paramMap.get('category')
    this.gatherInformation(""+ejemplo)
    this.ObjectArray=[]
    for(let i=0;i<5;i++){
      this.ObjectArray.push(this.recipes.Accompaniments[i])
    }
    document.getElementById("GoHome")?.addEventListener("click",()=>{
      this.router.navigate(['/category'])
    })
    
  }

  public SeeCard(Card:String){
    this.router.navigate(['/see-information',Card])
  }

  private gatherInformation(id: string) {
    switch (id.split(":")[0]) {
      case 'A':
        this.CategoryOne="Ensaladas"
        this.CategoryTwo="Salsas"
        break;
      case 'M':
        this.CategoryOne="Microondas"
        this.CategoryTwo="Horno"
        break;
      case 'B':
        this.CategoryOne="Caliente"
        this.CategoryTwo="Frio"
        break;
      case 'D':
        this.CategoryOne="Microondas"
        this.CategoryTwo="Horno"
        break;

    }

  }

}
