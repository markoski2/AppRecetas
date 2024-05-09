
export interface InformationCard {
  id:String;
  Name:String;
  Portions:String;
  Ingredients:String;
  Procedure:String;
  CountIngredients:Int8Array[1];
  filepath: string;
  webviewPath?: string;
}