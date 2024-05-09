import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationCard } from '../Service/interfaces.service';
import { RecipesService } from '../Service/recipes.service';
import { PhotoService } from '../Service/photo.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(private router:Router,private recipes:RecipesService,private bd:PhotoService) { }
  ObjectMyRecipes:InformationCard[]=[]
  ObjectHome:InformationCard[]=[]
  ObjectGarnish:InformationCard[]=[]
  ObjectMel:InformationCard[]=[]
  ObjectDessert:InformationCard[]=[]
  ObjectDrink:InformationCard[]=[]
  ObjectAlcoholicDrinks:InformationCard[]=[]
  NumberArray:number=0

  ngOnInit() {
    this.OptionStar()

    document.getElementById("MyRecipes")?.addEventListener("click",()=>{
      var Content=document.getElementById("DivCarousel")
      this.getDate();
      Content!.style.transform = "translateX(-0%)";
    })

    document.getElementById("Inicio")?.addEventListener("click",()=>{
      var Content=document.getElementById("DivCarousel")
      Content!.style.transform = "translateX(-14.2%)";
    })
    document.getElementById("Sopa")?.addEventListener("click",()=>{
      var Content=document.getElementById("DivCarousel")
      this.ObjectGarnish=this.recipes.Garnish
      Content!.style.transform = "translateX(-28.5%)";
    })
    document.getElementById("Comida")?.addEventListener("click",()=>{
      var Content=document.getElementById("DivCarousel")
      this.ObjectMel=this.recipes.mel
      Content!.style.transform = "translateX(-42.8%)";
    })
    document.getElementById("Postre")?.addEventListener("click",()=>{
      var Content=document.getElementById("DivCarousel")
      this.ObjectDessert=this.recipes.Dessert
      Content!.style.transform = "translateX(-57%)";
    })
    document.getElementById("Bebida")?.addEventListener("click",()=>{
      var Content=document.getElementById("DivCarousel")
      this.ObjectDrink=this.recipes.beverege
      Content!.style.transform = "translateX(-71.4%)";
    })
    document.getElementById("BebidaAlcholica")?.addEventListener("click",()=>{
      var Content=document.getElementById("DivCarousel")
      this.ObjectAlcoholicDrinks=this.recipes.AlcoholicDrink
      Content!.style.transform = "translateX(-85.7%)";
    })
    document.getElementById("ImgAdd")?.addEventListener("click",()=>{
      this.router.navigate(["/create-information"])
    })

  }

  public OptionStar(){
    this.ObjectHome=[]
    try {
      this.ObjectHome.push(this.GetMel())
      this.ObjectHome.push(this.GetBeverege())
      this.ObjectHome.push(this.GetDessert())
      this.ObjectHome.push(this.GetGarnish())
    } catch (error) {}
  }

  private NumberRandom(Number:number){
    return Math.floor(Math.random()*Number)
  }
  private GetMel(){
      return this.recipes.mel[this.NumberRandom(this.recipes.mel.length)]
  }
  private GetDessert(){
      return this.recipes.Dessert[this.NumberRandom(this.recipes.Dessert.length)]
  }

  private GetGarnish(){
      return this.recipes.Garnish[this.NumberRandom(this.recipes.Garnish.length)]
  }
  private GetBeverege(){
      return this.recipes.beverege[this.NumberRandom(this.recipes.beverege.length)]
  }

  private async getDate(){
    this.ObjectMyRecipes=await this.bd.loadSaved()
    console.log(this.ObjectMyRecipes)
  }

  public SeeCard(Card:String){
    this.router.navigate(['/see-information',Card])
  }
  public SeeCardMyRecipes(Card:InformationCard,position:number){
    this.recipes.SaveInformation=Card
    this.router.navigate(['/see-information',"R:"+position])
  }

}
