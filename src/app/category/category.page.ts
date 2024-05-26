import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationCardDefault, InformationCard } from '../Service/interfaces.service';
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
  ObjectHome:InformationCardDefault[]=[]
  ObjectAccompaniments:InformationCardDefault[]=[]
  ObjectMel:InformationCardDefault[]=[]
  ObjectDessert:InformationCardDefault[]=[]
  ObjectDrink:InformationCardDefault[]=[]
  ObjectAlcoholicDrinks:InformationCardDefault[]=[]
  NumberArray:number=0
  NumbersRandoms?:any[5]

  ngOnInit() {
    this.OptionStar()

    document.getElementById("MyRecipes")?.addEventListener("click",()=>{
      var Content=document.getElementById("DivCarousel")
      this.getDate();
      Content!.style.transform = "translateX(-0%)";
    })

    document.getElementById("Inicio")?.addEventListener("click",()=>{
      var Content=document.getElementById("DivCarousel")
      Content!.style.transform = "translateX(-16.6%)";
    })

    document.getElementById("Sopa")?.addEventListener("click",()=>{//ACCOMPANIMENTS
      var Content=document.getElementById("DivCarousel")
      if(this.ObjectAccompaniments.length==0){
      this.NumbersRandoms=this.CardsRandom(this.recipes.Accompaniments)
        for(let i=0;i<5;i++){
          this.ObjectAccompaniments.push(this.recipes.Accompaniments[this.NumbersRandoms[i]])
        }
      }
      Content!.style.transform = "translateX(-33.32%)";
    })

    document.getElementById("Comida")?.addEventListener("click",()=>{
      var Content=document.getElementById("DivCarousel")
      if(this.ObjectMel.length==0){
        this.NumbersRandoms=this.CardsRandom(this.recipes.mel)
        for(let i=0;i<5;i++){
          this.ObjectMel.push(this.recipes.mel[this.NumbersRandoms[i]])
        }
      }
      Content!.style.transform = "translateX(-50%)";
    })
    document.getElementById("Postre")?.addEventListener("click",()=>{
      var Content=document.getElementById("DivCarousel")
      if(this.ObjectDessert.length==0){
        this.NumbersRandoms=this.CardsRandom(this.recipes.Dessert)
        for(let i=0;i<5;i++){
          this.ObjectDessert.push(this.recipes.Dessert[this.NumbersRandoms[i]])
        }
      }
      Content!.style.transform = "translateX(-66.68%)";
    })
    document.getElementById("Bebida")?.addEventListener("click",()=>{
      var Content=document.getElementById("DivCarousel")
      if(this.ObjectDrink.length==0){
        this.NumbersRandoms=this.CardsRandom(this.recipes.beverege)
        for(let i=0;i<5;i++){
          this.ObjectDrink.push(this.recipes.beverege[this.NumbersRandoms[i]])
        }
      }
      Content!.style.transform = "translateX(-83.35%)";
    })
    /*ButtonMostrarMas
    document.getElementById("BebidaAlcholica")?.addEventListener("click",()=>{
      var Content=document.getElementById("DivCarousel")
      this.ObjectAlcoholicDrinks=this.recipes.AlcoholicDrink
      Content!.style.transform = "translateX(-85.7%)";
    })*/
    document.getElementById("ImgAdd")?.addEventListener("click",()=>{
      this.router.navigate(["/create-information"])
    })

  }

  public GoHomeCategory(Category:string){
    this.router.navigate(['/category/home',Category])
  }

  public OptionStar(){
    this.ObjectHome=[]
    try {
      this.ObjectHome.push(this.GetMel())
      this.ObjectHome.push(this.GetBeverege())
      this.ObjectHome.push(this.GetDessert())
      this.ObjectHome.push(this.GetAccompaniments())
    } catch (error) {}
  }

  private NumberRandom(Number:number){
    return Math.floor(Math.random()*Number)
  }
  private CardsRandom(Array:InformationCardDefault[]){
    let Randoms:any[5]=[0,0,0,0,0]
    for(let i=0;i<5;i++){
      Randoms[i]=this.NumberRandom(Array.length)
    }
    for(let p=0;p<4;p++){
      if(p<-1){
        p=0
      }
      for(let j=p+1;j<5;j++){
        if(Randoms[p]==Randoms[j]){
          Randoms[j]=this.NumberRandom(Array.length)
          p=-5
          j=20
        }
      }
    }
    return Randoms
    
  }
  private GetMel(){
      return this.recipes.mel[this.NumberRandom(this.recipes.mel.length)]
  }
  private GetDessert(){
      return this.recipes.Dessert[this.NumberRandom(this.recipes.Dessert.length)]
  }

  private GetAccompaniments(){
      return this.recipes.Accompaniments[this.NumberRandom(this.recipes.Accompaniments.length)]
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
    this.recipes.SaveInformationMyRecipes=Card
    this.router.navigate(['/see-information',"R:"+position])
  }

}
