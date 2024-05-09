import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationCard } from '../Service/interfaces.service';
import { PhotoService } from '../Service/photo.service';
import { RecipesService } from '../Service/recipes.service';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.page.html',
  styleUrls: ['./edit-information.page.scss'],
})
export class EditInformationPage implements OnInit {

  constructor(public activatedRouted:ActivatedRoute,
    private bd:PhotoService,
    public recipes:RecipesService,
    private router:Router) { }
    
  Information?:InformationCard
    getArray:InformationCard[]=[]
    Portions:any=["1 Persona","2 Personas","3 Personas","4 Personas","+5 Personas"]

  ngOnInit() {
    this.Information=this.recipes.SaveInformation
    this.SetName()
    this.SetPortions()
    if(this.Information==null){
      this.router.navigate(['/'])
    }

    document.getElementById("Cancel")?.addEventListener("click",()=>{
      this.router.navigate(['/'])
    })
    document.getElementById("Save")?.addEventListener("click",()=>{
      this.ExtractInformationIngredients()
      this.ExtractName()
      this.ExtractPortions()
      this.ExtractProcedure()
      this.Modification(""+this.Information?.id)
    })
  }

  public SetName(){
    var InputName=(document.getElementById("InputName") as HTMLInputElement)
    InputName.value=""+this.Information?.Name
  }
  public SetPortions(){
    var number:String=""
    switch(this.Information?.Portions){
      case "1 Persona":
        number="0"
        break;
      case "2 Personas":
        number="1"
        break;
      case "3 Personas":
        number="2"
        break;
      case "4 Personas":
        number="3"
        break;
      case "+5 Personas":
        number="4"
        break;
    }
    var InputPortions=(document.getElementById(""+number) as HTMLOptionElement).setAttribute("selected","")
  }

  public ExtractInformationIngredients(){
    this.Information!.Ingredients=""
    if((document.getElementById("TextIngredients") as HTMLInputElement).value){
      this.Information!.Ingredients+=(document.getElementById("TextIngredients") as HTMLInputElement).value
    }
  }

  public ExtractName(){
    if((document.getElementById("InputName") as HTMLInputElement).value){
      this.Information!.Name=(document.getElementById("InputName") as HTMLInputElement).value
    }else{
      this.Information!.Name=""
    }
  }
  public ExtractPortions(){
    this.Information!.Portions=this.Portions[(document.getElementById("InputPortions") as HTMLInputElement).value]
  }
  public ExtractProcedure(){
    if((document.getElementById("TextProcedure") as HTMLInputElement).value){
      this.Information!.Procedure=(document.getElementById("TextProcedure") as HTMLInputElement).value
    }else{
      this.Information!.Procedure=""
    }
  }


  private async Modification(id:String){
    switch(id.split(":")[0]){
      case 'R':
        this.getArray=await this.bd.GetDateForCreateAndSavedate()
        for(let i=0;i<this.getArray.length;i++){
          if(this.getArray[i].id==this.Information?.id){
            this.getArray[i]=this.Information
            i=this.getArray.length+10
          }
        }

        this.bd.CreateAndSaveDate(this.getArray)
        this.router.navigate(['/'])
        
        break;
      case 'G':
        this.recipes.Garnish[parseInt(id.split(":")[1])-1]!=this.Information
        break;
      case 'M':
        this.recipes.mel[parseInt(id.split(":")[1])-1]!=this.Information
        break;
      case 'B':
        this.recipes.beverege[parseInt(id.split(":")[1])-1]!=this.Information
        break;
      case 'D':
        this.recipes.Dessert[parseInt(id.split(":")[1])-1]!=this.Information
        break;
      case 'A':
        this.recipes.AlcoholicDrink[parseInt(id.split(":")[1])-1]!=this.Information
        break;

    }
  }

  /*private async gatherInformation(){
    
    
  }*/
  private async GetDate(id:string){
    return await this.bd.GetDate(id)
  }

}
