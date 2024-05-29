import { Injectable } from '@angular/core';
import { InformationCard, InformationCardDefault } from './interfaces.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  SaveInformation?:InformationCardDefault
  SaveInformationMyRecipes?:InformationCard

  EasyAccompaniments:number[]=[1,2,7,10,12,15,18]
  PrimaryAccompaniments:number[]=[11,12,13,14,17,18,20]
  ThirdAccompaniments:number[]=[0,1,5,6,17,19]
//=["","","","","","",""]
  EasyMel:number[]=[0,1,2,4,8,9,13,14]
  PrimaryMel:number[]=[10,11,12,14,15]//horno
  ThirdMel:number[]=[4,6,7,8,13,16,17]//SARETEN
  
  EasyDrink:number[]=[2,4,5,6,9,14,15]
  PrimaryDrink:number[]=[10,11,13,14,12]
  ThirdDrink:number[]=[6,7,15,16,17,18,19]

  EasyDessert:number[]=[0,5,8,12,13,14,15]
  PrimaryDessert:number[]=[0,1,9,11,16,17]
  ThirdDessert:number[]=[7,8,10,12,13,14,15]



  Accompaniments=[{//PASTA
    id:"A:1",
    Name:"Sopa de Spaghetti Blanco",
    Portions:"+5 Personas",
    Ingredients:"*Spaghetti\n\n*Adobera\n\n*1 o 2 Chiles poblanos (azados y rebanados)\n\n*2 Dientes de ajo (Picados)"+
    "*1 Knorr suiza o similar\n\n*1 Taza de leche\n\n*1 Mantequilla o Margarina\n\n*1/4 de Crema",
    Procedure:"1:Se coce el Spaghetti con poca sal\n\n2:Se muele la leche con el Knorr suiza\n\n3:En una cacerola se pone a derretir la mantequilla y se frien los ajos, cuando esten dorados se agregan los chiles ya rebanados"+
    "\n\n4:Se le agrega la leche ya que hierva un poco, se le agrega el Spaghetti (previamente se lava el Spaghetti con solo agua)\n\n"+
    "5:Ya que seque la leche se le apaga y ya que enfrie un pocose le agrega la crema y la adobera en cuadritos",
    webviewPath: "../../../assets/ImgRecipes/EspaguetiBlanco.png"
  },{//FACIL PASTA
    id:"A:2",
    Name:"Sopa de Spaghetti Rojo",
    Portions:"+5 Personas",
    Ingredients:"*Spaghetti\n\n*2 Jitomates\n\n*1 Knorr suiza o similar\n\n*1/4 de Crema\n\n*1 Cebolla"+
    "\n\n*1 Ajo\n\n*1 Mantequilla o Margarina\n\n",
    Procedure:"1:Se pone a hervir agua y se pone el Spaghetti con poca sal\n\n"+
    "2:En la licuadora se muele el ajo, la ceboilla, el Knorr Suiza y los jitomates con poca agua\n\n"+
    "3:En una cacerola se pone la mantequilla a derretir\n\n"+
    "4:Ya que la mantequilla este derretida con un colador se le agrega lo que fue molido en la licuadora\n\n"+
    "5:Se le agrega la leche ya que hierva un poco, se le agrega el Spaghetti (previamente se lava el Spaghetti con solo agua)\n\n"+
    "6:Se espera a que se enfrie y se le agrega la crema (OPCIONAL)",
    webviewPath: "../../../assets/ImgRecipes/EspaguetiRojo.png"
  },{//FACIL
    id:"A:3",
    Name:"Arroz Rojo",
    Portions:"3 Personas",
    Ingredients:"*1/4 de Arroz\n\n"+
    "*2 Jitomates\n\n"+
    "*1 Diente de ajo\n\n"+
    "*1/2 Cebolla\n\n"+
    "*1 Knorr Suiza o similar\n\n"+
    "*750 ml de agua\n\n",
    Procedure:"1:Se lava de arroz\n\n"+
    "2:Se pone la casuela/olla con aceite, se espera a que este caliente para poner el arroz\n\n"+
    "3:Se espera a que el arroz dore (el arroz cambiara de color y se pondra de color dorado)\n\n"+
    "4:Se muele todos los ingredientes en la licuadora con poca agua\n\n"+
    "5:Ya que el arroz este dorado se le agrega lo molido y se deja freir un poco\n\n"+
    "6:Se le agrega 750ml de agua\n\n"+
    "7:Se deja hervir, se tapa y se baja el fuego a lo mas minimo\n\n"+
    "8:Esperar a que seque el agua y que el arroz se esponje",
    webviewPath: "../../../assets/ImgRecipes/ArrozRojo.png"
  },{
    id:"A:4",
    Name:"Arroz Blanco",
    Portions:"3 Personas",
    Ingredients:"*1/4 de Arroz\n\n"+
    "*Zanahoria y Papa picados en cuadros\n\n"+
    "*1/2 taza de leche\n\n"+
    "*1 Knorr Suiza o similar\n\n"+
    "*750 ml de agua\n\n",
    Procedure:"1:Se lava de arroz\n\n"+
    "2:Se pone la casuela/olla con aceite, se espera a que este caliente para poner el arroz\n\n"+
    "3:Antes de que el arroz se dore, se le echa la verdura\n\n"+
    "4:Se le echa la leche y el Knorr Suiza\n\n"+
    "5:Deshaces el Knorr Suiza y se le agrega el agua\n\n"+
    "6:Se deja hervir y ya cuando este hirviendo se tapa y se le baja el fuego a lo mas minimo\n\n"+
    "7:Esperar a que seque el agua y que el arroz se esponje\n\n",
    webviewPath: "../../../assets/ImgRecipes/ArrozBlanco.png"
  },{
    id:"A:5",
    Name:"Arroz a la jardinera",
    Portions:"4 Personas",
    Ingredients:"*1 taza de arroz\n\n"+
    "*1/2 cebolla\n\n"+
    "*1 zanahoria\n\n"+
    "*1 diente de ajo\n\n"+
    "*Verduras como papas,chicharos, elote o pimiento\n\n"+
    "*2/3 de taza de aceite\n\n"+
    "*3 tazas de caldo de pollo o agua\n\n"+
    "*Sal\n\n",
    Procedure:"1:Deja remojar el arroz en el agua hirviendo, durante 10 minutos.\n\n"+
    "2:Dejar escurrir en una coladera por 10 minutos.\n\n"+
    "3:Calienta el aceite y frie el arroz, revolviendo de vez en cuando para que no se dore ni se pegue.\n\n"+
    "4:Cuando esté tranparente, escurre el aceite y frie las verduras con el arroz, durante 5 minutos.\n\n"+
    "5:Agrege el caldo o agua y deja que suelte el hervor, durante el fuego y agrega la sal.\n\n"+
    "6:Cuece a fuego lenteto de 20 a 30 minutos o hasta que se consuma el agua.\n\n",
    webviewPath: "../../../assets/ImgRecipes/ArrozJardinera.png"
  },{//PASTA
    id:"A:6",
  Name:"Espagueti Carbonara",
  Portions:"+5 Personas",
  Ingredients:"*2 cucharadas de acite de oliva\n\n"+
  "*1 cebolla cortada en cubos pequeños\n\n"+
  "*150 g de tocino o pancetta, cortado en cubos pequeños\n\n"+
  "*Sal y pimienta molido grueso\n\n"+
  "*500 gr de spagueti cocido\n\n"+
  "*4 yemas batidas\n\n"+
  "*1/2 taza de crema espesa\n\n"+
  "*1 taza de queso parmesano\n\n"+
  "*3 cucharadas de perejil liso, lavado finamente y picado\n\n",
  Procedure:"1:En un sartén grande calienta el aceite de oliva, añade la cebolla y saltea cerca de dos minutos, hasta que este suave.\n\n"+
  "2:añade el tocino en trocitos y cocina hastaque se dore ligeramente, durante cuatro minutos. Retira del fuego y dejar enfriar ligeramente\n\n"+
  "3:Bate las yemas con la crema y el queso parmesano. Añade la mezcla de tocino y sazona con sal.\n\n"+
  "4:Mezcla con la pasta recién cocido. Espolvorea con el perejil fresco.\n\n",
  webviewPath: "../../../assets/ImgRecipes/SpaguetiCarbonara.png"
  },{//PASTA
    id:"A:7",
    Name:"Espagueti con atún",
    Portions:"+5 Personas",
    Ingredients:"*1/2 taza de aceite de oliva\n\n"+
    "*4 dientes de ajo finamente picado\n\n"+
    "*1 cebolla finamente picada\n\n"+
    "*1 taza de perejil finamente picado\n\n"+
    "*1 lata de 850 gramos de puré de jitomate\n\n"+
    "*Hierbas de olor al gusto (laurel, tomillo y mejorana)\n\n"+
    "*3 latas de atún\n\n"+
    "*1 taza de aceitunas\n\n"+
    "*250 gramos de espagueti cocido\n\n",
    Procedure:"1:En una cacerola caliente agregar un cuarto de taza de aceite de oliva.\n\n"+
    "2:Freir el ajo y la cebolla. Agregar el perejil y el jitomate. HIerva durante ocho minutos.\n\n"+
    "3:Agregar las hierbas de olor, sal y pimienta. Deje sazonar por unos minutos mas y agregar los ingredientes restantes, menos el espagueti.\n\n"+
    "4:Deje hervir durante cinco minutos a fuego lento.\n\n"+
    "5:Vierta sobre el espagueti escurrido.\n\n",
    webviewPath: "../../../assets/ImgRecipes/EspaguetiAtum.png"
  },{ //facil
    id:"A:8",
    Name:"Frijoles refritos",
    Portions:"4 Personas",
    Ingredients:"*1/4 de taza de aceite\n\n"+
    "*1/2 taza de cebolla finamente picada\n\n"+
    "*7 tazas de frijoles cocidos\n\n"+
    "*Sal, al gusto\n\n"+
    "*totopos para servirlos, al gusto (OPCIONAL)\n\n",
    Procedure:"1:Caliente de aceite en un sartén y frie la cebolla.\n\n"+
    "2:Vierta los frijoles y macháquelos.\n\n"+
    "3:Refriéndolos hasta que sequen.\n\n"+
    "4:Ajustar la cantidad de sal si es necesario y sirva con totopos.\n\n",
    webviewPath: "../../../assets/ImgRecipes/FrijolesRefritos.png"
  },{//SALSA
    id:"A:9",
    Name:"Salsa roja",
    Portions:"+5 Personas",
    Ingredients:"*15 chiles de árbol secos asados\n\n"+
    "*Agua caliente\n\n"+
    "*3 jitomates asados, picados sin piel ni semillas\n\n"+
    "*1/4 de cebolla asada\n\n"+
    "*1 diente de ajo asado\n\n"+
    "*Sal al gusto\n\n"+
    "*Aceite\n\n",
    Procedure:"1:Hidrata los chiles en agua caliente hasta que se ablanden.\n\n"+
    "2:Retira y lícualos un poco con el resto de los ingredientes.\n\n"+
    "3:Sazona en un poco de aceite caliente y sirve fria.\n\n",
    webviewPath: "../../../assets/ImgRecipes/SalsaRoja.png"
  },{//SALSA
    id:"A:10",
    Name:"Salsa verde",
    Portions:"+5 Personas",
    Ingredients:"*Agua, la necesaria\n\n"+
    "*250 gr de tomates pelados, asados y en mitades\n\n"+
    "*1/2  de cebolla en trozos asados\n\n"+
    "*7 chiles de árbol asados\n\n"+
    "*3 ramitas de cilantro picado\n\n"+
    "*1 cucharada de aceite\n\n"+
    "*Sal al gusto\n\n",
    Procedure:"1:Cuece en suficiente agua los tomates con la cebolla y los chiles.\n\n"+
    "2:Cuando los tomates estén suaves, retira un poco del agua y licua con ella los ingredientes anteriores junto con el cilantro.\n\n"+
    "3:Sazona y vierte en una cacerola con aceite y añade sal.\n\n"+
    "4:Sirve fría\n\n",
    webviewPath: "../../../assets/ImgRecipes/SalsaVerde.png"
  },{//FACIL
    id:"A:11",
    Name:"Guacamole",
    Portions:"2 Personas",
    Ingredients:"*4 aguacates maduros\n\n"+
    "*1 limón, solo el jugo\n\n"+
    "*Sal y pimienta al gusto\n\n",
    Procedure:"1:Corta por la mitad los aguacates y con una cuchara retirar la pulpa, machácala.\n\n"+
    "2:Agregar el jugo de limon, sal y la pimienta. Mezclar perfectamente\n\n",
    webviewPath: "../../../assets/ImgRecipes/Guacamole.png"
  },{//ENSALADA
    id:"A:12",
    Name:"Nopales",
    Portions:"+5 Personas",
    Ingredients:"*6 nopales grandes, limpios y en cuadros\n\n"+
    "*Aceite vegetal, lo necesario\n\n"+
    "*1 cucharadita de bicarbonato de sodio\n\n"+
    "*1/4 de cebolla picada\n\n"+
    "*5 jitomates sin piel ni semillas en cuadros\n\n"+
    "*Sal y pimienta al gusto\n\n"+
    "*1/4 de taza de cilantro lavado y picado\n\n",
    Procedure:"1:Asa los nopales en una sartén con poco aceite caliente y cuando comiencen a soltar liquido, agrega el bicarbonato.\n\n"+
    "2:Retira y escurre el exceso de liquido.\n\n"+
    "3:Frie con un poco más de aceite la cebolla, cuando esté transparente agrega el jitomate e integra.\n\n"+
    "4:Regresa los nopales al sartén, la sal y la pimienta. Retira del fuego y espolvorea el cilantro picado.\n\n",
    webviewPath: "../../../assets/ImgRecipes/Nopales.png"
  },{//FACIL ENSALADA
    id:"A:13",
    Name:"Ensalada de pepino y rábanos",
    Portions:"2 Personas",
    Ingredients:"*2 pepinos en rodajas\n\n"+
    "*6 a 10 rabanos en rodajas, dependiendo del tamaño\n\n"+
    "*1 limon, solo el jugo\n\n"+
    "*Sal, al gusto\n\n",
    Procedure:"1:Intercala las rodajas de pepino y rábanos.\n\n"+
    "2:Baña con el limón y la sal.\n\n",
    webviewPath: "../../../assets/ImgRecipes/EnsaladaPepinoRabanos.png"
  },{//ENSALADA
    id:"A:14",
    Name:"Ensalada de pollo y lechuga",
    Portions:"4 Personas",
    Ingredients:"*500 gramos de pechuga de pollo\n\n"+
    "*1  lechuga troceada\n\n"+
    "*3 zanahorias\n\n"+
    "*100 gramos de queso manchego\n\n"+
    "*1/2 taza de granos de elote\n\n"+
    "*Sal y pimienta\n\n"+
    "*1 chile de árbol (OPCIONAL)\n\n"+
    "*Aderezo al gusto\n\n",
    Procedure:"1:En un sartén con poco aceite agregar el pollo en trozos pequeños o en tiritas. Sazonar con sal y pimienta al gusto. Si haci lo deseas agregar el chile de arbol.\n\n"+
    "2:Cortar la zanahora en rebanadas pequeñas o utilizando un rallador rallar la zanahoria.\n\n"+
    "3:Cortar el queso en cuadros pequeños y las uvas por la mitad, retirar las semillas de la uva.\n\n"+
    "4:En un recipiente agregar la lechuga en trozos, la zanahoria, las uvas, el queso en cuadritos y los granos de elote.\n\n"+
    "5:Agregar el pollo y añadir algun aderezo si lo deseas. \n\n",
    webviewPath: "../../../assets/ImgRecipes/EnsaladaPolloLechuga.png"
  },{//ENSALADA
    id:"A:15",
    Name:"Ensalada de pollo",
    Portions:"+5 Personas",
    Ingredients:"*2 a 3 pechugas de pollo\n\n"+
    "*2 papas grandes\n\n"+
    "*3 zanahorias\n\n"+
    "*Chicharos"+
    "*6 cucharadas soperas de meyonesa\n\n"+
    "*6 cucharadas de crema\n\n"+
    "*Sal\n\n"+
    "*1/2 de cebolla"+
    "*1 diente de ajo",
    Procedure:"1:En una olla con agua, agregar las pechugas de pollo, media cebolla, sal y un diente de ajo. Cocinar por unos 15 a 20 minutos.\n\n"+
    "2:Mientras se cose la pechuga, cortar en cuadritos pequeños la zanahoria y la papa.\n\n"+
    "3:Retirar las pechugas, dejar enfriar y desmenuzar.\n\n"+
    "4:Para cocinar las verduras puedes utilizar otra olla con agua o si gustas puedes reutilizar la misma agua que se utilizo con el pollo, retirando la cebolla y el diente de ajo.\n\n"+
    "5:Cuando la papa este suave, retirar del fuego y escurrir la verdura. Dejar enfriar la verdura.\n\n"+
    "6:En un recipiente agregar la mayonesa, la crema, la verdura y el pollo desmenuzado. Mezclar bien.\n\n"+
    "7:Si gustas puedes comer la ensalada con galletas saladas, tostadas o en un emparedado. \n\n",
    webviewPath: "../../../assets/ImgRecipes/EnsaladaPolloVerdura.png"
  },{//SALSA FACIL
    id:"A:16",
    Name:"Salsa pico de gallo",
    Portions:"4 Personas",
    Ingredients:"*2 jitomates\n\n"+
    "*1/2 cebolla\n\n"+
    "*2 dientes de ajo\n\n"+
    "*2 chiles serranos \n\n"+
    "*1 ramas de cilantro\n\n"+
    "*1 cucharada de vinagre blanco\n\n"+
    "*1 cucharada de aceite de oliva\n\n"+
    "*Sal\n\n",
    Procedure:"1:Picar en pequeños cubos el jitomate, la cebolla, el chile, el ajo y el cilantro.\n\n"+
    "2:En un recipiente agregar todos los ingredintes y mezclar bien los ingredientes.\n\n",
    webviewPath: "../../../assets/ImgRecipes/SalsaPicoGallo.png"
  },{//SALSA
    id:"A:17",
    Name:"Salsa roja con chile morita",
    Portions:"+5 Personas",
    Ingredients:"*8 tomates(Tomatillo)\n\n"+
    "*1/2 cebolla\n\n"+
    "*2 dientes de ajo\n\n"+
    "*1 chile guajillo\n\n"+
    "*3 chiles morita\n\n"+
    "*Sal y pimienta\n\n"+
    "*Pizca de oregano",
    Procedure:"1:Freir los chiles, los tomates, la cebolla y el ajo.\n\n"+
    "2:En la licuadora agregar todo lo freido, un poco de sal y pimienta.\n\n"+
    "3:Si queda muy espeso agregar un poco de agua.\n\n",
    webviewPath: "../../../assets/ImgRecipes/SalsaRojaMorita.png"
  },{//ENSALADA PASTA
    id:"A:18",
    Name:"Ensalada de pasta con calabacín, atún y limón",
    Portions:"4 Personas",
    Ingredients:"*Un paquete de pasta, de la forma de tu preferencia\n\n"+
    "*2 latas de atún en aceite\n\n"+
    "*Ralladura de la cáscara de 1 limon\n\n"+
    "*Aceite de oliva virgen\n\n"+
    "*Sal y pimienta\n\n"+
    "2 calabacines",
    Procedure:"1:En una olla con agua y sal, agregamos la pasta y dejamos al fuego por 10 minutos.\n\n"+
    "2:Cortamos las calabacines en tiras finas.\n\n"+
    "3:En un sarten calentamos un poco de aceite de oliva y doramos las rebanadas de calabacín en ambos lados\n\n"+
    "4:En un traste o cacerola agregamos la pasta, el atúm, la ralladura de limón, un poco de aceite de oliva, sal y pimienta.\n\n"+
    "5:Mezclamos bien y servimos\n\n",
    webviewPath: "../../../assets/ImgRecipes/EnsaladaPastaCalabacin.png"
  },{
    id:"A:19",
    Name:"ENSALADA DE NOPALES",
    Portions:"2 Personas",
    Ingredients:"*3 tazas de nopales cortados en cuadritos\n\n"+
    "*1 jitomate\n\n"+
    "*1/2 cebolla\n\n"+
    "*100 gramos de queso blanco fresco\n\n"+
    "*Sal y pimienta al gusto\n\n"+
    "*Cilantro fresco\n\n"+
    "*Jugo de limon\n\n"+
    "*1 cucharadita de aceite de oliva\n\n",
    Procedure:"1:Cortar la cebollla y el jitomate en cudtios pequeños. Cortar el cilantro de forma fina.\n\n"+
    "2:En una olla con agua poner los nopales con un toque de sal y cocinarlos durante 10 minutos o hasta que esten blandos. Una vez cocidos los nopales cuela y agrega en un recipiente.\n\n"+
    "3:En el recipiente agregar el jitomate cortado, la cebolla, cilantro, sal y pimienta, el jugo del limon y el aceite de oliva. Mezclar bien.\n\n"+
    "4:Al servir adornar con queso fresco.\n\n",
    webviewPath: "../../../assets/ImgRecipes/EnsaladaNopales.png"
  },{
    id:"A:20",
    Name:"Macarrones con Queso",
    Portions:"3 Personas",
    Ingredients:"*250 g de macarrones\n\n"+
    "*2 tazas de leche\n\n"+
    "*2 cucharadas de harina\n\n"+
    "*2 cucharadas de mantequilla derretida\n\n"+
    "*1 taza de queso cheddar rallado\n\n"+
    "*Sal y pimienta al gusto\n\n",
    Procedure:"1:Cocina los macarrones según las instrucciones del paquete. Escurre y reserva.\n\n"+
    "2:En una cacerola añadir la harina y la mantequilla, removiendo constantemente durante 1 a 2 minutos.\n\n"+
    "3:Añade la leche poco a poco, removiendo constantemente hasta que la mezcla espese.\n\n"+
    "4:Añade el queso cheddar rallado y remueve hasta que se derrita.\n\n"+
    "5:Añade los macarrones cocidos a la salsa de queso y mezcla bien.\n\n"+
    "6:Agrege la sal y la pimienta, al gusto y sirve caliente.\n\n",
    webviewPath: "../../../assets/ImgRecipes/MacarronesQueso.png"
  },{
    id:"A:21",
    Name:"Ensalada Mediterránea",
    Portions:"4 Personas",
    Ingredients:"*2 tazas de lechuga mixta (puede ser romana, iceberg, espinaca, rúcula, etc.)\n\n"+
    "*1 pepino, cortado en rodajas finas\n\n"+
    "*1 jitomate grande, cortado en cubos\n\n"+
    "*1/2 cebolla morada, cortada en rodajas finas\n\n"+
    "*1/2 taza de aceitunas negras o verdes, deshuesadas y cortadas a la mitad\n\n"+
    "*1/2 taza queso panela o el queso fresco, desmenuzado\n\n"+
    "*1 pimiento rojo, cortado en tiras\n\n"+
    "*1 aguacate, cortado en cubos (opcional)\n\n"+
    "*1/4 taza de aceite de oliva virgen extra\n\n"+
    "*2 cucharadas de vinagre balsámico o jugo de limón\n\n"+
    "*Sal y pimienta al gusto\n\n"+
    "*1 cucharadita de orégano seco\n\n",
    Procedure:"1:Lava bien todas las verduras.\n\n"+
    "2:Corta la lechuga en trozos del tamaño de un bocado si es necesario. Si usas aguacate, añádelo a la ensalada.\n\n"+
    "3:Para el aderezo utilizar un pequeño tazón aparte, mezcla el aceite de oliva, el vinagre balsámico o jugo de limón, el orégano, la sal y la pimienta.\n\n"+
    "4:Bate bien hasta que el aderezo esté bien combinado.\n\n"+
    "5:Vierte el aderezo sobre la ensalada y mezcla suavemente para que todos los ingredientes se impregnen del aderezo.\n\n"+
    "6:Sirve inmediatamente.\n\n",
    webviewPath: "../../../assets/ImgRecipes/EnsaladaMediterraneo.png"
  }]

  mel=[{//FACIL
    id:"M:1",
    Name:"Morisqueta",
    Portions:"4 Personas",
    Ingredients:"*1/2 Kilo de Arroz\n\n"+
    "*2 Jitomates\n\n"+
    "*1 Cebolla\n\n"+
    "*Queso fresco o Adobera\n\n"+
    "*Frijoles\n\n"+
    "*Crema\n\n"+
    "*1 Litro y medio de agua\n\n"+
    "*2 Chiles guajillos \n\n"+
    "*1/4 de diente de ajo\n\n",
    Procedure:"ARROZ\n\n"+
    "1:Se lava el arroz.\n\n"+
    "2:Se le agrega el agua en una olla y se espera a que este caliente el agua.\n\n"+
    "3:Se pone media cebolla y un poco de sal.\n\n"+
    "4:Ya que hierva el agua se pone el arroz.\n\n"+
    "5:Se tapa y se pone el fuego en lo mas minimo y se deja cocer hasta que se consuma el agua.\n\n"+
    "6:Esperar a que seque el agua y que el arroz se esponje.\n\n"+
    "CHILE\n\n"+
    "1:En una olla se le agrega agua y se pone a coser el chile guajillo y los jitomates.\n\n"+
    "2:Ya que hierva, se muele en una licuadora el ajo, cebolla, los jitomates y el chile.\n\n"+
    "3:Se pone poco aceite en una cacerola y se frien unas rodajas de cebolla.\n\n"+
    "4:En la cacerola se le echa y se cuela lo que se molio anteriormente en la licuadora. \n\n"+
    "5:Se espera a que hierva.\n\n"+
    "6:Ya que hierva se le apaga y se le agrega el queso y un poco de sal.\n\n",
    webviewPath: "../../../assets/ImgRecipes/Morisqueta.png"
  },{//FACIL
    id:"M:2",
    Name:"Alambres",
    Portions:"4 Personas",
    Ingredients:"*3/4 de Carne de diezmillo\n\n"+
    "*1/4 de Queso asadero (Queso Oaxaca)\n\n"+
    "*Cebolla\n\n"+
    "*2 Chiles de pimiento morron (OPCIONAL)\n\n"+
    "*Sal\n\n",
    Procedure:"1:Se corta la carne en cachitos\n\n"+
    "2:Se frie la carne con sal\n\n"+
    "3:Se cortan los chiles y la cebolla en rajas y se echan a la carne\n\n"+
    "4:Cuando la carne este cocina se le apaga al fuego\n\n"+
    "5:Se distribuye el queso en toda la carne y se tapa\n\n"+
    "6:Se espera a que el queso se derrita",
    webviewPath: "../../../assets/ImgRecipes/Alambres.png"
  },{//FACIL
    id:"M:3",
    Name:"CHILAQUIILES",
    Portions:"+5 Personas",
    Ingredients:"*Totopos\n\n"+
    "*Jitomate (para salsa roja) o Tomate (para Salsa verde)\n\n"+
    "*Cebolla\n\n"+
    "*Chile peron o chile Cerrano\n\n"+
    "*Cilandro\n\n"+
    "*1 Knorr Suiza o similar\n\n"+
    "*1 Diente de ajo\n\n",
    Procedure:"1:Se pone a coser el chile con el Jimomate o tomate,dependiendo de la salsa que se elija\n\n"+
    "2:Ya que hierva se muele en la licuadora\n\n"+
    "3:En una cacerola con poco aceite se frie el chile y se le agrega los totopos\n\n"+
    "4:Se le agrega 750ml de  agua (Los totopos absorben mucha agua)\n\n"+
    "5:Se tapa y se mueve constantemente para que no se pegen los totopos \n\n"+
    "6:Se espera a que seque (al gusto)",
    webviewPath: "../../../assets/ImgRecipes/Chilaquiles.png"
  },{
    id:"M:4",
    Name:"POLLO EN CHIPOTLE",
    Portions:"+5 Personas",
    Ingredients:"*Pollo\n\n"+
    "*1 Lata de chipotle\n\n"+
    "*1  Diente de ajo\n\n"+
    "*Cebolla\n\n"+
    "*Limon\n\n"+
    "*Pimienta\n\n"+
    "*2 Hojas de laurel\n\n"+
    "*Mantequilla o Margarina\n\n",
    Procedure:"1:Se pone a derretir la mantequilla en una cacerola (entre mas mantequilla mas jugo sale)\n\n"+
    "2:Se le agrega el pollo y las hojas de laurel, se espolvorea sal y pimienta, se revuelve y se tapa\n\n"+
    "3:En un molcajete se apachurra la cebolla y el ajo, despues el chipotle y el limon (Si no se cuenta con un molcajete, agregar todo en la licuadora y moler)\n\n"+
    "4:Al pollo se le agrega lo molido\n\n"+
    "5:Se revuelve y se tapa, se tiene que mover constantemente hasta que el pollo este cocido\n\n",
    webviewPath: "../../../assets/ImgRecipes/PolloChipotle.png"
  },{//FACIL SARTEN
    id:"M:5",
    Name:"CROQUETAS DE ATUM",
    Portions:"4 Personas",
    Ingredients:"*6 a 10 papas\n\n"+
    "*2 latas de atum\n\n"+
    "*1 huevo\n\n"+
    "*Pan molido\n\n",
    Procedure:"1:Se pone a cocer la papa hasta que este muy suave\n\n"+
    "2:Se pelan y se machucan por completo\n\n"+
    "3:Se le agrega sal y se revuelve\n\n"+
    "4:Se hace una bola con la papa con un poco de atum adentro\n\n"+
    "5:En una traste se vierte el huevo y se remoja la bolita de papa\n\n"+
    "6:La bolita de papa se empaniza con el pan molido y se frie\n\n",
    webviewPath: "../../../assets/ImgRecipes/CroquetasAtum.png"
  },{
    id:"M:6",
    Name:"CHICHARRON EN SALSA ROJA",
    Portions:"+5 Personas",
    Ingredients:"*Chicharron\n\n"+
    "*3 a 5 Jitomates\n\n"+
    "*Chiles\n\n"+
    "*Cilandro\n\n"+
    "*Cebolla\n\n"+
    "*Dientes de ajo\n\n"+
    "*Chorizo\n\n"+
    "*1 Knorr Suiza o similar\n\n",
    Procedure:"1:Se coce el Jitomate y el chile\n\n"+
    "2:Se muele en una licuadora el jitomate, chile,cebolla,cilandro,ajo y el Knorr Suiza\n\n"+
    "3:Se frie el chorizo con poco aceite\n\n"+
    "4:Se le agrega el chicharron para que se frie con el aceite hasta que cambie un poco de color\n\n"+
    "5:Se le echa lo molido al chicharron\n\n"+
    "6:Se le echa agua al gusto, el chicharron absorbe algo de agua\n\n",
    webviewPath: "../../../assets/ImgRecipes/ChicharronSalsa.png"
  },{//SARTEN
    id:"M:7",
    Name:"Langostinos en mantequilla",
    Portions:"+5 Personas",
    Ingredients:"*6 Cebollines, finamente picados\n\n"+
    "*16 piezas de Langostinos o Camarones grandes\n\n"+
    "*6 Cucharadas de mantequilla\n\n"+
    "*4 Cucharadas de ajo molido\n\n"+
    "*60 ml de vino blanco seco\n\n"+
    "*2 Cucharadas de jugo de limon\n\n"+
    "*8 Ramitas grandes de perejil, finamente picados\n\n"+
    "*Sal y pimienta negra al gusto\n\n"+
    "*Rodajas de limon y ramitas de perejil para adornar\n\n",
    Procedure:"1:Descarscarar los langostinos o los camarones y desechar las cáscaras.\n\n"+
    "2:Para sacar la vena utilizar un cuchillo y hacerle un corte pequeño a lo largo del dorso y levantar la vena negra con la punta del cuchillo.\n\n"+
    "3:Calentar la mantequilla en un sarten grande a fuego medio.\n\n"+
    "4:Cuando ya se derrita la mantequilla agregar el ajo, freir y revolver 1 a 2 minutos hasta que ablande sin dorar.\n\n"+
    "5:Añadir los Langostinos o Camarones, los cebollines anteriormente picados, el vino blanco y el jugo de limon.\n\n"+
    "6:Freir hasta y revolver hasta que los langostinos o camarones se vuelvan rosados, firmes y opacos, 1 a 2 minutos por cada lado. No refreir.\n\n"+
    "7:Antes de servirlos, agregar el perejil picado y condimentar con sal y pimienta. Adornar con las rodajas y el perejil si se quiere.\n\n",
    webviewPath: "../../../assets/ImgRecipes/LagartinosMantequilla.png"
  },{//SARTEN
    id:"M:8",
    Name:"Milanesas Cordon Blue",
    Portions:"+5 Personas",
    Ingredients:"*6 milanesas de pollo o de ternera, aplanadas\n\n"+
    "*1 paquete de pan molido\n\n"+
    "*6 cucharadas de queso parmesano\n\n"+
    "*Perejil lavado y finamente picado\n\n"+
    "*2 huevos ligeramente batidos\n\n"+
    "*1/4 de taza de leche\n\n"+
    "*Aceite de maíz\n\n"+
    "*sal y pimienta\n\n",
    Procedure:"1:Mezclar el pan molico con el queso parmesano y el perejil.\n\n"+
    "2:Revuelve el huevo con la leche, salpimienta y sumerge las milanesas.\n\n"+
    "3:Empanizar las milanesas y frielas en suficiente aceite y déjarlas escurrir.\n\n"+
    "4:Sirvelas con arroz y verduras.\n\n",
    webviewPath: "../../../assets/ImgRecipes/MilanesaCordon.png"
  },{//FACIL SARTEN
    id:"M:9",
    Name:"Ejotes con huevo",
    Portions:"1 Persona",
    Ingredients:"*3/4 de kilo de ejotes picados y cocidos\n\n"+
    "*2 Cucharadas de aceite\n\n"+
    "*1 Cebolla finamente picada\n\n"+
    "*2 Huevos ligeramente batidos\n\n"+
    "*Sal y pimienta, al gusto\n\n",
    Procedure:"1:Escurra perfectamente los ejotes.\n\n"+
    "2:En una cacerola caliente el aceite y frie la cebolla hasta que tenga un tono translúcido.\n\n"+
    "3:Agregue los ejotes y vierta el huevo.\n\n"+
    "4:Cocine a fuego bajo hasta que el huevo se seque.\n\n",
    webviewPath: "../../../assets/ImgRecipes/HuevoEjotes.png"
  },{//FACIL
    id:"M:10",
    Name:"Papas con longaniza o chorizo",
    Portions:"+5 Personas",
    Ingredients:"*1 kilo de longaniza o chorizo\n\n"+
    "*2 cebollas finamente picadas\n\n"+
    "*1 kilño de papas cocidas y peladas\n\n"+
    "*Sal al gusto\n\n",
    Procedure:"1:Fría la longaniza o el chorizo hasta dorarla ligeramente.\n\n"+
    "2:Agregue la cebolla y friela por unos minutos.\n\n"+
    "3:Agregue las papas y agrege sal al gusto.\n\n"+
    "4:Deje dorar ligeramente.\n\n",
    webviewPath: "../../../assets/ImgRecipes/PapasLonganiza.png"
  },{//MICRO
    id:"M:11",
    Name:"Pollo al vino",
    Portions:"+5 Personas",
    Ingredients:"*1/2 taza de tocino picado\n\n"+
    "*1 1/2 tazas de vino tinto\n\n"+
    "*1/4 de taza de brandy\n\n"+
    "*4 cucharadas de pasta de jitomate\n\n"+
    "*Oregano, al gusto\n\n"+
    "*2 hojas de laurel\n\n"+
    "*Tomillo al gusto\n\n"+
    "*Sal y pimienta, al gusto\n\n"+
    "*2 dientes de ajo finamente picado\n\n"+
    "*24 cebollitas de cambray sin rabo\n\n"+
    "*2 tazas de champiñones medianos\n\n"+
    "*6 piernas con muslo\n\n",
    Procedure:"1:Coloque el tocino en un recipiente hondo para microondas.\n\n"+
    "2:Cocínelo a alta potencia durante un minuto o hasta que este dorado.\n\n"+
    "3:Saque el tocino y apartelo.\n\n"+
    "4:Sobre la grasa que quedo agregueel vino, la pasta de jitomate, el oregano, laurel, tomillo, sal, pimienta, ajo, cebollitas y champiñones.\n\n"+
    "5:Tape y cocine a temperatura mediana durante 10 minutos revolviendo a la mitad de la cocción.\n\n"+
    "6:Agregue el tocino, las piezas de pollo.\n\n"+
    "7:Procure que las piezas queden bien cubiertas con la salsa.\n\n"+
    "8:Tape y cocine a durante 10 minutos o hasta que el pollo este tierno.\n\n",
    webviewPath: "../../../assets/ImgRecipes/PolloVino.png"
  },{//MICRO
    id:"M:12",
    Name:"Albondigon",
    Portions:"+5 Personas",
    Ingredients:"*1 kilo de carne de res, molida\n\n"+
    "*1 cebolla finamente picada\n\n"+
    "*1 taza de pimiento morrón verde\n\n"+
    "*2 huevos ligeramente batidos\n\n"+
    "*1/2 bolillo remojado en una taza de leche\n\n"+
    "*3 cucharadas de perejil finamente picados\n\n"+
    "*Sal y pimienta, al gusto\n\n"+
    "*1 taza de champiñones rebanados\n\n"+
    "*1 cucharadita de royal\n\n"+
    "*1/2 taza de jamón cocido, finamente picado"+
    "*4 cucharadas de salsa catsup\n\n"+
    "*4 tiras de tocino\n\n",
    Procedure:"1:Revuelva todos los ingredientes excepto la salsa catsup y el tocino.\n\n"+
    "2:Colóquelos sobre un molde para panqué especial para microondas ligeramente en mantequillado.\n\n"+
    "3:Unte la salsa catsup y coloque las rebanadas de tocino.\n\n"+
    "4:Cocínelo tapando durante 5 minutos.\n\n"+
    "5:Rote el molde  y cocínelo dutante 5 minutos más.\n\n"+
    "6:Destápelo y cocínelo durante 8 minutos.\n\n"+
    "7:Deje reposar 5 minutos y sírvalo.\n\n",
    webviewPath: "../../../assets/ImgRecipes/Albondigon.png"
  },{//Horno
    id:"M:13",
    Name:"Papas rojas gratinadas",
    Portions:"+5 Personas",
    Ingredients:"*5 Papas\n\n"+
    "*20 gramos de harina\n\n"+
    "*60 gramos de mantequilla o margarina\n\n"+
    "*Sal\n\n"+
    "*Pimienta\n\n"+
    "*Paprika\n\n"+
    "*300 ml de leche\n\n"+
    "*Un ramito de tomillo para adornar\n\n",
    Procedure:"1:Precalentar el horno a 180°C. Lavar bien las papas y cortar en rebanadas de 6 mm con un cuchillo. \n\n"+
    "2:Colocar las rebanadas sobre papel de cera y espolvorear con harina. Revolver suavemente para cubrirlas.\n\n"+
    "3:Untar con una cucharada de mantequilla en un molde redondo de aproximadamente de 22 cm.\n\n"+
    "4:Con 1/3 de las papas crear una capa en el molde espolvoreando sal, pimienta y prapika al gusto. Salpicar con 1 cucharada de mantequilla.\n\n"+
    "5:Hacer otras 2 capas iguales.\n\n"+
    "6:Calentar la leche en una olla a fuego medio hasta que este caliente pero sin que llegue a hervir.\n\n"+
    "7:Vertir sobre las papas. Espolvoreando sal, pimienta y prapika al gusto. Cubrir con una tapa o con papel aluminio.\n\n"+
    "8:Hornear 35 minutos. Destapar y hornear 20 minutos más o hasta que las papas estén tiernas y no demasiado hechas.\n\n"+
    "9:Adornar con el ramito de tomillo si se quiere. Servir\n\n",
    webviewPath: "../../../assets/ImgRecipes/PapasGratinadas.png"
  },{//FACIL SARTEN
    id:"M:14",
    Name:"Papas suizas",
    Portions:"4 Personas",
    Ingredients:"*4 Papas grandes\n\n"+
    "*60 gramos de mantequilla o margarina\n\n"+
    "*Sal y pimienta\n\n"+
    "*Trozos de jitomates y ramitos de romero para adornar (OPCIONAL)\n\n",
    Procedure:"1:Lavar muy bien las papas. En una olla con agua a fuego alto agregar las papas y cocer hasta que las papas esten suaves. Atravezar las papas con un cuchillo o con tenedor para comprobar que en el interior este blando.\n\n"+
    "2:Dejar que se enfrien y pelar las papas. Utilizando un rallador rallar las papas.\n\n"+
    "3:Calentar la mantequilla en un sartén a fuego medio hasta que se derrita.\n\n"+
    "4:Extender la papa rallada uniformemente en el salten (No revolver ni dar vuelta) Agregar sal y pimienta al gusto. Cocinar 10 a 12 minutos hasta que se dore.\n\n"+
    "5:Apagar el fuego. Con un recipiento o un plato invertir la cara de la papa sobre el sarten. Dejar dorar y servir.\n\n",
    webviewPath: "../../../assets/ImgRecipes/PapasSuizas.png"
  },{//MICROONDAS FACIL
    id:"M:15",
    Name:"Patatas gajo",
    Portions:"3 Personas",
    Ingredients:"*500 gramos de papas\n\n"+
    "*1 cucharada de ajo en polvo\n\n"+
    "*1 cucharada de cebolla en polvo\n\n"+
    "*1 cucharada de hierbas provenzales (Hierbas finas)\n\n"+
    "*1 cucharada de paprika\n\n"+
    "*1 pizca de pimienta negra recién molida\n\n"+
    "*1 chorro de aceite de oliva\n\n"+
    "*1 pizca de sal\n\n",
    Procedure:"1:Pelar las papas con un pelador de verduras.\n\n"+
    "2:Con un cuchillo de cocina cortar cada papa a la mitad y cada mitad partirla por la mitad.\n\n"+
    "Si tienes papas muy grandes, seguir cortando por la mitad hasta que obtengas el tamaño mas pequeño o un tamaño deseado.\n\n"+
    "3:En un recipiente  añadir las papas y mezclar con las hierbas, el ajo en polvo, la cebolla en polvo, la paprika, una pizca de pimienta.\n\n"+
    "4:Poner las papas ya mezcladas con las especias en un recipiente para microondas y añadir un chorrito pequeño de aceite de oliva y mezclar\n\n"+
    "5:Tapar el recipiente con un papel film transparente y poner a calentar en el microondas por 5 minutos\n\n"+
    "6:Al terminar los 5 minutos, retirar con mucho cuidado el papel procurando de no qumarse con el vapor que salga, ya que estara muy caliente.\n\n"+
    "7:Revolver con una cuchara las papas y volver a cubrir con  el papel film. volver a cocinar por 5 minutos o hasta que las papas este suaves.\n\n"+
    "8:Retirar con mucho cuidado el papel y añadir un poco de sal, al gusto.\n\n",
    webviewPath: "../../../assets/ImgRecipes/PapasGajo.png"
  },{//HORNO
    id:"M:16",
    Name:"Pollo asado al horno con patatas",
    Portions:"4 Personas",
    Ingredients:"*4 patatas medianas\n\n"+
    "*30 ml de aceite de oliva virgen\n\n"+
    "*Sal\n\n"+
    "*Pimienta negra molida\n\n"+
    "*Media cebolla\n\n"+
    "*6 dientes de ajo\n\n"+
    "*1,2 kg de pollo\n\n"+
    "*200 ml de vino blanco\n\n"+
    "*1 rama de romero\n\n",
    Procedure:"1:Lavamos las patatas, las pelamos y cortamos en rodajas.\n\n"+
    "2:En una bandeja para horno engrasada y agregamos los 30 ml de aceite de oliva virgen.\n\n"+
    "3:Ponemos las patatas, agregamos sal y pimienta. Repartimos sobre ellas medias rodajas de cebolla y 6 dientes de ajo cortados por la mitad.\n\n"+
    "4:En un recipiente con el pollo le agregamos sal y pimienta.\n\n"+
    "5:Ponemos las piezas de pollo encima de las patatas con la cebolla y el ajo.\n\n"+
    "6:Sobre el pollo vertemos 200ml de vino blanco y añadimos una rama de romero para aromatizar el asado.\n\n"+
    "7:Precalentamos el horno a 200 °C y horneamos durante 45 minutos.\n\n"+
    "8:Despues de los 45 minutos le damos la vuelta a las piezas de pollo para que quede tostada por todas partes.\n\n"+
    "9:Devolvemos el pollo al horno y horneamos por otros 45 minutos y servimos.\n\n",
    webviewPath: "../../../assets/ImgRecipes/PolloPatatas.png"
  },{//SARTEN
    id:"M:17",
    Name:"Huevos a la mexicana",
    Portions:"2 Personas",
    Ingredients:"*5 huevos\n\n"+
    "*2 jitomates rojos cortados en cuadritos\n\n"+
    "*1/4 de cebolla picada\n\n"+
    "*1 chile serrano sin semillas cortado en cuadritos\n\n"+
    "*Aceite\n\n"+
    "*Sal al gusto\n\n",
    Procedure:"1:Calentar el aceite en un sartén y fríe la cebolla, el jitomate y el chile. Agregar un poco de sal.\n\n"+
    "2:Agregar los huevos batidos y cocinar durante 5 minutos o hasta que esten cocidos. Mover contantemente para que no se peguen.\n\n",
    webviewPath: "../../../assets/ImgRecipes/HuevosMexicana.png"
  },{//SARTEN
    id:"M:18",
    Name:"Salteado de Verduras",
    Portions:"3 Personas",
    Ingredients:"*1 pimiento rojo, cortado en tiras\n\n"+
    "*1 pimiento verde, cortado en tiras\n\n"+
    "*1 pimiento amarillo, cortado en tiras\n\n"+
    "*1 cebolla mediana, cortada en juliana\n\n"+
    "*2 zanahorias, cortadas en rodajas finas\n\n"+
    "*1 calabacín, cortado en medias lunas\n\n"+
    "*1 taza de brócoli, en floretes pequeños\n\n"+
    "*2 dientes de ajo, picados\n\n"+
    "*2 cucharadas de aceite de oliva\n\n"+
    "*2 cucharadas de salsa de soja\n\n"+
    "*Sal y pimienta al gusto\n\n"+
    "*Jugo de limón (OPCIONAL)\n\n"+
    "*Salsa de soja (OPCIONAL)\n\n",
    Procedure:"1:Lava muy bien y corta todas las verduras\n\n"+
    "2:Calienta una sartén grande a fuego medio-alto y añade el aceite de oliva.\n\n"+
    "3:Agrega el ajo picado y fríe durante 1 minuto.\n\n"+
    "4:Añade la cebolla y las zanahorias, y saltea durante unos 3-4 minutos, o hasta que comiencen a ablandarse.\n\n"+
    "5:Incorpora los pimientos, el brócoli y calabacín, y cocina durante 5-7 minutos, removiendo ocasionalmente.\n\n"+
    "6:Vierte la salsa de soja sobre las verduras y mezcla bien. Añade sal y pimienta al gusto, pero ten en cuenta que la salsa de soja ya es salada.\n\n"+
    "7:Si lo deseas, añade el jugo de medio limón para darle un toque fresco.\n\n"+
    "8:\n\n"+
    "9:\n\n"+
    "10:\n\n",
    webviewPath: "../../../assets/ImgRecipes/SalteadoVerdura.png"
  }]

  beverege=[{
    id:"B:1",
    Name:"Cafe a la vienesa",
    Portions:"4 Personas",
    Ingredients:"*240 g de Crema doble (Crema para batir).\n\n"+
    "*1 Cucharada de azúcar glas.\n\n"+
    "*1 Barra de chocolate amargo o semidulce.\n\n"+
    "*750 ml de cafe expresso o cafe recien hecho.\n\n"+
    "*60 ml de licor de cafe.\n\n",
    Procedure:"1:En un recipiente colocar la crema y batir con una batidora electronica hasta que empieze a espezar, añadir 1 cucharada de azúcar glas.\n\n"+
    "2:Para hacer los adornos del chocolate, con un raspador (Pelapapas) pasar sobre el chocolate hasta tener varias tiras. Romper en pedazos el resto de chocolates.\n\n"+
    "3:Colocar 80 g de crema en una olla y poner a fuego lento. Añadir pedazos de chocolates y retirar hasta que el chocolate se derrita.\n\n"+
    "4:Revolver hasta que esté sin grumos.\n\n"+
    "5:Añadir el cafe caliente a la mezcla del chocolate.\n\n"+
    "6:Añadir el licor de cafe\n\n"+
    "7:Verter en las tazas y colocar la crema batida encima y adornar con las raspaduras de chocolate\n\n",
    webviewPath: "../../../assets/ImgRecipes/CafeVienesa.png"
  },{
    id:"B:2",
    Name:"Jugo de mandarina y Jengibre",
    Portions:"2 Personas",
    Ingredients:"*6 Mandarinas\n\n"+
    "*1 cm de raiz de jengibre\n\n"+
    "*1/4 de papaya chica\n\n",
    Procedure:"1:Pelas las mandarinas y cortar el jengibre.\n\n"+
    "2:En la licuadora añadir todos los ingredientes.\n\n"+
    "*El jugo de mandarina es un buen protector para la salud\n\n",
    webviewPath: "../../../assets/ImgRecipes/JugoMandarina.png"
  },{//FACIL 
    id:"B:3",
  Name:"Jugo Con Vitamina C",
  Portions:"1 Persona",
  Ingredients:"*1/2 taza de Jitomates picados \n\n"+
  "*1/2 taza de jugo de naranja\n\n"+
  "*1 cucharadita de jugo de limón\n\n"+
  "*1 cucharadita de miel\n\n",
  Procedure:"1:Lavar bien los jitomates\n\n"+
  "2:Agregar todos los ingredientes al vaso de la licuadora hasta que tenga una preparación homogénea.\n\n"+
  "*Un impulso para el sistema inmunitario corporal rico en vitamina C.\n\n",
  webviewPath: "../../../assets/ImgRecipes/JugoVitaminaC.png"
  },{
    id:"B:4",
    Name:"Licuado de Fresa-Kiwi",
    Portions:"1 persona",
    Ingredients:"*1 Kiwi maduro y pelado\n\n"+
    "*1 taza de fresas en rodajas\n\n"+
    "*1 taza de leche soya o agua\n\n",
    Procedure:"1:Licuar todos los ingredientes y disfrutar.\n\n",
    webviewPath: "../../../assets/ImgRecipes/LicuadoFresaKiwi.png"
  },{//FACIL
    id:"B:5",
    Name:"Jugo de fresa y naranja",
    Portions:"+5 Personas",
    Ingredients:"*1/2 kilo de fresas\n\n"+
    "*1 litro de jugo de naranja\n\n",
    Procedure:"1:Licue las fresas con el jugo de naranja.\n\n",
    webviewPath: "../../../assets/ImgRecipes/JugoFresaNaranja.png"
  },{//FACIL
    id:"B:6",
    Name:"Batido de fresa",
    Portions:"4 Personas",
    Ingredients:"*500 gramos de fresa\n\n"+
    "*400 ml de leche\n\n"+
    "*30 gramos de azúcar\n\n",
    Procedure:"1:Lavar muy bien las fresas, cortar las hojas y retirar el tallo.\n\n"+
    "2:Agregar la fresa a la licuadora, añadir el azucar y la leche.\n\n"+
    "3:Batir hasta que quede completamente liquida.\n\n",
    webviewPath: "../../../assets/ImgRecipes/BatidoFresa.png"
  },{//FACIL FRIO
    id:"B:7",
    Name:"Granizado de sandía",
    Portions:"2 Personas",
    Ingredients:"*250 gramos de sandia\n\n"+
    "*150 gramos de hielo en cubos\n\n"+
    "*Azucar (OPCIONAL)\n\n"+
    "*Jugo de limón\n\n"+
    "*Hojas de menta (OPCIONAL)\n\n",
    Procedure:"1:Cortar la sandia en cubos, retirando las semillas y la cascara de la sandia.\n\n"+
    "2:Dejar reposar la sandia en el congelador hasta que este congelada. \n\n"+
    "3:Cuando la sandia se encuentre congelada, agregarla en la licuadora la sandia, el hielo, el jugo de limón y el azúcar, hasta tener una textura granizado.\n\n"+
    "4:Servirlo en un vaso y decorar con las hojas de menta.\n\n",
    webviewPath: "../../../assets/ImgRecipes/GranizadoSandia.png"
  },{//FRIO
    id:"B:8",
    Name:"Batido de moras y durazno",
    Portions:"1 Persona",
    Ingredients:"*9 moras\n\n"+
    "*1 durazno\n\n"+
    "*50 ml de agua\n\n"+
    "*1 cubo de hielo\n\n"+
    "*1 hoja de menta (OPCIONAL)\n\n",
    Procedure:"1:lavar muy bien la fruta.\n\n"+
    "2:En la licuadora mezclar las moras y el durazno, colar si no se quiere sentir las semillas.\n\n"+
    "3:Batir la mezcla de las frutas con el agua y el hielo. Servir en un vaso\n\n",
    webviewPath: "../../../assets/ImgRecipes/BatidoMoraDurazno.png"
  },{
    id:"B:9",
    Name:"Jugo de jitomate y apio",
    Portions:"1 Persona",
    Ingredients:"*6 jitomates\n\n"+
    "*2 apios\n\n",
    Procedure:"1:Lavar perfectamente los ingredientes.\n\n"+
    "2:icuar los ingredientes sin las hojas del apio.\n\n",
    webviewPath: "../../../assets/ImgRecipes/BatidoJitomateApio.png"
  },{//FACIL
    id:"B:10",
    Name:"Jugo de jitomate",
    Portions:"1 Persona",
    Ingredients:"*2 jitomates\n\n"+
    "*1 taza de agua\n\n"+
    "*1 limón\n\n",
    Procedure:"1:Lavar muy bien lo jitomates y cortarlos en cuatro partes.\n\n"+
    "2:Licuar con un poco de agua. Se podria agregar un poco mas, dependiendo de la consistencia que se desea obtener.\n\n"+
    "3:Añadir el jugo de limon para darle sabor.\n\n",
    webviewPath: "../../../assets/ImgRecipes/JugoJitomate.png"
  },{//CALIENTE
    id:"B:11",
    Name:"Atole de Mazapán",
    Portions:"+5 Personas",
    Ingredients:"*4 tazas de leche\n\n"+
    "*1 taza de agua\n\n"+
    "*1/2 taza de leche evaporada\n\n"+
    "*1/2 taza de leche condensada\n\n"+
    "*5 mazapanes\n\n"+
    "*5 cucharadas de fécula de maíz ( Maizena )\n\n"+
    "*1 raja de canela\n\n",
    Procedure:"1:En la licuadora agregar la leche, el agua, la leche evaporada, leche condensada, los mazapanes y la fécula de maíz.\n\n"+
    "2:Licuar hasta conseguir una mezcla homogénea.\n\n"+
    "3:Colocar la mezcla en una olla y calienta a fuego medio.\n\n"+
    "4:Agrega la canela y cocina hasta que espese.\n\n"+
    "5:Servir el atole\n\n",
    webviewPath: "../../../assets/ImgRecipes/AtoleMazapan.png"
  },{//CALIENTE
    id:"B:12",
    Name:"Atole de Oreo",
    Portions:"+5 Personas",
    Ingredients:"*1/2 taza de agua\n\n"+
    "*6 tazas de leche\n\n"+
    "*25 galletas de oreo\n\n"+
    "*2 cucharadas de fécula de maíz (Maizena)\n\n"+
    "*1 vara de canela\n\n",
    Procedure:"1:Disolver la fécula de maiz en media taza de agua\n\n"+
    "2:Calentar la leche con la canela hasta que comience a hervir.\n\n"+
    "3:En la licuadora agregar las galletas hasta que estren trituradas. Agregar 2 tazas de leche caliente.\n\n"+
    "4:En una olla agregar la fécula y la mezcla de las galletas.\n\n"+
    "5:Calienta el atole moviendo constantemente para evitar que se pegue en el fondo.\n\n"+
    "6:Servir.\n\n",
    webviewPath: "../../../assets/ImgRecipes/AtoleOreo.png"
  },{//CALIENTE
    id:"B:13",
    Name:"Té de canela",
    Portions:"+5 Personas",
    Ingredients:"*1 litro de agua\n\n"+
    "*3 rollitos de canela\n\n"+
    "*\Azucar (OPCIONAL)\n\n",
    Procedure:"1:En una olla agregar un litro de agua y poner al fuego\n\n"+
    "2:Cuando el agua este apunto de hervir agregar los 3 rollitos de canela y dejar por 4 minutos. \n\n"+
    "3:Dejar reposar por 5 minutos.\n\n"+
    "4:Servir y agregar el azucar si lo deseas.\n\n",
    webviewPath: "../../../assets/ImgRecipes/TeCanela.png"
  },{//CALIENTE
    id:"B:14",
    Name:"Blackberry Hot Chocolate",
    Portions:"2 Personas",
    Ingredients:"*16 moras\n\n"+
    "*2 cucharadas de azucar\n\n"+
    "*1/2 cucharada de vainilla\n\n"+
    "*3 tazas de leche\n\n"+
    "*1 barra Chocolate amargo\n\n"+
    "*2 cucharadas de agua\n\n"+
    "*Crema batida (OPCIONAL)\n\n"+
    "*Malvadisco (OPCIONAL)\n\n",
    Procedure:"1:Para preparar el coulis de moras, en un sarten cocine las moras, la azucar y las 2 cucharadas de agua en fuego moderado, hasta que las moras esten blandas.\n\n"+
    "2:En un recipiente empuje y machacar el contenido del sarten a traves de un colador o si lo prefieres puedes utilizar la licuadora y depositar el contenido utilizando un colador. Desechar lo que quede en el colador.\n\n"+
    "3:Caliente la leche hasya que esté hirviendo. Mientras se calienta la leche pica el chocolate y colocalos en la licuadora.\n\n"+
    "4:En la licuadora con el chocolate agrege la vainilla y la leche.\n\n"+
    "5:Si al finalizar deseas adornar con crema batida reserva 1 cucharada del coulis de mora y vierta el resto en la licuadora. Si no deseas adornar vierta todo el coulis de mora.\n\n"+
    "6:Mezcla hasta que el chocolate se derrita y la bebida este espumosa.\n\n"+
    "7:Vierta en tazas y adornar , si lo deseas, con crema batida, malvavisco, una cucharada del coulis y 1 mora por taza.\n\n",
    webviewPath: "../../../assets/ImgRecipes/Blackberry.png"
  },{//CALIENTE FACIL
    id:"B:15",
    Name:"Chocolate caliente rosa",
    Portions:"2 Personas",
    Ingredients:"*2 tazas de leche\n\n"+
    "*1/2 cucharada de vainilla\n\n"+
    "*1/2 barra de chocolate blanco\n\n"+
    "*3 a 5 gotas, dependiendo de la tonalidad deseada, de colorante rosa\n\n"+
    "*Crema batida (OPCIONAL)\n\n"+
    "*Chispas de chocolates de colores(OPCIONAL)\n\n",
    Procedure:"1:En una cacerola pequeña, hervir la leche a fuego lento.\n\n"+
    "2:Agregar la vainilla y el chocolate. Mezclar por aproximadamente 1 minuto hasta que el chocolate se derrita por completo.\n\n"+
    "3:En un vaso agregar la leche ya con el chocolate derretido. Agregar la crema batida y adornar con las chispas de chocolate,\n\n",
    webviewPath: "../../../assets/ImgRecipes/ChocolateRosa.png"
  },{//FACIL FRIO
    id:"B:16",
    Name:"Limonada de frutos rojos",
    Portions:"4 Personas",
    Ingredients:"*100 gramos (25 a 30 piezas aprox) de frambuesas\n\n"+
    "*100 gramos (4 a 6 piezas aprox) de fresas\n\n"+
    "*100 gramos (una taza aprox) de arándanos rojos\n\n"+
    "*2 cucharadas de jugo de limón\n\n"+
    "*3 cucharadas de azúcar morena\n\n"+
    "*Hierbabuena\n\n",
    Procedure:"1:Lavamos bien todas las frutas\n\n"+
    "2:Agregamos todos los ingredientes a la licuadora con 4 cubos de hielo al gusto \n\n"+
    "3:Agregamos la azúcar morena y 1 hoja de hierbabuena.\n\n"+
    "4:Trituramos bien y colamos.\n\n"+
    "5:Servimos en cada vaso y agregamos una hojita de hierbabuena con un poco mas de hielo.\n\n",
    webviewPath: "../../../assets/ImgRecipes/JugoFrutosRojos.png"
  },{//FRIO
    id:"B:17",
    Name:"Granizado de café",
    Portions:"4 Personas",
    Ingredients:"*500 ml de cafe(bebida)\n\n"+
    "*Azúcar\n\n"+
    "*8 ml de jugo de limon\n\n"+
    "*100ml de agua\n\n",
    Procedure:"1:Preparamos 500 ml de cafe del que consuminos habitualmente en casa. \n\n"+
    "2:En una olla vierte 100 ml de agua y añadir 3 cucharadas de azúcar. Dejar calentar a fuego lento durante 10 minutos y remover con una cuchara contantemente hasta que el azúcar se disuelva hasta que tengas una especie de jarabe con tono claro.\n\n"+
    "3:Retiramos la olla del fuego y añadimos el café que se preparo anteriormente.\n\n"+
    "4:Vierta el contenido en un recipiente y dejar congelar durante 30 minutos\n\n"+
    "5:Una vez transcurrido los 30 minutos, revuelva y rompa los cristales de hielo formados y vuelva a introducirlo en el congelador por 30 minutos.\n\n"+
    "6:Repetir el proceso cada 30 minutos hasta que se tenga una textura de pequeños cristales de hielo.\n\n"+
    "7:Servir en vasos y si gustas puedes decorar con un poco de canela.\n\n",
    webviewPath: "../../../assets/ImgRecipes/GranizadoCafe.png"
  },{//FRIO
    id:"B:18",
    Name:"Agua de limón con hierbabuena",
    Portions:"4 Personas",
    Ingredients:"*4 liomones \n\n"+
    "*4 limas\n\n"+
    "*Azúcar o endulzante al gusto\n\n"+
    "*Hielo (OPCIONAL)\n\n"+
    "*Hojas de menta (OPCIONAL)\n\n"+
    "*Rodajas de limon verde y amarillos (OPCIONAL)",
    Procedure:"1:Exprime el jugo de los limones verdes y amarillos.\n\n"+
    "2:En una jarra grande, mezcla el jugo de los limones con los 2 litros de agua fría.\n\n"+
    "3:Añade azúcar o el endulzante de tu elección al gusto y mezcla bien hasta que se disuelva.\n\n"+
    "4:Agrega hielo, las rodajas y las hojas de menta si lo deseas.\n\n",
    webviewPath: "../../../assets/ImgRecipes/Limonada.png"
  },{
    id:"B:19",
    Name:"Agua de melón con frambuesa",
    Portions:"+5 Personas",
    Ingredients:"*2 tazas de melón cortado en cubos\n\n"+
    "*1/2 taza de frambuesas\n\n"+
    "*Azúcar o endulzante al gusto\n\n"+
    "*1 1/2 litro de agua\n\n"+
    "*Hielos\n\n",
    Procedure:"1:En la licuadora mezclar el melon, las frambuesas y un poco de agua.\n\n"+
    "2:En un recipiente agregar el agua, el contenido de la licuadora y endulzar al gusto. \n\n"+
    "3:Agregar los  hielos al gusto.\n\n"+
    "4:Si gustar decórar los basos con una frambuesa.\n\n",
    webviewPath: "../../../assets/ImgRecipes/AguaMelonFranbuesa.png"
  },{
    id:"B:20",
    Name:"Limonada de Fresa y Menta",
    Portions:"3 Personas",
    Ingredients:"*15 fresas\n\n"+
    "*4 a 6 limones\n\n"+
    "*4 tazas de agua fria\n\n"+
    "*Azúcar al gusto\n\n"+
    "*Hojas de menta\n\n"+
    "*Hielo\n\n",
    Procedure:"1:Lavar muy bien las fresas. Colocar las fresas en una licuadora  y licúa hasta obtener un textura suave.\n\n"+
    "2:En una jarra grande, combina las fresas, el jugo de limón, el azúcar y las 4 tazas de agua fría. Revuelve bien hasta que el azúcar se disuelva.\n\n"+
    "3:Agrega algunas hojas de menta fresca y mezcla ligeramente para liberar el aroma. Llena la jarra con hielo.\n\n"+
    "4:Sirve la limonada de fresa y menta en vasos con más hielo si lo deseas, y adorna con una fresa o una ramita de menta.\n\n",
    webviewPath: "../../../assets/ImgRecipes/LimonadaFresa.png"
  }]
  
  Dessert=[{//FACIL || FRIO
    id:"D:1",
  Name:"FLAN de chocolate con canela",
  Portions:"+5 Personas",
  Ingredients:"*1 1/2  tazas de azúcar\n\n"+
  "*1 Cucharadita de canela en polvo\n\n"+
  "*150g de chocolate amargo en trozos\n\n"+
  "*1 1/4 de tazas de crema para batir\n\n"+
  "*4 Huevos\n\n"+
  "*1/2 taza de leche\n\n",
  Procedure:"1:Engrasar en un molde o moldecitos para el flan con mantequilla derretida o aceite\n\n"+
  "2:Para el caramelo colocar en una olla de fondo grueso 1 1/2 tazas de azúcar y 1 cucharada de canela en polvo\n\n"+
  "3:Dejar al fuego hasta que se haga un caramelo de color ámbar\n\n"+
  "4:Vaciar el caramelo en el molde o moldes moviendo hacia las paredes\n\n"+
  "5:Derretir el cocholate junto con la crema a baño Maria\n\n"+
  "6:Cuando ya se encuentre derretido dejar enfriar y licuar con el resto de los ingredientes\n\n"+
  "7:Vaciar en el recipiente con el caramelo hasta 3/4 de su capacidad, taparlo con aluminio y colócarlo en una bandeja con agua caliente\n\n"+
  "8:Hornear a 200°C por una hora o insertar un palillo y éste salga limpio\n\n"+
  "9:Retirar del baño María y dejar enfriar para que las puedas refrigerar\n\n"+
  "10:Una vez frio desmoldar y servir\n\n",
  webviewPath: "../../../assets/ImgRecipes/FlanChocolate.png"
  },{//FRIO
    id:"D:2",
  Name:"Sándwiches de helado tradicionales",
  Portions:"+5 Personas",
  Ingredients:"*60g de chocolate semidulce picado grueso\n\n"+
  "*210g de harina\n\n"+
  "*1/4 cucharadas de polvo para hornear\n\n"+
  "*1/4 de cuchara de sal\n\n"+
  "*115g de mantequilla o margarina\n\n"+
  "*100g de azucar\n\n"+
  "*1 huevo\n\n"+
  "*1 cucharada de vainilla\n\n"+
  "*Helado de vainilla o de menta, ablandado\n\n",
  Procedure:"1:Poner el chocolate en un vaso y colocarlo en el microondas por 1 a 4 minutos o hasta que se derrita el chocolate, y revolver.\n\n"+
  "2:Colocar la harina, los polvos de hornear y la sal en un recipiente pequeño, y mezclar.\n\n"+
  "3:Con una batidoira eléctrica a velocidad media, batir la mantequilla y la azúcar hasta que se note liviana.\n\n"+
  "4:Añadir el huevo y la vainilla, batir y Poco a poco agregar el chocolate. Añadir la harina y continuar mezclando.\n\n"+
  "5:Moldera la masa formando 2 discos y envolver con plástico y regrigerar, por lo menos 2 horas hasta que esté firme.\n\n"+
  "6:Precalentar el horno a 180°C y untar con manteca en una charola para el horno\n\n"+
  "7:Desenvolver 1 pesazo de la masa, colocar entre 2 hojas de papel de cera y estirar con el rodillo hasta que tenga un grosor de 3 a 6 mm.\n\n"+
  "8:Sacar la hoja superior de papel de cera y volcar la masa sobre la chapa de horno previmante preparada.\n\n"+
  "9:Con un cuchillo cortar la masa en un rectángulos de 7 X 5 cm. Sacar los pedacitos de masa sobrantes de las orillas y agregarlas al segundo disco y repetir los pasos 7,8 y 9 hasta ocupar toda la masa\n\n"+
  "10:Hornear por 10 minutos o hasta que cuajen y dejar resposar las galletas hasta que se enfrien bien\n\n"+
  "11:A la mitad de las galletas, extender el helado sobre el lado plano y colocar la otra mitad de las galletas enfrente.\n\n"+
  "12:Servir inmeditamnete o envolver en una hoja plastica y congelar por un máximo de 1 mes.\n\n",
  webviewPath: "../../../assets/ImgRecipes/SandwichesHelado.png"
  },{
    id:"D:3",
  Name:"Arroz con leche y chocolate",
  Portions:"+5 Personas",
  Ingredients:"*500 ml de agua\n\n"+
  "*220 g de arroz sin cocer\n\n"+
  "*2 cucharadas de mantequilla\n\n"+
  "*60 g de azúcar\n\n"+
  "*2 cucharaditas de maizena\n\n"+
  "*500 ml de leche\n\n"+
  "*1/2 cucharadita de vainilla\n\n"+
  "*2 yemas\n\n"+
  "*80 g de pedacitos de chocolate semidulce\n\n"+
  "*Crema batida\n\n"+
  "*Cacao en polvo sin azúcar y galletas para adornar\n\n",
  Procedure:"1:Calentar el agua hasta que este apunto de hervir, añadir el arroz y la mantequilla.\n\n"+
  "2:Bajar el fuego y hervir a fuego lento por 20 minutos, retirar del fuego y dejar en reposo unos 5 minutos hasta que absorba todo el liquido.\n\n"+
  "3:Mezclar el azúcar y la maizena en un recipiente pequeño y agregar el arroz caliente en la olla. Añadir la leche y revolver\n\n"+
  "4:Llevar la mezcla a punto de hervir revolviendo de vez en cuando.\n\n"+
  "5:Cuando hierva dejar por 1 minuto y revolviendo contantemente. Retirar del fuego, añadir la vainilla y revolver.\n\n"+
  "6:Batir las yemas en un recipiente pequeño y agregar alrededor de 250 ml de la mezcla de arroz caliente a las yemas batidas.\n\n"+
  "7:Volver a colocar la mezcla de las yemas en el resto de la mezcla del arroz que está en la olla.\n\n"+
  "8:Cocer la mezcla del arroz a fuego medio, revolviendo frecuentemente, justo hasta que se empiecen a formar burbujas.\n\n"+
  "9:Retirar del fuego, agregar los pedacitos de chocolate y revolver hasta que se derritan.\n\n"+
  "10:Colocar en platos individuales para servir y refrigerar\n\n"+
  "11:Meter la crema batida en una manga para respostería con boquilla de estrella grande y decorar cada plato de arroz.\n\n"+
  "12:Espolvorear el cacao en polvo sin azúcar por un colador fino sobre cada plato.\n\n",
  webviewPath: "../../../assets/ImgRecipes/ArrozLecheChocolate.png"
  },{
    id:"D:4",
    Name:"Brownis de naranja a lo capuchino",
    Portions:"+5 Personas",
    Ingredients:"*2 naranjas\n\n"+
    "*175 g de mantequilla\n\n"+
    "*60 g de chocolate semidulce\n\n"+
    "*60 g de chocolate de taza \n\n"+
    "*360 g de azúcar\n\n"+
    "*1 cucharada de café expreso instantaneo en polvo\n\n"+
    "*3 Huevos\n\n"+
    "* 60 ml de licor con sabor a naranja\n\n"+
    "* 140 g de harina\n\n"+
    "*1 paquete (360 g) de chocolate semidulce\n\n"+
    "*2 cucharadas de manteca\n\n",
    Procedure:"1:Precalentar el horno a 180°C. Untar con manteca una bandeja de horno de 32.5 X 22.5 cm\n\n"+
    "2:rallar fino la parte de color de la cáscara de una naranja con un rallador tipo caja o de los planos. Medir 2 cucharaditas de cáscara de naranja y reservar.\n\n"+
    "3:En una olla grande y pesada derretir a fuego lento el chocolate semidulce y el de taza picados, revolviendo constantemente. Añadir la azúcar y el cafe expreso en polvo y revolcer.Retirar del fuego y dejar enfria un poco\n\n"+
    "4:Agregar los huevos y batir, 1 a la vez, con batidor de rejilla. Batiendo siempre, añadir licor y la cáscara de naranja.\n\n"+
    "5:Agregar la harinaa la mezcladel chocolate y batir justo hasta que se no tenga grumos. Extender la masa uniformemente en la bandeja de horno previamente preparada.\n\n"+
    "6:Hornear por 25 a 30 minutos o hasta que cuaje en el medio. Retirar la bandeja con masa del horno y colocar sobre una rendija metalica.\n\n"+
    "7:Mientras tanto, derretir los pedacitos de chocolate con la manteca en una olla pequeña a fuego lento, revolviendo constantemente.\n\n"+
    "8:Inmediatamente despues de sacar los brownies del horno, mientras estén todavia calientes untarlos con la mezcla de chocolate caliente. Enfriar por completo en la bandeja sobre una rejilla metálica y cortar en cuadros de 5 cm.\n\n"+
    "9:(OPCIONAL) Hacer un adorno de cáscara de naranja sacando delgadas tiras de cáscaraa de la naranja que queda utilizando un rallador. Atar estas tiras en nudos o retorcer formando espirales, como adorno.\n\n",
    webviewPath: "../../../assets/ImgRecipes/BrownisNaranja.png"
  },{
    id:"D:5",
  Name:"Dulce de durazno",
  Portions:"4 Personas",
  Ingredients:"*6 cerezas\n\n"+
  "*1 lata de media crema\n\n"+
  "*1 lata de duraznos en almíbar, escurridos\n\n"+
  "*1 taza de crema para batir\n\n"+
  "*1 cucharada de azucar glass\n\n",
  Procedure:"1:Licua la media crema con los duraznos hasta obtener una mezcla suave y apartar\n\n"+
  "2:Batir la crema avelocidad media durante 1 minuto. Sin dejar de batir, agregar el azucar glass poco a poco y continuar batiendo hasta que la mezcla esté bien firme y cuando levantes el batidor, la punta se mantenga en su lugar sin caerse.\n\n"+
  "3:Integra la mezcla de duraznos a la crema batida.\n\n"+
  "4:Vierte el contenido en copas o el recipiente que usaras. Refrigerar durante 1 hora.\n\n"+
  "5:Puedes decorar con varias rebanadas de duraznos y con las cerezas\n\n",
  webviewPath: "../../../assets/ImgRecipes/DulceDurazno.png"
  },{//FACIL
    id:"D:6",
  Name:"Taquitos de jícama",
  Portions:"4 Personas",
  Ingredients:"*2 Jicamas medianas o grandes\n\n"+
  "*2 Pepinos\n\n"+
  "*2 Mangos\n\n"+
  "*2 Limones\n\n"+
  "*Chile tajin (OPCIONAL)\n\n",
  Procedure:"1:Pelar las jícamas. Una jícama cortar en tiritas y la otra cortar en rebanadas muy finas.\n\n"+
  "2:Pelar los pepinos y los mangos. Cortarlas en tiras delgadas. Al pepino retirar las semillas.\n\n"+
  "3:Para preparar los taquitos, enrollar las tiras de pepino, mango y jícama con las rebanas de jícamas.\n\n"+
  "4:Colocalos muy juntos en un plato, rociar con el jugo de limón y el chile al gusto.\n\n",
  webviewPath: "../../../assets/ImgRecipes/TacosJicama.png"
  },{
    id:"D:7",
  Name:"Postre de Naranja",
  Portions:"4 Personas",
  Ingredients:"*3 Huevos\n\n"+
  "*6 Cucharadas de azúcar\n\n"+
  "*7 Naranjas\n\n"+
  "*2 Cucharas de fécula de maíz (tambien conocido como almidón de maíz o maicena)\n\n"+
  "*1 Cucharada de licor de naranja (OPCIONAL)\n\n",
  Procedure:"1:Bate las yemas con el azúcar hasta que tomen un color amarillo pálido.\n\n"+
  "2:De 6 naranjas extraer el jugo y utilizar un pelador o rallador para obtener la ralladura 1 naranja.\n\n"+
  "3:Añade el jugo, la ralladura, la fécula de maíz y el licor de naranja. Batir hasta que no tenga grumos.\n\n"+
  "4:HIerva la mezcla anterior. cuando espese, retirar del fuego y esperar a que enfrie.\n\n"+
  "5:Batir las claras a punto de nieve.\n\n"+
  "6:Con movimiento suaves mezclar las claras a la mezcla de naranja.\n\n"+
  "7:Vierte la preparación en copas y refrigere durante 2 horas.\n\n",
  webviewPath: "../../../assets/ImgRecipes/PostreNaranja.png"
  },{//HORNO
    id:"D:8",
  Name:"Tarta de frambuesas",
  Portions:"+5 Personas",
  Ingredients:"*1/2 taza de harina\n\n"+
  "*1/2 taza de nueces picadas\n\n"+
  "*1/4 de taza de azúcar\n\n"+
  "*1 pizca de sal\n\n"+
  "*90 gr de mantequilla\n\n"+
  "*1 yema de huevo\n\n"+
  "*1/2 cucharada de vainilla\n\n"+
  "*3 cucharadas de mermelada de frambuesa\n\n"+
  "*2 tazas de frambuesas lavadas\n\n",
  Procedure:"1:Precalerntar el horno a 190°C.\n\n"+
  "2:En un procesador de alimentos mezclar la harina, las nueces, el azúcar y la sal.\n\n"+
  "3:Agregar la mantequilla y muele hasta obtener una consistencia arenosa.\n\n"+
  "4:Agregar la yema y la vainilla en el procesador de alimentos la mezcla anterior hasta obtener una masas.\n\n"+
  "5:Refrigerar durante 30 minutos.\n\n"+
  "6:Engrasar una charola para el horno.\n\n"+
  "7:Hecharle harina a la masa para que no se pegue y estirarla sobre una superficie plana.\n\n"+
  "8:Con un molde ciruclar, cortar la masa del tamaño deseado.\n\n"+
  "9:Untala con dos cucharadas de mermelada de frambuesa.\n\n"+
  "10:Hornear 20 minutos o hasta que esté ligeramente dorada.\n\n"+
  "11:Dejarla enfriar, untar el resto de la mermelada.\n\n"+
  "12:Cubre la superficie con frambuesas.\n\n"+
  "13:Si lo deseas, decorar con azúcar glass espolvoreada.\n\n"+
  "*\n\n",
  webviewPath: "../../../assets/ImgRecipes/TartaFrambuesas.png"
  },{//MICROONDAS FACIL
    id:"D:9",
    Name:"Esquites",
    Portions:"+5 personas",
    Ingredients:"*50 gramos de manteca de puerco\n\n"+
    "*1 cebolla finamente picada\n\n"+
    "*Chile serrano picado al gusto\n\n"+
    "*6 elotes tiernos desgranados\n\n"+
    "*Sal, al gusto\n\n"+
    "*Epazote finamente picado\n\n",
    Procedure:"1:Poner la manteca en un recipiente para microondas y cocinar durante 2 minutos.\n\n"+
    "2:Agregar la cebolla y el chile. Cocinar un minuto mas.\n\n"+
    "3:añadir los elotes y tape el recipiente. Cocinar durante 6 minutos, revolviendo a mitad de cocción.\n\n"+
    "4:Añadir el epazote, destape y cocine durante otros 3 minutos o hasta que el elote esté cocido.\n\n"+
    "5:Añadir sal al gusto.\n\n",
    webviewPath: "../../../assets/ImgRecipes/Esquites.png"
  },{//MICROONDAS
    id:"D:10",
  Name:"Flan de queso",
  Portions:"3 Personas",
  Ingredients:"*200 gramos de queso philadelphia\n\n"+
  "*370 gramos de leche condensada\n\n"+
  "*4 huevos\n\n"+
  "*500 ml de lec he\n\n"+
  "*4 cucharadas de caramelo liquido\n\n"+
  "*1 cucharadita de esencia de vainilla\n\n",
  Procedure:"1:En un recipiente mezclar el queso, los 4 huevos, añadir la leche condensada, la leche, la esencia de vainilla hasta que quede bien mezclado.\n\n"+
  "2:En un recipiente para microondas poner el caramelo líquido en el fondo del molde.\n\n"+
  "3:Poner la mezcla en el recipiente para microondas y calentarlo por 15 minutos o hasta que este cuajado en el centro, picar con un calillo y si esta liquido poner por 5 minutos más o el tiempo que haga falta hasta que ya no este liquido.\n\n"+
  "4:Dejar enfriar completamente antes de llevarlo al refrigerador. \n\n"+
  "5:Dejar reposar por un minimo de 4 horas.\n\n",
  webviewPath: "../../../assets/ImgRecipes/FlanQueso.png"
  },{//Caliente
    id:"D11:",
    Name:"COULANT DE CHOCOLATE",
    Portions:"4 Personas",
    Ingredients:"*90 gramos de azúcar\n\n"+
    "*2 huevos\n\n"+
    "*70 gramos de harina\n\n"+
    "*110 gramos de chocolate negro\n\n"+
    "*4 onzas de chocolate negro\n\n"+
    "*110 gramos de mantequilla\n\n",
    Procedure:"1:Colocar en un recipienta la mantequilla y los 110 gramos de chocolate negro y ponerlo en el microondas durante 1 minutos o hasta que este derretido el contenido.\n\n"+
    "2:Bate con una cuchara o unas varillas para comprobar si realmente este derretido.\n\n"+
    "3:En otro recipiente añadir y batir los huevos con el azúcar y la harina.\n\n"+
    "4:En el recipiente donde estan los huevos batidos añadir el chocolate fundido removiendo bien.\n\n"+
    "5:Vaciar sobre unos moldes para cupcakes o moffins y introduccir un trocito de chocolate y ponerlo en el centro.\n\n"+
    "6:Los cubrimos con papel film y los metemos al congelador durante minimo 2 horas.\n\n"+
    "7:Precalentar el horno a 180°C. Meter los moldes durante 15 a 17 minutos.\n\n",
    webviewPath: "../../../assets/ImgRecipes/COULANT.png"
  },{//Caliente
    id:"D:12",
    Name:"Mousse de mandarina",
    Portions:"4 Personas",
    Ingredients:"*250ml de jugo de mandarina\n\n"+
    "*1 sobre de gelatina neutra\n\n"+
    "*1 yogurt natural desnatado\n\n"+
    "*1 mandarina\n\n"+
    "*1 hoja de menta\n\n",
    Procedure:"1:En recipiente ponemos a calentar 125 ml de agua. cuando este hirviendo retirar del fuego y añadir la gelatina y la mitad del zumo. \n\n"+
    "2:Poner en un recipiente y dejar reposar por un timepo.\n\n"+
    "3:Cuando la preparacion empiece a espesar ligeramente batir y añadir poco a poco el zumo mezclado con el yogurt.\n\n"+
    "4:Poner el recipiente en 4 vasos y déjar reposar en la nevera por 3 o 4 horas hasta que esté cuajada.\n\n"+
    "5:A la hora de consumir puedes decorar con la hoja de menta y poner un gajo de mandarina.\n\n",
    webviewPath: "../../../assets/ImgRecipes/MouseeMandarina.png"
  },{//frio
    id:"D:13",
    Name:"PALETAS DE COCO Y FRUTA",
    Portions:"+5 Personas",
    Ingredients:"*2 tazas de leche de coco\n\n"+
    "*Miel de agave\n\n"+
    "*1 taza de kiwi, cortado en cubos\n\n"+
    "*1 taza de frambuesa, cortados por la mitad\n\n"+
    "*1 taza de mango, cortado en cubos\n\n",
    Procedure:"1:En un recipiente mezcla la leche de coco con la miel de agave, al gusto.\n\n"+
    "2:En un recipiente para paletas agrega la fruta y rellena con la mezcla de la leche de coco.\n\n"+
    "3:Congela por 3 horas.\n\n"+
    "4:Retirar del congelador y servir.\n\n",
    webviewPath: "../../../assets/ImgRecipes/PaletasCoco.png"
  },{//FRIO FACIL
    id:"D:14",
    Name:"Magnum Caseras",
    Portions:"+5 Personas",
    Ingredients:"*3 tazas de crema para batir\n\n"+
    "*3/4 tazas de leche condensada\n\n"+
    "*1 cucharada de vainilla liquida\n\n"+
    "*4 tazas de chocolate amargo, derretido\n\n"+
    "*1/2 taza de almendaras picadas\n\n",
    Procedure:"1:Batir la crema hasta que se vea muy esponjosa. \n\n"+
    "2:Agrega la leche condensada y la vainilla, mezclar muy bien. \n\n"+
    "3:Vierta la mezcla en moldes para paletas y colocar un palito.\n\n"+
    "4:Congela por 12 horas.\n\n"+
    "5:Desmoldar la paletas y sumerge en el chocolate hasta cubrirla por completo.\n\n"+
    "6:Esparce un poco de almendras picadas en las paletas antes de que el chocolate se endurezca.\n\n"+
    "7:Congelar por 10 minutos y servir.\n\n",
    webviewPath: "../../../assets/ImgRecipes/Magnum.png"
  },{//FRIO FACIL
    id:"D:15",
    Name:"Chocobananas",
    Portions:"+5 Personas",
    Ingredients:"*6 plátanos\n\n"+
    "*1 taza de chocolate oscuro\n\n"+
    "*1/2 taza de coco rallado (OPCIONAL)\n\n"+
    "*1/2 taza nuez finamente picados (OPCIONAL)\n\n"+
    "*1/2 taza de chispas de colores\n\n"+
    "*trozos pequeños de galleta OREO (OPCIONAL)\n\n",
    Procedure:"1:Retirar la cáscara de los platanos y cortar por la mitad.\n\n"+
    "2:Insertar un palo a cada trozo de platano.\n\n"+
    "3:Dejar congelar por lo menos 4 horas.\n\n"+
    "4:Derretir el chocolate y sumergir los trozos de plátanos, hasta que queden completamente cubiertos del chocolate.\n\n"+
    "5:Espolvorear el coco, las nueces, las chispas de chocolate o las galletas, dependiendo del gusto.\n\n"+
    "6:En una rejilla dejar escurrir el exceso y dejar congelar por minimo 2 horas.\n\n",
    webviewPath: "../../../assets/ImgRecipes/Chocobananas.png"
  },{//FRIO FACIL
    id:"D:16",
    Name:"Fresas con crema",
    Portions:"+5 Personas",
    Ingredients:"*1 kilo de fresas\n\n"+
    "*1/2 lata de leche condensada\n\n"+
    "*1 lata de media crema\n\n"+
    "*1/2 lata de leche evaporada\n\n"+
    "*3 cucharadas de crema agria\n\n"+
    "*1 cucharada de vainilla\n\n"+
    "*Crema batida para decorar (OPCIONAL)\n\n",
    Procedure:"1:Lavar muy bien las fresas y cortar en cuadros pequeños o rebanadas pequeñas, dependiendo de la forma que mas te guste.\n\n"+
    "2:En un recipiente grande mezclar la leche condensada, la leche evaporada, la media crema, la crema agria, la vainilla.\n\n"+
    "3:Agregar las fresas ya cortadas.\n\n"+
    "4:Decorar con la crema batida si gustas y servir. Si gustas puedes refrigerar por 30 min para que esten frias.\n\n",
    webviewPath: "../../../assets/ImgRecipes/FresasCremas.png"
  },{//CALIENTE
    id:"D:17",
    Name:"Crepas de fruta",
    Portions:"+5 Personas",
    Ingredients:"*1 taza de leche \n\n"+
    "*1 taza de harina de trigo\n\n"+
    "*1 huevo\n\n"+
    "*1 cucharada de azúcar\n\n"+
    "*2 cucharadas de vainilla\n\n"+
    "*2 cucharadas de mantequilla derretirda\n\n"+
    "*2 platanos, para el relleno\n\n"+
    "*Fresas en cuadritos pequeños, para el relleno\n\n"+
    "*Chocolate liquido, para el relleno\n\n"+
    "*Crema batida, para el relleno\n\n",
    Procedure:"1:En un recipiente agregar el huevo, la mantequilla, la leche y el azúcar.\n\n"+
    "2:Mezclar muy bien y agregar la vainilla.\n\n"+
    "3:Añadir poco a poco la harina y seguir batiendo hasta tener una masa suave.\n\n"+
    "4:Poner al fuego un sarten y cuando este caliente agregar un poco de mantequilla para que las crepas no se queden pegadas al sarten.\n\n"+
    "5:Agregar una pequeña cantidad de la mezcla, dependiendo del tamaño que gustes. Mueve el sarten de forma circular o con la ayuda de un utensilios de cocina mover de forma circular, de modo que la mezcla se reparta por el sarten sin dejar huecos vacíos y quede una capa fina. \n\n"+
    "6:Cuando a la mezcla se llenen de pequeñas burbujas con una espatula darle la vuelta con mucho cuidado y retirar cuando ya este cocido, sin dejar por mucho tiempo al fuego, ya que la masa es fina y se cocina rapido ,por lo que no debera estar al fuego por mas de 2 minutos\n\n"+
    "7:Para el relleno agregar la crema batida, la fruta en trozos pequeños y doblar para crepa. Decorar con el chocolate liquido, si gustas.\n\n"+
    "8:\n\n"+
    "9:\n\n"+
    "10:\n\n",
    webviewPath: "../../../assets/ImgRecipes/CrepasFrutas.png"
  },{//Caliente
    id:"D:18",
    Name:"Choco-rol",
    Portions:"+5 Personas",
    Ingredients:"*6 huevos, separando las claras y las yemas\n\n"+
    "*1 taza de azúcar\n\n"+
    "*1 barra de mantequilla derretida\n\n"+
    "*1 taza de hariona\n\n"+
    "*4 cucharadas de cocoa en polvo\n\n"+
    "*1 cuchara de polvo para hornear\n\n"+
    "*1 cucharada de vainilla\n\n"+
    "*2 paquetes de queso crema \n\n"+
    "*1/4 taza de azúcar glass\n\n"+
    "*1 taza de crema para batir\n\n"+
    "*Mermelada de piña\n\n"+
    "*1 taza de chocolate\n\n"+
    "*3 cucharadas de leche\n\n",
    Procedure:"1:Precalentar el horno a 180°C\n\n"+
    "2:De los 6 huevos, separar las claras y las yemas. Batir las claras agregando la mitad de la taza de azúcar hasta que este a punto de turrón (hasta que lograr un tono blanco opaco y que, al voltear el tazón donde se baten, queden adheridas sin resbalarse o caer). \n\n"+
    "3:Batir las yemas con la mantequilla derretida ya fria, el resto del azúcar, la escencia de vainilla y utilizando un colador agregar la cocoa, la harina y el polvo para hornear para evitar que ciertas imperfecciones entren a la mezcla.\n\n"+
    "4:Batir por 1 minuto o hasta que quede bien revuelto todo. Añadir las claras ya batidas y mezclar muy bien.\n\n"+
    "5:Ponerle un poquito de grasa a una charola plana para hornear pequeña como de unos 40 cm de largo y 30 de ancho, aproximadamente. Agregar a la charola papel encerado con un poquito de aceite encima.\n\n"+
    "6:Agregar toda la mezcla y distribuir por todo el molde.\n\n"+
    "7:Hornear por 10 a 14 minutos y revisar si esta cocido, si todavia esta crudo dejar 1 minuto mas.\n\n"+
    "8:Despegar las orillas del pan y con la ayuda de otro recipiente plano o de una tabl, saquemos el pan de la charola y lo ponemos sobre un paño (trapo). \n\n"+
    "9:Aun caliente retiramos el papel encerado del pan y con la ayuda del paño enrollamos y deja enfriar por 15 min.\n\n"+
    "10:Para hacer el relleno batir el queso crema con azúcar glass, la crema para batir y bate por 7 minutos.\n\n"+
    "11:Desenrolla el pan y unta por toda la parte de arriba la mezcla de la crema, agrega la mermelada de piña, enrolla y deja enfriar por aproximadamente 1 hora o más, si gustas lo puede meter al refrigerador para que se enfrie.\n\n"+
    "12:En una olla poner las 3 cucharadas de leche y cuando este caliente, agregar el chocolate y mover hasta que este derretido por compoleto.\n\n"+
    "13:Esparcir por todo el rollo hasta que no quede ningun hueco vacio.\n\n"+
    "5:Dejar elfria el chocolate y servir.\n\n",
    webviewPath: "../../../assets/ImgRecipes/Chocorrol.png"
  }]

  AlcoholicDrink=[{
    id:"A:1",
    Name:"Margarita de maracuyá",
    Portions:"1 Persona",
    Ingredients:"*45ml de tequila\n\n"+
    "*22 ml de licor de naranja\n\n"+
    "*15 ml de jugo de limon\n\n"+
    "*89 ml de pulpa de maracuyá\n\n"+
    "*Sal\n\n"+
    "*1 rodaja de limon\n\n",
    Procedure:"1:Escarchar el vaso con sal.\n\n"+
    "2:Añadir la pulpa de maracuyá,el tequila, el licor de naranja y el jugo de limon. Mezclar todos los ingredientes.\n\n"+
    "3:Decorar con la rodaja de limon.\n\n",
    CountIngredients:5,
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  },{
    id:"A:2",
    Name:"Piña Colada",
    Portions:"1 Persona",
    Ingredients:"*90 ml de zumo de piña\n\n"+
    "*30 ml de leche de coco\n\n"+
    "*30 ml de ron blanco (para la version sin alcohol remplazar por 30 ml de leche)\n\n"+
    "*Hielo picado\n\n"+
    "*1 Rodaja de piña\n\n",
    Procedure:"1:Mezclamos en un shaker 90ml de zumo de piña, 30 ml de leche de coco y 30 ml de ron blanco o 30 ml de leche, durante unos segundo.\n\n"+
    "Tambien se puede mezclar en una licuadora durante unos 5 segundos.\n\n"+
    "2:Añadimos el hielo picado hasta llenar el shaker o 100g de hielo picado si es en la licuadora, durante unos 5 segundos.\n\n"+
    "3:Servimos en una copa alta junto con el hielo y adornamos con un trozo de piña.\n\n",
    CountIngredients:5,
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  }]
/*
  id:":",
  Name:"",
  Portions:"",
  Ingredients:"*\n\n"+
  "*\n\n"+
  "*\n\n"+
  "*\n\n"+
  "*\n\n"+
  "*\n\n"+
  "*\n\n"+
  "*\n\n"+
  "*\n\n",
  Procedure:"1:\n\n"+
  "2:\n\n"+
  "3:\n\n"+
  "4:\n\n"+
  "5:\n\n"+
  "6:\n\n"+
  "7:\n\n"+
  "8:\n\n"+
  "9:\n\n"+
  "10:\n\n",
  webviewPath: "../../../assets/ImgRecipes/Limonada.png"
  */

}
