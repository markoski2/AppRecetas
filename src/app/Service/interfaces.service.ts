
export interface InformationCard {
  [x: string]: any;
  id:String;
  Name:String;
  Portions:String;
  Ingredients:String;
  Procedure:String;
  CountIngredients:Int8Array[1];
  filepath: string;
  webviewPath?: string;
}

export interface InformationCardDefault {
  id:String;
  Name:String;
  Portions:String;
  Ingredients:String;
  Procedure:String;
  webviewPath?: string;
}