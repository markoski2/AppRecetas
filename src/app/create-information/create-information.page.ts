import { Component, OnInit } from '@angular/core';
import { InformationCard } from '../Service/interfaces.service';
import { Router } from '@angular/router';
import { PhotoService, UserPhoto } from '../Service/photo.service';

@Component({
  selector: 'app-create-information',
  templateUrl: './create-information.page.html',
  styleUrls: ['./create-information.page.scss'],
})
export class CreateInformationPage implements OnInit {

  constructor(private bd:PhotoService,private router:Router) { }
  NumberId:number=2;
  arreglo:any={}
  element:InformationCard[]=[]
  FileImg?:UserPhoto
  dates:InformationCard={
    Name: "",
    Portions: "",
    Ingredients: "",
    Procedure: "",
    CountIngredients: 0,
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png",
    id: ""
  }
  UrlPhoto="../../../assets/icon/IconMenu.png";
  Portions:any=["1 Persona","2 Personas","3 Personas","4 Personas","+5 Personas"]
  ngOnInit() {

    this.getdate()
  
    document.getElementById("cosa")?.addEventListener("click",()=>{
      if((document.getElementById("cosa") as HTMLIonInputElement).value==""){
        this.createInputIngredients()

      }
    })

    document.getElementById("Add")?.addEventListener("click",()=>{
      this.ExtractInformationIngredients()
      this.ExtractName()
      this.ExtractProcedure()
      this.ExtractPortions()
      
      if(this.dates.Name&&this.dates.Portions&&this.dates.Ingredients&&this.dates.Procedure){
        console.log(this.dates)

        this.dates.id="R:"+ this.GenerationId(""+this.dates.Name)
        this.element.push(this.dates)
        console.log(this.element)
        this.bd.CreateAndSaveDate(this.element).finally(()=>{
          console.log("se realizo con exito la subida del archivo")
          this.router.navigate(['/category']).finally(() => { window.location.reload() })
        })
      }else{
        alert("faltan datos");
      }
    })

    document.getElementById("InputPortions")?.addEventListener("change",()=>{
      console.log()
      
    })

    document.getElementById("TakePhoto")?.addEventListener("click",()=>{
      this.TakePhoto()
    })
    
    

  }

  public async TakePhoto(){
    this.FileImg= await this.bd.TakePhotos()
    this.UrlPhoto=""+this.FileImg.webviewPath
    this.dates.filepath=this.FileImg?.filepath
    this.dates.webviewPath=this.FileImg?.webviewPath
  }

  public async getdate(){
    this.element=await this.bd.GetDateForCreateAndSavedate()
  }
  private GenerationId(word:string){
    var Dates=new Date();
    return word.charCodeAt(0)+""+Dates.getDate()+""+Dates.getMinutes()+""+Dates.getSeconds()+""+Dates.getMonth()
  }

  public ExtractFileImg(){

  }

  public ExtractInformationIngredients(){
    this.dates.Ingredients=""
    this.dates.CountIngredients=0
    if((document.getElementById("cosa") as HTMLInputElement).value){
      this.dates.Ingredients+=(document.getElementById("cosa") as HTMLInputElement).value
    }
    document.querySelectorAll(".IdIngredients").forEach(Element=>{
      if((Element as HTMLInputElement).value){
        this.dates.CountIngredients++
        this.dates.Ingredients+="\n"+(Element as HTMLInputElement).value
      }
      
    })
  }

  public ExtractName(){
    if((document.getElementById("InputName") as HTMLInputElement).value){
      this.dates.Name=(document.getElementById("InputName") as HTMLInputElement).value
    }else{
      this.dates.Name=""
    }
  }
  public ExtractPortions(){
    this.dates.Portions=this.Portions[(document.getElementById("InputPortions") as HTMLInputElement).value]
  }
  public ExtractProcedure(){
    if((document.getElementById("TextAreaProcedure") as HTMLInputElement).value){
      this.dates.Procedure=(document.getElementById("TextAreaProcedure") as HTMLInputElement).value
    }else{
      this.dates.Procedure=""
    }
  }

  public createInputIngredients(){
    var father =document.getElementById("ingredients")
    var Div=document.createElement("div")
    var label1=document.createElement("label")
    label1.textContent="*"
    var input=document.createElement("input")
    input.style.width="300px"
    input.style.margin="10px  10px 0 10px"
    input.style.fontSize="15px"
    input.style.padding="6px"
    input.className="IdIngredients"
    input.addEventListener("click",()=>{
      if((input as HTMLInputElement)?.value==""){
        this.NumberId++
        this.createInputIngredients()
      }
    })
    var label2=document.createElement("label")
    label2.textContent="X"
    label2.addEventListener("click",()=>{
      Div.remove()
    })
    Div.appendChild(label1)
    Div.appendChild(input)
    Div.appendChild(label2)
    father?.appendChild(Div)
  }

}
