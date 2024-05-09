import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Platform } from '@ionic/angular';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';
import { InformationCard } from './interfaces.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photos: InformationCard[] = [];
  InformationCard: InformationCard[] = [];
  cosa:InformationCard[]=[];
  UrlPhoto="../../../assets/icon/DefaultMeidicine.png";
  private PreferenceKey: string = 'AppRecetarioMyRecipes';
  //Movil
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }
  //movil fin 

  public async CreateAndSaveDate(InformationCard:any){
    Preferences.set({
      key: this.PreferenceKey,
      value: JSON.stringify(InformationCard),
    });
  }

  public async TakePhotos(){
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    const savedImageFile = await this.savePicture(capturedPhoto);
    return savedImageFile;
  }

  public async DeleteInformationCard(Date: InformationCard,CardsDate: InformationCard[], position: number) {
    // Remove this photo from the Photos reference data array
    //.Splice elimina la posicion del arreglo que se le indique, si solo le pasamos un parametro eliminara los indices
    // que sean >= al parametro
    //el segundoi parametro indica cuantas posiciones queremos eliminar, si es 1 solo eliminara la posicion del primer parametro
    //si el segundo parametro es 2 eliminara la posicion del primer parametro y la del siguiente
    //Elimina la foto
    
    CardsDate.splice(position, 1); 
  
    // Update photos array cache by overwriting the existing photo array
    Preferences.set({
      key: this.PreferenceKey,
      value: JSON.stringify(CardsDate)
    });
    if(Date.filepath.charAt(0)!='.'){//si es una foto tomada se elimina del sistema
      // delete photo file from filesystem
      const filename = Date.filepath?.substr(Date.filepath.lastIndexOf('/') + 1);
        
      await Filesystem.deleteFile({
        path: filename!,
        directory: Directory.Data
      });
    }
    
  }
  
  public async GetDate(dateKey:string){
    const { value } = await Preferences.get({ key: this.PreferenceKey });
    var data:InformationCard[] = (value ? JSON.parse(value):[]) as InformationCard[];
    var DateReturn!:InformationCard

    // Easiest way to detect when running on the web:
    // “when the platform is NOT hybrid, do this”
    if (!this.platform.is('hybrid')) {
      // Display the photo by reading into base64 format
      for (let photo of this.cosa) {
        if(photo.id==dateKey){
          if(photo.filepath.charAt(0)!='.'){
            // Read each saved photo's data from the Filesystem
            const readFile = await Filesystem.readFile({
            path: photo.filepath,
                directory: Directory.Data
            });
      
            // Web platform only: Load the photo as base64 data
            photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
          }

          DateReturn= photo
        }
      }
    }
    return DateReturn;
  }

  public async GetDateForCreateAndSavedate(){
    const { value } = await Preferences.get({ key: this.PreferenceKey });
    var data:InformationCard[] = (value ? JSON.parse(value):[]) as InformationCard[];
    return data
  }

  public async loadSaved() {
    // Retrieve cached photo array data
    const { value } = await Preferences.get({ key: this.PreferenceKey });
    this.InformationCard = (value ? JSON.parse(value):[]) as InformationCard[];
    
    // Easiest way to detect when running on the web:
  // “when the platform is NOT hybrid, do this”
  if (!this.platform.is('hybrid')) {
    // Display the photo by reading into base64 format
    for (let photo of this.InformationCard) {
      if(photo.filepath.charAt(0)!='.'&&photo.filepath.charAt(0)!=""){
        // Read each saved photo's data from the Filesystem
        const readFile = await Filesystem.readFile({
        path: photo.filepath,
            directory: Directory.Data
        });
        // Web platform only: Load the photo as base64 data
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
      
    }
  }
  return this.InformationCard;
}

  private async savePicture(photo: Photo) { 
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(photo);

    // Write the file to the data directory
    const fileName = Date.now() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });
    //Aqui se crea el objeto que se guardara en el JSON 
    if (this.platform.is('hybrid')) {//Si el metodo es utilizado en un dispositivo movil entrara 
      // Display the new image by rewriting the 'file://' path to HTTP
      
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    }
    else {//Si es pagina web entrara aqui
      // Use webPath to display the new image instead of base64 since it's
      // already loaded into memory
      return {
        filepath: fileName,
        webviewPath: photo.webPath
      };
    }

  }

  private async readAsBase64(photo: Photo) {
   // "hybrid" will detect Cordova or Capacitor
  if (this.platform.is('hybrid')) {
    // Read the file into base64 format
    const file = await Filesystem.readFile({
      path: photo.path!
    });

    return file.data;
  }
  else {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }
  }
  
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}


