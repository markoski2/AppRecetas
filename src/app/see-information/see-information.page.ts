import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationCard, InformationCardDefault } from '../Service/interfaces.service';
import { PhotoService } from '../Service/photo.service';
import { RecipesService } from '../Service/recipes.service';

@Component({
  selector: 'app-see-information',
  templateUrl: './see-information.page.html',
  styleUrls: ['./see-information.page.scss'],
})
export class SeeInformationPage implements OnInit {

  constructor(public activatedRouted: ActivatedRoute, private bd: PhotoService, private recipes: RecipesService, private router: Router) { }
  id: string = ""
  Information?: InformationCardDefault
  InformationMyRecipes?: InformationCard
  myRecipes = false
  PositionMyRecipes: number = 0
  ngOnInit() {
    var paramet;
    paramet = this.activatedRouted.snapshot.paramMap.get('id')
    this.gatherInformation(paramet!)

    document.getElementById("BtnEdit")?.addEventListener("click", () => {

    })

    document.getElementById("BtnDelete")?.addEventListener("click", () => {
      this.presentAlert()
    })

  }

  public BtnEdit() {
    this.recipes.SaveInformation = this.Information
    this.router.navigate(['/edit-information'])
  }
  public BtnDelete() {
    this.presentAlert()
  }

  public async presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = '¿Estás seguro que deseas borrar este elemento?';
    alert.message = 'Se borrara de forma permanente "' + this.Information?.Name + '"';
    alert.buttons = [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },
      {
        text: 'Confirmar',
        role: 'confirm',
        handler: () => {
          this.DeleteDate()
        },
      },
    ];;

    document.body.appendChild(alert);
    await alert.present();
  }

  private async gatherInformation(id: string) {
    switch (id.split(":")[0]) {
      case 'R':
        this.Information = this.recipes.SaveInformationMyRecipes
        this.myRecipes = true;
        this.PositionMyRecipes = parseInt(id.split(":")[1])
        this.InformationMyRecipes=this.recipes.SaveInformationMyRecipes
        break;
      case 'A':
        this.Information = this.recipes.Accompaniments[parseInt(id.split(":")[1]) - 1]
        break;
      case 'M':
        this.Information = this.recipes.mel[parseInt(id.split(":")[1]) - 1]
        break;
      case 'B':
        this.Information = this.recipes.beverege[parseInt(id.split(":")[1]) - 1]
        break;
      case 'D':
        this.Information = this.recipes.Dessert[parseInt(id.split(":")[1]) - 1]
        break;

    }

  }

  private async DeleteDate() {

    try {
      var allArray: InformationCard[] = await this.bd.GetDateForCreateAndSavedate()
      this.bd.DeleteInformationCard(this.InformationMyRecipes!, allArray, this.PositionMyRecipes).finally(() => {
        this.router.navigate(['/']).finally(() => { window.location.reload() })
      })
    } catch (error) {
      console.log(error)
    }
  }

}
