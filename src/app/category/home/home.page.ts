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
  ObjectCopyArrayHome:InformationCard[]=[]
  letterCategory?:string
  CategoryOne?:string
  CategoryTwo?:string
  ScaleType1=false
  ScaleType2=false
  ScaleType3=false
  NumberContentCards:number=5
  Category:number=0
  SeeButtonMore:Boolean=true


  ngOnInit() {
    var ejemplo=null
    ejemplo=this.activatedRouted.snapshot.paramMap.get('category')
    this.gatherInformation(""+ejemplo)
    
    document.getElementById("GoHome")?.addEventListener("click",()=>{
      this.router.navigate(['/category'])
    })
    document.getElementById("types1")?.addEventListener("click",()=>{//PRIMARY
      var BlockType=document.getElementById("types1")
      this.NumberContentCards=0
      if(!this.ScaleType1){
        this.Category=1;
          BlockType!.style.transform="scale(1.1,1.1)"
          BlockType!.style.borderRadius="0 0 20px 20px"
          BlockType!.style.border="5px solid red"
        this.ScaleType1=true;
        this.resetType2(document.getElementById("types2"))
        this.resetType3(document.getElementById("types3"))
        this.selectCategory(this.Category,0,5)
      }else{
        this.resetType1(BlockType)
      }
    })
    document.getElementById("types2")?.addEventListener("click",()=>{//EASY
      var BlockType=document.getElementById("types2")
      var ContentCards=document.getElementById("DivContentCard")!
      ContentCards.innerHTML=" "
      this.NumberContentCards=5
      if(!this.ScaleType2){
        this.Category=2
          BlockType!.style.transform="scale(1.1,1.1)"
          BlockType!.style.borderRadius="0 0 20px 20px"
          BlockType!.style.border="5px solid red"
        this.ScaleType2=true;
        this.resetType1(document.getElementById("types1"))
        this.resetType3(document.getElementById("types3"))
        this.selectCategory(this.Category,0,5)
      }else{
        this.resetType2(BlockType)
      }
    })
    document.getElementById("types3")?.addEventListener("click",()=>{//THIRD
      var BlockType=document.getElementById("types3")
      var ContentCards=document.getElementById("DivContentCard")!
      ContentCards.innerHTML=" "
      this.NumberContentCards=5
      if(!this.ScaleType3){
        this.Category=3
          BlockType!.style.transform="scale(1.1,1.1)"
          BlockType!.style.borderRadius="0 0 20px 20px"
          BlockType!.style.border="5px solid red"
        this.ScaleType3=true;
        this.resetType1(document.getElementById("types1"))
        this.resetType2(document.getElementById("types2"))
        this.selectCategory(this.Category,0,5)
      }else{
        this.resetType3(BlockType)
      }
    })
    document.getElementById("ButtonMostrarMas")?.addEventListener("click",()=>{
      this.LoadMoreCards()
    })
    document.getElementById("ButtonMostrarMenos")?.addEventListener("click",()=>{
      this.LoadLessCards()
    })
  }
  public resetType1(BlockType1:any){
    BlockType1!.style.transform="scale(1,1)"
    BlockType1!.style.borderRadius="0 0 20px 20px"
    BlockType1!.style.border="0px "
    this.ScaleType1=false;
  }
  public resetType2(BlockType1:any){
    BlockType1!.style.transform="scale(1,1)"
    BlockType1!.style.borderRadius="0 0 20px 20px"
    BlockType1!.style.border="0px "
    this.ScaleType2=false;
  }
  public resetType3(BlockType1:any){
    BlockType1!.style.transform="scale(1,1)"
    BlockType1!.style.borderRadius="0 0 20px 20px"
    BlockType1!.style.border="0px "
    this.ScaleType3=false;
  }

  public SeeCard(Card:String){
    this.router.navigate(['/see-information',Card])
  }

  private gatherInformation(id: string) {
    this.letterCategory=id.charAt(0)
    console.log(this.letterCategory)
    switch (this.letterCategory) {
      case 'A':
        this.CategoryOne="Ensaladas"
        this.CategoryTwo="Salsas"
        this.ObjectArray=[]
        this.StartInformationCard(this.recipes.Accompaniments)
        break;
      case 'M':
        this.CategoryOne="Microondas"
        this.CategoryTwo="Horno"
        this.StartInformationCard(this.recipes.mel)
        break;
      case 'B':
        this.CategoryOne="Caliente"
        this.CategoryTwo="Frio"
        this.StartInformationCard(this.recipes.beverege)
        break;
      case 'D':
        this.CategoryOne="Caliente"
        this.CategoryTwo="Frio"
        this.StartInformationCard(this.recipes.Dessert)
        break;

    }

  }
  private StartInformationCard(Array:any){
    this.ObjectArray=[]
    for(let i=0;i<5;i++){
      this.ObjectArray.push(Array[i])
    }
  }
  private MoreCardsCategoryZero(Array:any,Min:number,Max:number){
    this.ObjectArray=[]
    for(let i=Min;i<Max;i++){
      if(i<Array.length){
        this.ObjectArray.push(Array[i])
      }else{
        i=10000
        let ButtonContentMore=document.getElementById("ButtonMostrarMas")
        ButtonContentMore!.style.display="none"
        this.SeeButtonMore=false
      }
      
    }
  }

  private LoadMoreCards(){
    if(this.NumberContentCards==0||this.NumberContentCards==5){
      var ButtonLess=document.getElementById("ButtonMostrarMenos")
      ButtonLess!.style.display="block"
    }
    
    this.selectCategory(this.Category,this.NumberContentCards,this.NumberContentCards+=5)
  }
  private LoadLessCards(){
    if(!this.SeeButtonMore){
      var ButtonLess=document.getElementById("ButtonMostrarMas")
      ButtonLess!.style.display="block"
    }
    if(this.NumberContentCards-10==0){
      var ButtonLess=document.getElementById("ButtonMostrarMenos")
      ButtonLess!.style.display="none"
    }
    this.selectCategory(this.Category,this.NumberContentCards-10,this.NumberContentCards-=5)
  }

  private selectCategory(category:number,Min:number,Max:number){
    console.log("[categoria:"+category+"][min:"+Min+"][max:"+Max)
    this.ObjectArray=[]
    switch (this.letterCategory) {
      case 'A':
        if(category==0){
          this.MoreCardsCategoryZero(this.recipes.Accompaniments,Min,Max)
        }else if(category==1){//PRIMARY
          this.AddAccopanimentsObjectArray(this.recipes.PrimaryAccompaniments,Min,Max)
        }else if(category==2){//EASY
          this.AddAccopanimentsObjectArray(this.recipes.EasyAccompaniments,Min,Max)
        }else{//"3" THIRD
          this.AddAccopanimentsObjectArray(this.recipes.ThirdAccompaniments,Min,Max)
        }
        break;
      case 'M':
        if(category==0){
          this.MoreCardsCategoryZero(this.recipes.mel,Min,Max)
        }else if(category==1){//PRIMARY
          this.AddMelObjectArray(this.recipes.PrimaryMel,Min,Max)
        }else if(category==2){//EASY
          this.AddMelObjectArray(this.recipes.EasyMel,Min,Max)
        }else{//"3" THIRD
          this.AddMelObjectArray(this.recipes.ThirdMel,Min,Max)
        }
        break;
      case 'B':
        if(category==0){
          this.MoreCardsCategoryZero(this.recipes.beverege,Min,Max)
        }else if(category==1){//PRIMARY
          this.AddBeverageObjectArray(this.recipes.PrimaryDrink,Min,Max)
        }else if(category==2){//EASY
          this.AddBeverageObjectArray(this.recipes.EasyDrink,Min,Max)
        }else{//"3" THIRD
          this.AddBeverageObjectArray(this.recipes.ThirdDrink,Min,Max)
        }
        break;
      case 'D':
        if(category==0){
          this.MoreCardsCategoryZero(this.recipes.Dessert,Min,Max)
        }else if(category==1){//PRIMARY
          this.AddDessertObjectArray(this.recipes.PrimaryDessert,Min,Max)
        }else if(category==2){//EASY
          this.AddDessertObjectArray(this.recipes.EasyDessert,Min,Max)
        }else{//"3" THIRD
          this.AddDessertObjectArray(this.recipes.ThirdDessert,Min,Max)
        }
        break;
    }
    this.DrawCardCategory(this.ObjectArray)
  }

  private AddAccopanimentsObjectArray(Array:number[],Min:number,Max:number){
    for(let i=Min;i<Max;i++){
      if(i<Array.length){
        this.ObjectArray.push(this.recipes.Accompaniments[Array[i]])
      }else{
        i=1000;
        let ButtonContentMore=document.getElementById("ButtonMostrarMas")
        ButtonContentMore!.style.display="None"
        this.SeeButtonMore=false
      }
    }
  }
  private AddMelObjectArray(Array:number[],Min:number,Max:number){
    for(let i=Min;i<Max;i++){
      if(i<Array.length){
        this.ObjectArray.push(this.recipes.mel[Array[i]])
      }else{
        i=1000;
        let ButtonContentMore=document.getElementById("ButtonMostrarMas")
        ButtonContentMore!.style.display="None"
        this.SeeButtonMore=false
      }
    }
  }
  private AddBeverageObjectArray(Array:number[],Min:number,Max:number){
    for(let i=Min;i<Max;i++){
      if(i<Array.length){
        this.ObjectArray.push(this.recipes.beverege[Array[i]])
      }else{
        i=1000;
        let ButtonContentMore=document.getElementById("ButtonMostrarMas")
        ButtonContentMore!.style.display="None"
        this.SeeButtonMore=false
      }
    }
  }
  private AddDessertObjectArray(Array:number[],Min:number,Max:number){
    for(let i=Min;i<Max;i++){
      if(i<Array.length){
        this.ObjectArray.push(this.recipes.Dessert[Array[i]])
      }else{
        i=1000;
        let ButtonContentMore=document.getElementById("ButtonMostrarMas")
        ButtonContentMore!.style.display="None"
        this.SeeButtonMore=false
      }
    }
  }

  private DrawCardCategory(ObjectArray:InformationCard[]){
    var ContentCards=document.getElementById("DivContentCard")!
    ContentCards.innerHTML=" "
    ObjectArray.forEach(element => {
      var Contenedor=document.createElement("div")
      Contenedor.className="contenedor"
      Contenedor.id="Contenedor"
      var Card=document.createElement("div")
      Card.className="card"
      Card.addEventListener("click",()=>{
        this.SeeCard(element.id)//INSERT DATE
      })

      var DivImg=document.createElement("div")
      var CardImg=document.createElement("img")
      CardImg.src=""+element.webviewPath//INSERT DATE
      CardImg.className='CardImg'
      DivImg.appendChild(CardImg)

      var CardMain=document.createElement("div")
      CardMain.className="CardMain"

      var CardMainH4=document.createElement("h4")
      CardMainH4.textContent=""+element.Name//INSERT DATE
      var CardMainP=document.createElement("p")
      CardMainP.textContent=""+element.Portions//INSERT DATE
      
      CardMain.appendChild(CardMainH4)
      CardMain.appendChild(CardMainP)
      Card.appendChild(DivImg)
      Card.appendChild(CardMain)
      Contenedor.appendChild(Card)
      ContentCards?.appendChild(Contenedor)
    });

    


  }

}
