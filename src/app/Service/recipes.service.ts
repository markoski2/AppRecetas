import { Injectable } from '@angular/core';
import { InformationCard } from './interfaces.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  SaveInformation?:InformationCard

  EasyAccompaniments:number[]=[1,2,7,10,12,15]
  PrimaryAccompaniments:number[]=[11,12,13,14,17]
  ThirdAccompaniments:number[]=[0,1,5,6,17]
//=["","","","","","",""]
  EasyMel:number[]=[0,1,2,4,8,9,13,15]
  PrimaryMel:number[]=[11,15]
  ThirdMel:number[]=[12]

  EasyDrink:number[]=[2,4,5,6,9,14]
  PrimaryDrink:number[]=[10,11,13,14,12]
  ThirdDrink:number[]=[7,8]

  EasyDessert:number[]=[0,5,8]
  PrimaryDessert:number[]=[0,11]
  ThirdDessert:number[]=[7,8,9]



  Accompaniments=[{//PASTA
    id:"A:1",
    Name:"Sopa de Spaghetti Blanco",
    Portions:"+5 Personas",
    Ingredients:"*Spaghetti\n*Adobera\n*1 o 2 Chiles poblanos (azados y rebanados)\n*2 Dientes de ajo (Picados)"+
    "*1 Knorr suiza o similar\n*1 Taza de leche\n*1 Mantequilla o Margarina\n*1/4 de Crema",
    Procedure:"1:Se coce el Spaghetti con poca sal\n2:Se muele la leche con el Knorr suiza\n3:En una cacerola se pone a derretir la mantequilla y se frien los ajos, cuando esten dorados se agregan los chiles ya rebanados"+
    "\n4:Se le agrega la leche ya que hierva un poco, se le agrega el Spaghetti (previamente se lava el Spaghetti con solo agua)\n"+
    "5:Ya que seque la leche se le apaga y ya que enfrie un pocose le agrega la crema y la adobera en cuadritos",
    CountIngredients:8,
    filepath: "../../../assets/ImgRecipes/EspaguetiBlanco.png",
    webviewPath: "../../../assets/ImgRecipes/EspaguetiBlanco.png"
  },{//FACIL PASTA
    id:"A:2",
    Name:"Sopa de Spaghetti Rojo",
    Portions:"+5 Personas",
    Ingredients:"*Spaghetti\n*2 Jitomates\n*1 Knorr suiza o similar\n*1/4 de Crema\n*1 Cebolla"+
    "\n*1 Ajo\n*1 Mantequilla o Margarina\n",
    Procedure:"1:Se pone a hervir agua y se pone el Spaghetti con poca sal\n"+
    "2:En la licuadora se muele el ajo, la ceboilla, el Knorr Suiza y los jitomates con poca agua\n"+
    "3:En una cacerola se pone la mantequilla a derretir\n"+
    "4:Ya que la mantequilla este derretida con un colador se le agrega lo que fue molido en la licuadora\n"+
    "5:Se le agrega la leche ya que hierva un poco, se le agrega el Spaghetti (previamente se lava el Spaghetti con solo agua)\n"+
    "6:Se espera a que se enfrie y se le agrega la crema (OPCIONAL)",
    CountIngredients:7,
    filepath: "../../../assets/ImgRecipes/EspaguetiRojo.png",
    webviewPath: "../../../assets/ImgRecipes/EspaguetiRojo.png"
  },{//FACIL
    id:"A:3",
    Name:"Arroz Rojo",
    Portions:"3 Personas",
    Ingredients:"*1/4 de Arroz\n"+
    "*2 Jitomates\n"+
    "*1 Diente de ajo\n"+
    "*1/2 Cebolla\n"+
    "*1 Knorr Suiza o similar\n"+
    "*750 ml de agua\n",
    Procedure:"1:Se lava de arroz\n"+
    "2:Se pone la casuela/olla con aceite, se espera a que este caliente para poner el arroz\n"+
    "3:Se espera a que el arroz dore (el arroz cambiara de color y se pondra de color dorado)\n"+
    "4:Se muele todos los ingredientes en la licuadora con poca agua\n"+
    "5:Ya que el arroz este dorado se le agrega lo molido y se deja freir un poco\n"+
    "6:Se le agrega 750ml de agua\n"+
    "7:Se deja hervir, se tapa y se baja el fuego a lo mas minimo\n"+
    "8:Esperar a que seque el agua y que el arroz se esponje",
    CountIngredients:6,
    filepath: "../../../assets/ImgRecipes/ArrozRojo.png",
    webviewPath: "../../../assets/ImgRecipes/ArrozRojo.png"
  },{
    id:"A:4",
    Name:"Arroz Blanco",
    Portions:"3 Personas",
    Ingredients:"*1/4 de Arroz\n"+
    "*Zanahoria y Papa picados en cuadros\n"+
    "*1/2 taza de leche\n"+
    "*1 Knorr Suiza o similar\n"+
    "*750 ml de agua\n",
    Procedure:"1:Se lava de arroz\n"+
    "2:Se pone la casuela/olla con aceite, se espera a que este caliente para poner el arroz\n"+
    "3:Antes de que el arroz se dore, se le echa la verdura\n"+
    "4:Se le echa la leche y el Knorr Suiza\n"+
    "5:Deshaces el Knorr Suiza y se le agrega el agua\n"+
    "6:Se deja hervir y ya cuando este hirviendo se tapa y se le baja el fuego a lo mas minimo\n"+
    "7:Esperar a que seque el agua y que el arroz se esponje\n",
    CountIngredients:5,
    filepath: "../../../assets/ImgRecipes/ArrozBlanco.png",
    webviewPath: "../../../assets/ImgRecipes/ArrozBlanco.png"
  },{
    id:"A:5",
    Name:"Arroz a la jardinera",
    Portions:"4 Personas",
    Ingredients:"*1 taza de arroz\n"+
    "*1/2 cebolla\n"+
    "*1 zanahoria\n"+
    "*1 diente de ajo\n"+
    "*Verduras como papas,chicharos, elote o pimiento\n"+
    "*2/3 de taza de aceite\n"+
    "*3 tazas de caldo de pollo o agua\n"+
    "*Sal\n",
    Procedure:"1:Deja remojar el arroz en el agua hirviendo, durante 10 minutos.\n"+
    "2:Dejar escurrir en una coladera por 10 minutos.\n"+
    "3:Calienta el aceite y frie el arroz, revolviendo de vez en cuando para que no se dore ni se pegue.\n"+
    "4:Cuando esté tranparente, escurre el aceite y frie las verduras con el arroz, durante 5 minutos.\n"+
    "5:Agrege el caldo o agua y deja que suelte el hervor, durante el fuego y agrega la sal.\n"+
    "6:Cuece a fuego lenteto de 20 a 30 minutos o hasta que se consuma el agua.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/ArrozJardinera.png",
    webviewPath: "../../../assets/ImgRecipes/ArrozJardinera.png"
  },{//PASTA
    id:"A:6",
  Name:"Espagueti Carbonara",
  Portions:"+5 Personas",
  Ingredients:"*2 cucharadas de acite de oliva\n"+
  "*1 cebolla cortada en cubos pequeños\n"+
  "*150 g de tocino o pancetta, cortado en cubos pequeños\n"+
  "*Sal y pimienta molido grueso\n"+
  "*500 gr de spagueti cocido\n"+
  "*4 yemas batidas\n"+
  "*1/2 taza de crema espesa\n"+
  "*1 taza de queso parmesano\n"+
  "*3 cucharadas de perejil liso, lavado finamente y picado\n",
  Procedure:"1:En un sartén grande calienta el aceite de oliva, añade la cebolla y saltea cerca de dos minutos, hasta que este suave.\n"+
  "2:añade el tocino en trocitos y cocina hastaque se dore ligeramente, durante cuatro minutos. Retira del fuego y dejar enfriar ligeramente\n"+
  "3:Bate las yemas con la crema y el queso parmesano. Añade la mezcla de tocino y sazona con sal.\n"+
  "4:Mezcla con la pasta recién cocido. Espolvorea con el perejil fresco.\n",
  CountIngredients:0,
  filepath: "../../../assets/ImgRecipes/SpaguetiCarbonara.png",
  webviewPath: "../../../assets/ImgRecipes/SpaguetiCarbonara.png"
  },{//PASTA
    id:"A:7",
    Name:"Espagueti con atún",
    Portions:"+5 Personas",
    Ingredients:"*1/2 taza de aceite de oliva\n"+
    "*4 dientes de ajo finamente picado\n"+
    "*1 cebolla finamente picada\n"+
    "*1 taza de perejil finamente picado\n"+
    "*1 lata de 850 gramos de puré de jitopmate\n"+
    "*Hierbas de olor al gusto (laurel, tomillo y mejorana)\n"+
    "*3 latas de atún\n"+
    "*1 taza de aceitunas\n"+
    "*250 gramos de espagueti cocido\n",
    Procedure:"1:En una cacerola caliente agregar un cuarto de taza de aceite de oliva.\n"+
    "2:Freir el ajo y la cebolla. Agregar el perejil y el jitomate. HIerva durante ocho minutos.\n"+
    "3:Agregar las hierbas de olor, sal y pimienta. Deje sazonar por unos minutos mas y agregar los ingredientes restantes, menos el espagueti.\n"+
    "4:Deje hervir durante cinco minutos a fuego lento.\n"+
    "5:Vierta sobre el espagueti escurrido.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/EspaguetiAtum.png",
    webviewPath: "../../../assets/ImgRecipes/EspaguetiAtum.png"
  },{ //facil
    id:"A:8",
    Name:"Frijoles refritos",
    Portions:"4 Personas",
    Ingredients:"*1/4 de taza de aceite\n"+
    "*1/2 taza de cebolla finamente picada\n"+
    "*7 tazas de frijoles cocidos\n"+
    "*Sal, al gusto\n"+
    "*totopos para servirlos, al gusto (OPCIONAL)\n",
    Procedure:"1:Caliente de aceite en un sartén y frie la cebolla.\n"+
    "2:Vierta los frijoles y macháquelos.\n"+
    "3:Refriéndolos hasta que sequen.\n"+
    "4:Ajustar la cantidad de sal si es necesario y sirva con totopos.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/FrijolesRefritos.png",
    webviewPath: "../../../assets/ImgRecipes/FrijolesRefritos.png"
  },{//SALSA
    id:"A:9",
    Name:"Salsa roja",
    Portions:"+5 Personas",
    Ingredients:"*15 chiles de árbol secos asados\n"+
    "*Agua caliente\n"+
    "*3 jitomates asados, picados sin piel ni semillas\n"+
    "*1/4 de cebolla asada\n"+
    "*1 diente de ajo asado\n"+
    "*Sal al gusto\n"+
    "*Aceite\n",
    Procedure:"1:Hidrata los chiles en agua caliente hasta que se ablanden.\n"+
    "2:Retira y lícualos un poco con el resto de los ingredientes.\n"+
    "3:Sazona en un poco de aceite caliente y sirve fria.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/SalsaRoja.png",
    webviewPath: "../../../assets/ImgRecipes/SalsaRoja.png"
  },{//SALSA
    id:"A:10",
    Name:"Salsa verde",
    Portions:"+5 Personas",
    Ingredients:"*Agua, la necesaria\n"+
    "*250 gr de tomates pelados, asados y en mitades\n"+
    "*1/2  de cebolla en trozos asados\n"+
    "*7 chiles de árbol asados\n"+
    "*3 ramitas de cilantro picado\n"+
    "*1 cucharada de aceite\n"+
    "*Sal al gusto\n",
    Procedure:"1:Cuece en suficiente agua los tomates con la cebolla y los chiles.\n"+
    "2:Cuando los tomates estén suaves, retira un poco del agua y licua con ella los ingredientes anteriores junto con el cilantro.\n"+
    "3:Sazona y vierte en una cacerola con aceite y añade sal.\n"+
    "4:Sirve fría\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/SalsaVerde.png",
    webviewPath: "../../../assets/ImgRecipes/SalsaVerde.png"
  },{//FACIL
    id:"A:11",
    Name:"Guacamole",
    Portions:"2 Personas",
    Ingredients:"*4 aguacates maduros\n"+
    "*1 limón, solo el jugo\n"+
    "*Sal y pimienta al gusto\n",
    Procedure:"1:Corta por la mitad los aguacates y con una cuchara retirar la pulpa, machácala.\n"+
    "2:Agregar el jugo de limon, sal y la pimienta. Mezclar perfectamente\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/Guacamole.png",
    webviewPath: "../../../assets/ImgRecipes/Guacamole.png"
  },{//ENSALADA
    id:"A:12",
    Name:"Nopales",
    Portions:"+5 Personas",
    Ingredients:"*6 nopales grandes, limpios y en cuadros\n"+
    "*Aceite vegetal, lo necesario\n"+
    "*1 cucharadita de bicarbonato de sodio\n"+
    "*1/4 de cebolla picada\n"+
    "*5 jitomates sin piel ni semillas en cuadros\n"+
    "*Sal y pimienta al gusto\n"+
    "*1/4 de taza de cilantro lavado y picado\n",
    Procedure:"1:Asa los nopales en una sartén con poco aceite caliente y cuando comiencen a soltar liquido, agrega el bicarbonato.\n"+
    "2:Retira y escurre el exceso de liquido.\n"+
    "3:Frie con un poco más de aceite la cebolla, cuando esté transparente agrega el jitomate e integra.\n"+
    "4:Regresa los nopales al sartén, la sal y la pimienta. Retira del fuego y espolvorea el cilantro picado.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/Nopales.png",
    webviewPath: "../../../assets/ImgRecipes/Nopales.png"
  },{//FACIL ENSALADA
    id:"A:13",
    Name:"Ensalada de pepino y rábanos",
    Portions:"2 Personas",
    Ingredients:"*2 pepinos en rodajas\n"+
    "*6 a 10 rabanos en rodajas, dependiendo del tamaño\n"+
    "*1 limon, solo el jugo\n"+
    "*Sal, al gusto\n",
    Procedure:"1:Intercala las rodajas de pepino y rábanos.\n"+
    "2:Baña con el limón y la sal.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/EnsaladaPepinoRabanos.png",
    webviewPath: "../../../assets/ImgRecipes/EnsaladaPepinoRabanos.png"
  },{//ENSALADA
    id:"A:14",
    Name:"Ensalada de pollo y lechuga",
    Portions:"4 Personas",
    Ingredients:"*500 gramos de pechuga de pollo\n"+
    "*1  lechuga troceada\n"+
    "*3 zanahorias\n"+
    "*100 gramos de queso manchego\n"+
    "*1/2 taza de granos de elote\n"+
    "*Sal y pimienta\n"+
    "*1 chile de árbol (OPCIONAL)\n"+
    "*Aderezo al gusto\n",
    Procedure:"1:En un sartén con poco aceite agregar el pollo en trozos pequeños o en tiritas. Sazonar con sal y pimienta al gusto. Si haci lo deseas agregar el chile de arbol.\n"+
    "2:Cortar la zanahora en rebanadas pequeñas o utilizando un rallador rallar la zanahoria.\n"+
    "3:Cortar el queso en cuadros pequeños y las uvas por la mitad, retirar las semillas de la uva.\n"+
    "4:En un recipiente agregar la lechuga en trozos, la zanahoria, las uvas, el queso en cuadritos y los granos de elote.\n"+
    "5:Agregar el pollo y añadir algun aderezo si lo deseas. \n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/EnsaladaPolloLechuga.png",
    webviewPath: "../../../assets/ImgRecipes/EnsaladaPolloLechuga.png"
  },{//ENSALADA
    id:"A:15",
    Name:"Ensalada de pollo",
    Portions:"+5 Personas",
    Ingredients:"*2 a 3 pechugas de pollo\n"+
    "*2 papas grandes\n"+
    "*3 zanahorias\n"+
    "*Chicharos"+
    "*6 cucharadas soperas de meyonesa\n"+
    "*6 cucharadas de crema\n"+
    "*Sal\n"+
    "*1/2 de cebolla"+
    "*1 diente de ajo",
    Procedure:"1:En una olla con agua, agregar las pechugas de pollo, media cebolla, sal y un diente de ajo. Cocinar por unos 15 a 20 minutos.\n"+
    "2:Mientras se cose la pechuga, cortar en cuadritos pequeños la zanahoria y la papa.\n"+
    "3:Retirar las pechugas, dejar enfriar y desmenuzar.\n"+
    "4:Para cocinar las verduras puedes utilizar otra olla con agua o si gustas puedes reutilizar la misma agua que se utilizo con el pollo, retirando la cebolla y el diente de ajo.\n"+
    "5:Cuando la papa este suave, retirar del fuego y escurrir la verdura. Dejar enfriar la verdura.\n"+
    "6:En un recipiente agregar la mayonesa, la crema, la verdura y el pollo desmenuzado. Mezclar bien.\n"+
    "7:Si gustas puedes comer la ensalada con galletas saladas, tostadas o en un emparedado. \n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/EnsaladaPolloVerdura.png",
    webviewPath: "../../../assets/ImgRecipes/EnsaladaPolloVerdura.png"
  },{//SALSA FACIL
    id:"A:16",
    Name:"Salsa pico de gallo",
    Portions:"4 Personas",
    Ingredients:"*2 jitomates\n"+
    "*1/2 cebolla\n"+
    "*2 dientes de ajo\n"+
    "*2 chiles serranos \n"+
    "*1 ramas de cilantro\n"+
    "*1 cucharada de vinagre blanco\n"+
    "*1 cucharada de aceite de oliva\n"+
    "*Sal\n",
    Procedure:"1:Picar en pequeños cubos el jitomate, la cebolla, el chile, el ajo y el cilantro.\n"+
    "2:En un recipiente agregar todos los ingredintes y mezclar bien los ingredientes.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/SalsaPicoGallo.png",
    webviewPath: "../../../assets/ImgRecipes/SalsaPicoGallo.png"
  },{//SALSA
    id:"A:17",
    Name:"Salsa roja con chile morita",
    Portions:"+5 Personas",
    Ingredients:"*8 tomates(Tomatillo)\n"+
    "*1/2 cebolla\n"+
    "*2 dientes de ajo\n"+
    "*1 chile guajillo\n"+
    "*3 chiles morita\n"+
    "*Sal y pimienta\n"+
    "*Pizca de oregano",
    Procedure:"1:Freir los chiles, los tomates, la cebolla y el ajo.\n"+
    "2:En la licuadora agregar todo lo freido, un poco de sal y pimienta.\n"+
    "3:Si queda muy espeso agregar un poco de agua.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/SalsaRojaMorita.png",
    webviewPath: "../../../assets/ImgRecipes/SalsaRojaMorita.png"
  },{//ENSALADA PASTA
    id:"A:18",
    Name:"Ensalada de pasta con calabacín, atún y limón",
    Portions:"4 Personas",
    Ingredients:"*Un paquete de pasta, de la forma de tuy preferencia\n"+
    "*2 latas de atún en aceite\n"+
    "*Ralladura de la cáscara de 1 limon\n"+
    "*Aceite de oliva virgen\n"+
    "*Sal y pimienta\n"+
    "2 calabacines",
    Procedure:"1:En una olla con agua y sal, agregamos la pasta y dejamos al fuego por 10 minutos.\n"+
    "2:Cortamos las calabacines en tiras finas.\n"+
    "3:En un sarten calentamos un poco de aceite de oliva y doramos las rebanadas de calabacín en ambos lados\n"+
    "4:En un traste o cacerola agregamos la pasta, el atúm, la ralladura de limón, un poco de aceite de oliva, sal y pimienta.\n"+
    "5:Mezclamos bien y servimos\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/EnsaladaPastaCalabacin.png",
    webviewPath: "../../../assets/ImgRecipes/EnsaladaPastaCalabacin.png"
  }]

  mel=[{//FACIL
    id:"M:1",
    Name:"Morisqueta",
    Portions:"4 Personas",
    Ingredients:"*1/2 Kilo de Arroz\n"+
    "*2 Jitomates\n"+
    "*1 Cebolla\n"+
    "*Queso fresco o Adobera\n"+
    "*Frijoles\n"+
    "*Crema\n"+
    "*1 Litro y medio de agua\n"+
    "*2 Chiles guajillos \n"+
    "*1/4 de diente de ajo\n",
    Procedure:"ARROZ\n"+
    "1:Se lava el arroz\n"+
    "2:Se le agrega el agua en una olla y se espera a que este caliente el agua\n"+
    "3:Se pone media cebolla y un poco de sal\n"+
    "4:Ya que hierva el agua se pone el arroz\n"+
    "5:Se tapa y se pone el fuego en lo mas minimo y se deja cocer hasta que se consuma el agua\n"+
    "6:Esperar a que seque el agua y que el arroz se esponje\n"+
    "CHILE\n"+
    "1:En una olla se le agrega agua y se pone a coser el chile guajillo y los jitomates\n"+
    "2:Ya que hierva, se muele en una licuadora el ajo, cebolla, los jitomates y el chile\n"+
    "3:Se pone poco aceite en una cacerola y se frien unas rodajas de cebolla\n"+
    "4:En la cacerola se le echa y se cuela lo que se molio anteriormente en la licuadora \n"+
    "5:Se espera a que hierva\n"+
    "6:Ya que hierva se le apaga y se le agrega el queso y un poco de sal\n",
    CountIngredients:9,
    filepath: "../../../assets/ImgRecipes/Morisqueta.png",
    webviewPath: "../../../assets/ImgRecipes/Morisqueta.png"
  },{//FACIL
    id:"M:2",
    Name:"Alambres",
    Portions:"4 Personas",
    Ingredients:"*3/4 de Carne de diezmillo\n"+
    "*1/4 de Queso asadero (Queso Oaxaca)\n"+
    "*Cebolla\n"+
    "*2 Chiles de pimiento morron (OPCIONAL)\n"+
    "*Sal\n",
    Procedure:"1:Se corta la carne en cachitos\n"+
    "2:Se frie la carne con sal\n"+
    "3:Se cortan los chiles y la cebolla en rajas y se echan a la carne\n"+
    "4:Cuando la carne este cocina se le apaga al fuego\n"+
    "5:Se distribuye el queso en toda la carne y se tapa  \n"+
    "6:Se espera a que el queso se derrita",
    CountIngredients:5,
    filepath: "../../../assets/ImgRecipes/Alambres.png",
    webviewPath: "../../../assets/ImgRecipes/Alambres.png"
  },{//FACIL
    id:"M:3",
    Name:"CHILAQUIILES",
    Portions:"+5 Personas",
    Ingredients:"*Totopos\n"+
    "*Jitomate (para salsa roja) o Tomate (para Salsa verde)\n"+
    "*Cebolla\n"+
    "*Chile peron o chile Cerrano\n"+
    "*Cilandro\n"+
    "*1 Knorr Suiza o similar\n"+
    "*1 Diente de ajo\n",
    Procedure:"1:Se pone a coser el chile con el Jimomate o tomate,dependiendo de la salsa que se elija\n"+
    "2:Ya que hierva se muele en la licuadora\n"+
    "3:En una cacerola con poco aceite se frie el chile y se le agrega los totopos\n"+
    "4:Se le agrega 750ml de  agua (Los totopos absorben mucha agua)\n"+
    "5:Se tapa y se mueve constantemente para que no se pegen los totopos \n"+
    "6:Se espera a que seque (al gusto)",
    CountIngredients:7,
    filepath: "../../../assets/ImgRecipes/Chilaquiles.png",
    webviewPath: "../../../assets/ImgRecipes/Chilaquiles.png"
  },{
    id:"M:4",
    Name:"POLLO EN CHIPOTLE",
    Portions:"+5 Personas",
    Ingredients:"*Pollo\n"+
    "*1 Lata de chipotle\n"+
    "*1  Diente de ajo\n"+
    "*Cebolla\n"+
    "*Limon\n"+
    "*Pimienta\n"+
    "*2 Hojas de laurel\n"+
    "*Mantequilla o Margarina\n",
    Procedure:"1:Se pone a derretir la mantequilla en una cacerola (entre mas mantequilla mas jugo sale)\n"+
    "2:Se le agrega el pollo y las hojas de laurel, se espolvorea sal y pimienta, se revuelve y se tapa\n"+
    "3:En un molcajete se apachurra la cebolla y el ajo, despues el chipotle y el limon (Si no se cuenta con un molcajete, agregar todo en la licuadora y moler)\n"+
    "4:Al pollo se le agrega lo molido\n"+
    "5:Se revuelve y se tapa, se tiene que mover constantemente hasta que el pollo este cocido\n",
    CountIngredients:8,
    filepath: "../../../assets/ImgRecipes/PolloChipotle.png",
    webviewPath: "../../../assets/ImgRecipes/PolloChipotle.png"
  },{//FACIL
    id:"M:5",
    Name:"CROQUETAS DE ATUM",
    Portions:"4 Personas",
    Ingredients:"*6 a 10 papas\n"+
    "*2 latas de atum\n"+
    "*1 huevo\n"+
    "*pan molido\n",
    Procedure:"1:Se pone a cocer la papa hasta que este muy suave\n"+
    "2:Se pelan y se machucan por completo\n"+
    "3:Se le agrega sal y se revuelve\n"+
    "4:Se hace una bola con la papa con un poco de atum adentro\n"+
    "5:En una traste se vierte el huevo y se remoja la bolita de papa\n"+
    "6:La bolita de papa se empaniza con el pan molido y se frie\n",
    CountIngredients:4,
    filepath: "../../../assets/ImgRecipes/CroquetasAtum.png",
    webviewPath: "../../../assets/ImgRecipes/CroquetasAtum.png"
  },{
    id:"M:6",
    Name:"CHICHARRON EN SALSA ROJA",
    Portions:"+5 Personas",
    Ingredients:"*Chicharron\n"+
    "*3 a 5 Jitomates\n"+
    "*Chiles\n"+
    "*Cilandro\n"+
    "*Cebolla\n"+
    "*Dientes de ajo\n"+
    "*Chorizo\n"+
    "*1 Knorr Suiza o similar\n",
    Procedure:"1:Se coce el Jitomate y el chile\n"+
    "2:Se muele en una licuadora el jitomate, chile,cebolla,cilandro,ajo y el Knorr Suiza\n"+
    "3:Se frie el chorizo con poco aceite\n"+
    "4:Se le agrega el chicharron para que se frie con el aceite hasta que cambie un poco de color\n"+
    "5:Se le echa lo molido al chicharron\n"+
    "6:Se le echa agua al gusto, el chicharron absorbe algo de agua\n",
    CountIngredients:4,
    filepath: "../../../assets/ImgRecipes/ChicharronSalsa.png",
    webviewPath: "../../../assets/ImgRecipes/ChicharronSalsa.png"
  },{
    id:"M:7",
    Name:"Langostinos en mantequilla",
    Portions:"+5 Personas",
    Ingredients:"*\n"+
    "*16 piezas de Langostinos o Camarones grandes\n"+
    "*6 Cucharadas de mantequilla\n"+
    "*4 Cucharadas de ajo molido\n"+
    "*6 Cebollines, finamente picados\n"+
    "*60 ml de vino blanco seco\n"+
    "*2 Cucharadas de jugo de limon\n"+
    "*8 Ramitas grandes de perejil, finamente picados\n"+
    "*Sal y pimienta negra al gusto\n"+
    "*Rodajas de limon y ramitas de perejil para adornar\n",
    Procedure:"1:Descarscarar los langostinos o los camarones y desechar las cáscaras.\n"+
    "2:Para sacar la vena utilizar un cuchillo y hacerle un corte pequeño a lo largo del dorso y levantar la vena negra con la punta del cuchillo.\n"+
    "3:Calentar la mantequilla en un sarten grande a fuego medio.\n"+
    "4: Cuando ya se derrita la mantequilla agregar el ajo, freir y revolver 1 a 2 minutos hasta que ablande sin dorar.\n"+
    "5:Añadir los Langostinos o Camarones, los cebollines anteriormente picados, el vino blanco y el jugo de limon.\n"+
    "6:Freir hasta y revolver hasta que los langostinos o camarones se vuelvan rosados, firmes y opacos, 1 a 2 minutos por cada lado. No refreir.\n"+
    "7:Antes de servirlos, agregar el perejil picado y condimentar con sal y pimienta. Adornar con las rodajas y el perejil si se quiere.\n",
    CountIngredients:9,
    filepath: "../../../assets/ImgRecipes/LagartinosMantequilla.png",
    webviewPath: "../../../assets/ImgRecipes/LagartinosMantequilla.png"
  },{
    id:"M:8",
    Name:"Milanesas Cordon Blue",
    Portions:"+5 Personas",
    Ingredients:"*6 milanesas de pollo o de ternera, aplanadas\n"+
    "*1 paquete de pan molido\n"+
    "*6 cucharadas de queso parmesano\n"+
    "*Perejil lavado y finamente picado\n"+
    "*2 huevos ligeramente batidos\n"+
    "*1/4 de taza de leche\n"+
    "*Aceite de maíz\n"+
    "*sal y pimienta\n",
    Procedure:"1:Mezclar el pan molico con el queso parmesano y el perejil.\n"+
    "2:Revuelve el huevo con la leche, salpimienta y sumerge las milanesas.\n"+
    "3:Empanizar las milanesas y frielas en suficiente aceite y déjarlas escurrir.\n"+
    "4:Sirvelas con arroz y verduras.\n",
    CountIngredients:5,
    filepath: "../../../assets/ImgRecipes/MilanesaCordon.png",
    webviewPath: "../../../assets/ImgRecipes/MilanesaCordon.png"
  },{//FACIL
    id:"M:9",
    Name:"Ejotes con huevo",
    Portions:"1 Persona",
    Ingredients:"*3/4 de kilo de ejotes picados y cocidos\n"+
    "*2 Cucharadas de aceite\n"+
    "*1 Cebolla finamente picada\n"+
    "*2 Huevos ligeramente batidos\n"+
    "*Sal y pimienta, al gusto\n",
    Procedure:"1:Escurra perfectamente los ejotes.\n"+
    "2:En una cacerola caliente el aceite y frie la cebolla hasta que tenga un tono translúcido.\n"+
    "3:Agregue los ejotes y vierta el huevo.\n"+
    "4:Cocine a fuego bajo hasta que el huevo se seque.\n",
    CountIngredients:0,
    filepath: "../../../assets/icon/HuevoEjotes.png",
    webviewPath: "../../../assets/icon/HuevoEjotes.png"
  },{//FACIL
    id:"M:10",
    Name:"Papas con longaniza o chorizo",
    Portions:"+5 Personas",
    Ingredients:"*1 kilo de longaniza o chorizo\n"+
    "*2 cebollas finamente picadas\n"+
    "*1 kilño de papas cocidas y peladas\n"+
    "*Sal al gusto\n",
    Procedure:"1:Fría la longaniza o el chorizo hasta dorarla ligeramente.\n"+
    "2:Agregue la cebolla y friela por unos minutos.\n"+
    "3:Agregue las papas y agrege sal al gusto.\n"+
    "4:Deje dorar ligeramente.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/PapasLonganiza.png",
    webviewPath: "../../../assets/ImgRecipes/PapasLonganiza.png"
  },{
    id:"M:11",
    Name:"Pollo al vino",
    Portions:"+5 Personas",
    Ingredients:"*1/2 taza de tocino picado\n"+
    "*1 1/2 tazas de vino tinto\n"+
    "*1/4 de taza de brandy\n"+
    "*4 cucharadas de pasta de jitomate\n"+
    "*Oregano, al gusto\n"+
    "*2 hojas de laurel\n"+
    "*Tomillo al gusto\n"+
    "*Sal y pimienta, al gusto\n"+
    "*2 dientes de ajo finamente picado\n"+
    "*24 cebollitas de cambray sin rabo\n"+
    "*2 tazas de champiñones medianos\n"+
    "*6 piernas con muslo\n",
    Procedure:"1:Coloque el tocino en un recipiente hondo para microondas.\n"+
    "2:Cocínelo a alta potencia durante un minuto o hasta que este dorado.\n"+
    "3:Saque el tocino y apartelo.\n"+
    "4:Sobre la grasa que quedo agregueel vino, la pasta de jitomate, el oregano, laurel, tomillo, sal, pimienta, ajo, cebollitas y champiñones.\n"+
    "5:Tape y cocine a temperatura mediana durante 10 minutos revolviendo a la mitad de la cocción.\n"+
    "6:Agregue el tocino, las piezas de pollo.\n"+
    "7:Procure que las piezas queden bien cubiertas con la salsa.\n"+
    "8:Tape y cocine a durante 10 minutos o hasta que el pollo este tierno.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/PolloVino.png",
    webviewPath: "../../../assets/ImgRecipes/PolloVino.png"
  },{//MICROONDAS
    id:"M:12",
    Name:"Albondigon",
    Portions:"+5 Personas",
    Ingredients:"*1 kilo de carne de res, molida\n"+
    "*1 cebolla finamente picada\n"+
    "*1 taza de pimiento morrón verde\n"+
    "*2 huevos ligeramente batidos\n"+
    "*1/2 bolillo remojado en una taza de leche\n"+
    "*3 cucharadas de perejil finamente picados\n"+
    "*Sal y pimienta, al gusto\n"+
    "*1 taza de champiñones rebanados\n"+
    "*1 cucharadita de royal\n"+
    "*1/2 taza de jamón cocido, finamente picado"+
    "*4 cucharadas de salsa catsup\n"+
    "*4 tiras de tocino\n",
    Procedure:"1:Revuelva todos los ingredientes excepto la salsa catsup y el tocino.\n"+
    "2:Colóquelos sobre un molde para panqué especial para microondas ligeramente enmantequillado.\n"+
    "3:Unte la salsa catsup y coloque las rebanadas de tocino.\n"+
    "4:Cocínelo tapando durante 5 minutos.\n"+
    "5:Rote el molde  y cocínelo dutante 5 minutos más.\n"+
    "6:Destápelo y cocínelo durante 8 minutos.\n"+
    "7:Deje reposar 5 minutos y sírvalo.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/Albondigon.png",
    webviewPath: "../../../assets/ImgRecipes/Albondigon.png"
  },{//Horno
    id:"M:13",
    Name:"Papas rojas gratinadas",
    Portions:"+5 Personas",
    Ingredients:"*5 Papas\n"+
    "*20 gramos de harina\n"+
    "*60 gramos de mantequilla o margarina\n"+
    "*Sal\n"+
    "*Pimienta\n"+
    "*Paprika\n"+
    "*300 ml de leche\n"+
    "*Un ramito de tomillo para adornar\n",
    Procedure:"1:Precalentar el horno a 180°C. Lavar bien las papas y cortar en rebanadas de 6 mm con un cuchillo. \n"+
    "2:Colocar las rebanadas sobre papel de cera y espolvorear con harina. Revolver suavemente para cubrirlas.\n"+
    "3:Untar con una cucharada de mantequilla en un molde redondo de aproximadamente de 22 cm.\n"+
    "4:Con 1/3 de las papas crear una capa en el molde espolvoreando sal, pimienta y prapika al gusto. Salpicar con 1 cucharada de mantequilla.\n"+
    "5:Hacer otras 2 capas iguales.\n"+
    "6:Calentar la leche en una olla a fuego medio hasta que este caliente pero sin que llegue a hervir.\n"+
    "7:Vertir sobre las papas. Espolvoreando sal, pimienta y prapika al gusto. Cubrir con una tapa o con papel aluminio.\n"+
    "8:Hornear 35 minutos. Destapar y hornear 20 minutos más o hasta que las papas estén tiernas y no demasiado hechas.\n"+
    "9:Adornar con el ramito de tomillo si se quiere. Servir\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/PapasGratinadas.png",
    webviewPath: "../../../assets/ImgRecipes/PapasGratinadas.png"
  },{//FACIL
    id:"M:14",
    Name:"Papas suizas",
    Portions:"4 Personas",
    Ingredients:"*4 Papas grandes\n"+
    "*60 gramos de mantequilla o margarina\n"+
    "*Sal y pimienta\n"+
    "*Trozos de jitomates y ramitos de romero para adornar (OPCIONAL)\n",
    Procedure:"1:Lavar muy bien las papas. En una olla con agua a fuego alto agregar las papas y cocer hasta que las papas esten suaves. Atravezar las papas con un cuchillo o con tenedor para comprobar que en el interior este blando.\n"+
    "2:Dejar que se enfrien y pelar las papas. Utilizando un rallador rallar las papas.\n"+
    "3:Calentar la mantequilla en un sartén a fuego medio hasta que se derrita.\n"+
    "4:Extender la papa rallada uniformemente en el salten (No revolver ni dar vuelta) Agregar sal y pimienta al gusto. Cocinar 10 a 12 minutos hasta que se dore.\n"+
    "5:Apagar el fuego. Con un recipiento o un plato invertir la cara de la papa sobre el sarten. Dejar dorar y servir.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/PapasSuizas.png",
    webviewPath: "../../../assets/ImgRecipes/PapasSuizas.png"
  },{//Microondas || FACIL
    id:"M:15",
    Name:"Patatas gajo",
    Portions:"3 Personas",
    Ingredients:"*500 gramos de papas\n"+
    "*1 cucharada de ajo en polvo\n"+
    "*1 cucharada de cebolla en polvo\n"+
    "*1 cucharada de hierbas provenzales (Hierbas finas)\n"+
    "*1 cucharada de paprika\n"+
    "*1 pizca de pimienta negra recién molida\n"+
    "*1 chorro de aceite de oliva\n"+
    "*1 pizca de sal\n",
    Procedure:"1:Pelar las papas con un pelador de verduras.\n"+
    "2:Con un cuchillo de cocina cortar cada papa a la mitad y cada mitad partirla por la mitad.\n"+
    "Si tienes papas muy grandes, seguir cortando por la mitad hasta que obtengas el tamaño mas pequeño o un tamaño deseado.\n"+
    "3:En un recipiente  añadir las papas y mezclar con las hierbas, el ajo en polvo, la cebolla en polvo, la paprika, una pizca de pimienta.\n"+
    "4:Poner las papas ya mezcladas con las especias en un recipiente para microondas y añadir un chorrito pequeño de aceite de oliva y mezclar\n"+
    "5:Tapar el recipiente con un papel film transparente y poner a calentar en el microondas por 5 minutos\n"+
    "6:Al terminar los 5 minutos, retirar con mucho cuidado el papel procurando de no qumarse con el vapor que salga, ya que estara muy caliente.\n"+
    "7:Revolver con una cuchara las papas y volver a cubrir con  el papel film. volver a cocinar por 5 minutos o hasta que las papas este suaves.\n"+
    "8:Retirar con mucho cuidado el papel y añadir un poco de sal, al gusto.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/PapasGajo.png",
    webviewPath: "../../../assets/ImgRecipes/PapasGajo.png"
  }]

  beverege=[{
    id:"B:1",
    Name:"Cafe a la vienesa",
    Portions:"4 Personas",
    Ingredients:"*240 g de Crema doble (Crema para batir).\n"+
    "*1 Cucharada de azúcar glas.\n"+
    "*1 Barra de chocolate amargo o semidulce.\n"+
    "*750 ml de cafe expresso o cafe recien hecho.\n"+
    "*60 ml de licor de cafe.\n",
    Procedure:"1:En un recipiente colocar la crema y batir con una batidora electronica hasta que empieze a espezar, añadir 1 cucharada de azúcar glas.\n"+
    "2:Para hacer los adornos del chocolate, con un raspador (Pelapapas) pasar sobre el chocolate hasta tener varias tiras. Romper en pedazos el resto de chocolates.\n"+
    "3:Colocar 80 g de crema en una olla y poner a fuego lento. Añadir pedazos de chocolates y retirar hasta que el chocolate se derrita.\n"+
    "4:Revolver hasta que esté sin grumos.\n"+
    "5:Añadir el cafe caliente a la mezcla del chocolate.\n"+
    "6:Añadir el licor de cafe\n"+
    "7:Verter en las tazas y colocar la crema batida encima y adornar con las raspaduras de chocolate\n",
    CountIngredients:5,
    filepath: "../../../assets/ImgRecipes/CafeVienesa.png",
    webviewPath: "../../../assets/ImgRecipes/CafeVienesa.png"
  },{
    id:"B:2",
    Name:"Jugo de mandarina y Jengibre",
    Portions:"2 Personas",
    Ingredients:"*6 Mandarinas\n"+
    "*1 cm de raiz de jengibre\n"+
    "*1/4 de papaya chica\n",
    Procedure:"1:Pelas las mandarinas y cortar el jengibre.\n"+
    "2:En la licuadora añadir todos los ingredientes.\n"+
    "*El jugo de mandarina es un buen protector para la salud\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/JugoMandarina.png",
    webviewPath: "../../../assets/ImgRecipes/JugoMandarina.png"
  },{//FACIL 
    id:"B:3",
  Name:"Jugo Con Vitamina C",
  Portions:"1 Persona",
  Ingredients:"*1/2 taza de Jitomates picados \n"+
  "*1/2 taza de jugo de naranja\n"+
  "*1 cucharadita de jugo de limón\n"+
  "*1 cucharadita de miel\n",
  Procedure:"1:Lavar bien los jitomates\n"+
  "2:Agregar todos los ingredientes al vaso de la licuadora hasta que tenga una preparación homogénea.\n"+
  "*Un impulso para el sistema inmunitario corporal rico en vitamina C.\n",
  CountIngredients:0,
  filepath: "../../../assets/ImgRecipes/JugoVitaminaC.png",
  webviewPath: "../../../assets/ImgRecipes/JugoVitaminaC.png"
  },{
    id:"B:4",
    Name:"Licuado de Fresa-Kiwi",
    Portions:"1 persona",
    Ingredients:"*1 Kiwi maduro y pelado\n"+
    "*1 taza de fresas en rodajas\n"+
    "*1 taza de leche soya o agua\n",
    Procedure:"1:Licuar todos los ingredientes y disfrutar.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/LicuadoFresaKiwi.png",
    webviewPath: "../../../assets/ImgRecipes/LicuadoFresaKiwi.png"
  },{//FACIL
    id:"B:5",
    Name:"Jugo de fresa y naranja",
    Portions:"+5 Personas",
    Ingredients:"*1/2 kilo de fresas\n"+
    "*1 litro de jugo de naranja\n",
    Procedure:"1:Licue las fresas con el jugo de naranja.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/JugoFresaNaranja.png",
    webviewPath: "../../../assets/ImgRecipes/JugoFresaNaranja.png"
  },{//FACIL
    id:"B:6",
    Name:"Batido de fresa",
    Portions:"4 Personas",
    Ingredients:"*500 gramos de fresa\n"+
    "*400 ml de leche\n"+
    "*30 gramos de azúcar\n",
    Procedure:"1:Lavar muy bien las fresas, cortar las hojas y retirar el tallo.\n"+
    "2:Agregar la fresa a la licuadora, añadir el azucar y la leche.\n"+
    "3:Batir hasta que quede completamente liquida.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/BatidoFresa.png",
    webviewPath: "../../../assets/ImgRecipes/BatidoFresa.png"
  },{//FACIL FRIO
    id:"B:7",
    Name:"Granizado de sandía",
    Portions:"2 Personas",
    Ingredients:"*250 gramos de sandia\n"+
    "*150 gramos de hielo en cubos\n"+
    "*Azucar (OPCIONAL)\n"+
    "*Jugo de limón\n"+
    "*Hojas de menta (OPCIONAL)\n",
    Procedure:"1:Cortar la sandia en cubos, retirando las semillas y la cascara de la sandia.\n"+
    "2:Dejar reposar la sandia en el refrigerador hasta que este congelada. \n"+
    "3:Cuando la sandia se encuentre congelada, agregarla en la licuadora la sandia, el hielo, el jugo de limón y el azúcar, hasta tener una textura granizado.\n"+
    "4:Servirlo en un vaso y decorar con las hojas de menta.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/GranizadoSandia.png",
    webviewPath: "../../../assets/ImgRecipes/GranizadoSandia.png"
  },{//FRIO
    id:"B:8",
    Name:"Batido de moras y durazno",
    Portions:"1 Persona",
    Ingredients:"*9 moras\n"+
    "*1 durazno\n"+
    "*50 ml de agua\n"+
    "*1 cubo de hielo\n"+
    "*1 hoja de menta (OPCIONAL)\n",
    Procedure:"1:lavar muy bien la fruta.\n"+
    "2:En la licuadora mezclar las moras y el durazno, colar si no se quiere sentir las semillas.\n"+
    "3:Batir la mezcla de las frutas con el agua y el hielo. Servir en un vaso\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/BatidoMoraDurazno.png",
    webviewPath: "../../../assets/ImgRecipes/BatidoMoraDurazno.png"
  },{
    id:"B:9",
    Name:"Jugo de jitomate y apio",
    Portions:"1 Persona",
    Ingredients:"*6 jitomates\n"+
    "*2 apios\n",
    Procedure:"1:Lavar perfectamente los ingredientes.\n"+
    "2:icuar los ingredientes sin las hojas del apio.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/BatidoJitomateApio.png",
    webviewPath: "../../../assets/ImgRecipes/BatidoJitomateApio.png"
  },{//FACIL
    id:"B:10",
    Name:"Jugo de jitomate",
    Portions:"1 Persona",
    Ingredients:"*2 jitomates\n"+
    "*1 taza de agua\n"+
    "*1 limón\n",
    Procedure:"1:Lavar muy bien lo jitomates y cortarlos en cuatro partes.\n"+
    "2:Licuar con un poco de agua. Se podria agregar un poco mas, dependiendo de la consistencia que se desea obtener.\n"+
    "3:Añadir el jugo de limon para darle sabor.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/CafeVienesa.png",
    webviewPath: "../../../assets/ImgRecipes/CafeVienesa.png"
  },{//CALIENTE
    id:"B:11",
    Name:"Atole de Mazapán",
    Portions:"+5 Personas",
    Ingredients:"*4 tazas de leche\n"+
    "*1 taza de agua\n"+
    "*1/2 taza de leche evaporada\n"+
    "*1/2 taza de leche condensada\n"+
    "*5 mazapanes\n"+
    "*5 cucharadas de fécula de maíz\n"+
    "*1 raja de canela\n",
    Procedure:"1:En la licuadora agregar la leche, el agua, la leche evaporada, leche condensada, los mazapanes y la fécula de maíz.\n"+
    "2:Licuar hasta conseguir una mezcla homogénea.\n"+
    "3:Colocar la mezcla en una olla y calienta a fuego medio.\n"+
    "4:Agrega la canela y cocina hasta que espese.\n"+
    "5:Servir el atole\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/CafeVienesa.png",
    webviewPath: "../../../assets/ImgRecipes/CafeVienesa.png"
  },{//CALIENTE
    id:"B:12",
    Name:"Atole de Oreo",
    Portions:"+5 Personas",
    Ingredients:"*1/2 taza de agua\n"+
    "*6 tazas de leche\n"+
    "*25 galletas de oreo\n"+
    "*2 cucharadas de fécula de maíz o Maicena\n"+
    "*1 vara de canela\n",
    Procedure:"1:Disolver la fécula de maiz en media taza de agua\n"+
    "2:Calentar la leche con la canela hasta que comience a hervir.\n"+
    "3:En la licuadora agregar las galletas hasta que estren trituradas. Agregar 2 tazas de leche caliente.\n"+
    "4:En una olla agregar la fécula y la mezcla de las galletas.\n"+
    "5:Calienta el atole moviendo constantemente para evitar que se pegue en el fondo.\n"+
    "6:Servir.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/CafeVienesa.png",
    webviewPath: "../../../assets/ImgRecipes/CafeVienesa.png"
  },{//CALIENTE
    id:"B:13",
    Name:"Té de canela",
    Portions:"+5 Personas",
    Ingredients:"*1 litro de agua\n"+
    "*3 rollitos de canela\n"+
    "*\Azucar (OPCIONAL)\n",
    Procedure:"1:En una olla agregar un litro de agua y poner al fuego\n"+
    "2:Cuando el agua este apunto de hervir agregar los 3 rollitos de canela y dejar por 4 minutos. \n"+
    "3:Dejar reposar por 5 minutos.\n"+
    "4:Servir y agregar el azucar si lo deseas.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/CafeVienesa.png",
    webviewPath: "../../../assets/ImgRecipes/CafeVienesa.png"
  },{//CALIENTE
    id:"B:14",
    Name:"Blackberry Hot Chocolate",
    Portions:"2 Personas",
    Ingredients:"*16 moras\n"+
    "*2 cucharadas de azucar\n"+
    "*1/2 cucharada de vainilla\n"+
    "*3 tazas de leche\n"+
    "*1 barra Chocolate amargo\n"+
    "*2 cucharadas de agua\n"+
    "*Crema batida (OPCIONAL)\n"+
    "*Malvadisco (OPCIONAL)\n",
    Procedure:"1:Para preparar el coulis de moras, en un sarten cocine las moras, la azucar y las 2 cucharadas de agua en fuego moderado, hasta que las moras esten blandas.\n"+
    "2:En un recipiente empuje y machacar el contenido del sarten a traves de un colador o si lo prefieres puedes utilizar la licuadora y depositar el contenido utilizando un colador. Desechar lo que quede en el colador.\n"+
    "3:Caliente la leche hasya que esté hirviendo. Mientras se calienta la leche pica el chocolate y colocalos en la licuadora.\n"+
    "4:En la licuadora con el chocolate agrege la vainilla y la leche.\n"+
    "5:Si al finalizar deseas adornar con crema batida reserva 1 cucharada del coulis de mora y vierta el resto en la licuadora. Si no deseas adornar vierta todo el coulis de mora.\n"+
    "6:mezcla hasta que el chocolate se derrita y la bebida este espumosa.\n"+
    "7:Vierta en tazas y adornar , si lo deseas, con crema batida, malvavisco, una cucharada del coulis y 1 mora por taza.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/CafeVienesa.png",
    webviewPath: "../../../assets/ImgRecipes/CafeVienesa.png"
  },{//CALIENTE FACIL
    id:"B:15",
    Name:"Chocolate caliente rosa",
    Portions:"2 Personas",
    Ingredients:"*2 tazas de leche\n"+
    "*1/2 cucharada de vainilla\n"+
    "*1/2 barra de chocolate blanco\n"+
    "*3 a 5 gotas, dependiendo de la tonalidad deseada, de colorante rosa\n"+
    "*Crema batida (OPCIONAL)\n"+
    "*Chispas de chocolates de colores(OPCIONAL)\n",
    Procedure:"1:En una cacerola pequeña, hervir la leche a fuego lento.\n"+
    "2:Agregar la vainilla y el chocolate. Mezclar por aproximadamente 1 minuto hasta que el chocolate se derrita por completo.\n"+
    "3:En un vaso agregar la leche ya con el chocolate derretido. Agregar la crema batida y adornar con las chispas de chocolate,\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/CafeVienesa.png",
    webviewPath: "../../../assets/ImgRecipes/CafeVienesa.png"
  }]

  
  Dessert=[{//FACIL || FRIO
    id:"D:1",
  Name:"FLAN de chocolate con canela",
  Portions:"+5 Personas",
  Ingredients:"*1 1/2  tazas de azúcar\n"+
  "*1 Cucharadita de canela en polvo\n"+
  "*150g de chocolate amargo en trozos\n"+
  "*1 1/4 de tazas de crema para batir\n"+
  "*4 Huevos\n"+
  "*1/2 taza de leche\n",
  Procedure:"1:Engrasar en un molde o moldecitos para el flan con mantequilla derretida o aceite\n"+
  "2:Para el caramelo colocar en una olla de fondo grueso 1 1/2 tazas de azúcar y 1 cucharada de canela en polvo\n"+
  "3:Dejar al fuego hasta que se haga un caramelo de color ámbar\n"+
  "4:Vaciar el caramelo en el molde o moldes moviendo hacia las paredes\n"+
  "5:Derretir el cocholate junto con la crema a baño Maria\n"+
  "6:Cuando ya se encuentre derretido dejar enfriar y licuar con el resto de los ingredientes\n"+
  "7:Vaciar en el recipiente con el caramelo hasta 3/4 de su capacidad, taparlo con aluminio y colócarlo en una bandeja con agua caliente\n"+
  "8:Hornear a 200°C una hora o hasta que le insertes un palillo y éste salga limpio\n"+
  "9:Retirar del baño María y dejar enfriar para que las puedas refrigerar\n"+
  "10:Una vez frio desmoldar y servir\n",
  CountIngredients:6,
  filepath: "../../../assets/ImgRecipes/FlanChocolate.png",
  webviewPath: "../../../assets/ImgRecipes/FlanChocolate.png"
  },{//FRIO
    id:"D:2",
  Name:"Sándwiches de helado tradicionales",
  Portions:"+5 Personas",
  Ingredients:"*60g de chocolate semidulce picado grueso\n"+
  "*210g de harina\n"+
  "*1/4 cucharadas de polvo para hornear\n"+
  "*1/4 de cuchara de sal\n"+
  "*115g de mantequilla o margarina\n"+
  "*100g de azucar\n"+
  "*1 huevo\n"+
  "*1 cucharada de vainilla\n"+
  "*Helado de vainilla o de menta, ablandado\n",
  Procedure:"1:Poner el chocolate en un vaso y colocarlo en el microondas por 1 a 4 minutos o hasta que se derrita el chocolate, y revolver.\n"+
  "2:Colocar la harina, los polvos de hornear y la sal en un recipiente pequeño, y mezclar.\n"+
  "3:Con una batidoira eléctrica a velocidad media, batir la mantequilla y la azúcar hasta que se note liviana.\n"+
  "4:Añadir el huevo y la vainilla, batir y Poco a poco agregar el chocolate. Añadir la harina y continuar mezclando.\n"+
  "5:Moldera la masa formando 2 discos y envolver con plástico y regrigerar, por lo menos 2 horas hasta que esté firme.\n"+
  "6:Precalentar el horno a 180°C y untar con ??? en una charola para el horno\n"+
  "7:Desenvolver 1 pesazo de la masa, colocar entre 2 hojas de papel de cera y estirar con el rodillo hasta que tenga un grosor de 3 a 6 mm.\n"+
  "8:Sacar la hoja superior de papel de cera y volcar la masa sobre la chapa de horno previmante preparada.\n"+
  "9:Con un cuchillo cortar la masa en un rectángulos de 7 X 5 cm. Sacar los pedacitos de masa sobrantes de las orillas y agregarlas al segundo disco y repetir los pasos 7,8 y 9 hasta ocupar toda la masa\n"+
  "10:Hornear por 10 minutos o hasta que cuajen y dejar resposar las galletas hasta que se enfrien bien\n"+
  "11:A la mitad de las galletas, extender el helado sobre el lado plano y colocar la otra mitad de las galletas enfrente.\n"+
  "12:Servir inmeditamnete o envolver en una hoja plastica y congelar por un máximo de 1 mes.\n",
  CountIngredients:9,
  filepath: "../../../assets/ImgRecipes/SandwichesHelado.png",
  webviewPath: "../../../assets/ImgRecipes/SandwichesHelado.png"
  },{
    id:"D:3",
  Name:"Arroz con leche y chocolate",
  Portions:"+5 Personas",
  Ingredients:"*500 ml de agua\n"+
  "*220 g de arroz sin cocer\n"+
  "*2 cucharadas de mantequilla\n"+
  "*60 g de azúcar\n"+
  "*2 cucharaditas de maizena\n"+
  "*500 ml de leche\n"+
  "*1/2 cucharadita de vainilla\n"+
  "*2 yemas\n"+
  "*80 g de pedacitos de chocolate semidulce\n"+
  "*Crema batida\n"+
  "*Cacao en polvo sin azúcar y galletas para adornar\n",
  Procedure:"1:Calentar el agua hasta que este apunto de hervir, añadir el arroz y la mantequilla.\n"+
  "2:Bajar el fuego y hervir a fuego lento por 20 minutos, retirar del fuego y dejar en reposo unos 5 minutos hasta que absorba todo el liquido.\n"+
  "3:Mezclar el azúcar y la maizena en un recipiente pequeño y agregar el arroz caliente en la olla. Añadir la leche y revolver\n"+
  "4:Llevar la mezcla a punto de hervir revolviendo de vez en cuando.\n"+
  "5:Cuando hierva dejar por 1 minuto y revolviendo contantemente. Retirar del fuego, añadir la vainilla y revolver.\n"+
  "6:Batir las yemas en un recipiente pequeño y agregar alrededor de 250 ml de la mezcla de arroz caliente a las yemas batidas.\n"+
  "7:Volver a colocar la mezcla de las yemas en el resto de la mezcla del arroz que está en la olla.\n"+
  "8:Cocer la mezcla del arroz a fuego medio, revolviendo frecuentemente, justo hasta que se empiecen a formar burbujas.\n"+
  "9:Retirar del fuego, agregar los pedacitos de chocolate y revolver hasta que se derritan.\n"+
  "10:Colocar en platos individuales para servir y refrigerar\n"+
  "11:Meter la crema batida en una manga para respostería con boquilla de estrella grande y decorar cada plato de arroz.\n"+
  "12:Espolvorear el cacao en polvo sin azúcar por un colador fino sobre cada plato.\n",
  CountIngredients:11,
  filepath: "../../../assets/icon/IconMenu.png",
  webviewPath: "../../../assets/icon/IconMenu.png"
  },{
    id:"D:4",
    Name:"Brownis de naranja a lo capuchino",
    Portions:"+5 Personas",
    Ingredients:"*2 naranjas\n"+
    "*175 g de mantequilla\n"+
    "*60 g de chocolate semidulce\n"+
    "*60 g de chocolate de taza \n"+
    "*360 g de azúcar\n"+
    "*1 cucharada de café expreso instantaneo en polvo\n"+
    "*3 Huevos\n"+
    "* 60 ml de licor con sabor a naranja\n"+
    "* 140 g de harina\n"+
    "*1 paquete (360 g) de chocolate semidulce\n"+
    "*2 cucharadas de manteca\n",
    Procedure:"1:Precalentar el horno a 180°C. Untar con manteca una bandeja de horno de 32.5 X 22.5 cm\n"+
    "2:rallar fino la parte de color de la cáscara de una naranja con un rallador tipo caja o de los planos. Medir 2 cucharaditas de cáscara de naranja y reservar.\n"+
    "3:En una olla grande y pesada derretir a fuego lento el chocolate semidulce y el de taza picados, revolviendo constantemente. Añadir la azúcar y el cafe expreso en polvo y revolcer.Retirar del fuego y dejar enfria un poco\n"+
    "4:Agregar los huevos y batir, 1 a la vez, con batidor de rejilla. Batiendo siempre, añadir licor y la cáscara de naranja.\n"+
    "5:Agregar la harinaa la mezcladel chocolate y batir justo hasta que se no tenga grumos. Extender la masa uniformemente en la bandeja de horno previamente preparada.\n"+
    "6:Hornear por 25 a 30 minutos o hasta que cuaje en el medio. Retirar la bandeja con masa del horno y colocar sobre una rendija metalica.\n"+
    "7:Mientras tanto, derretir los pedacitos de chocolate con la manteca en una olla pequeña a fuego lento, revolviendo constantemente.\n"+
    "8:Inmediatamente despues de sacar los brownies del horno, mientras estén todavia calientes untarlos con la mezcla de chocolate caliente. Enfriar por completo en la bandeja sobre una rejilla metálica y cortar en cuadros de 5 cm.\n"+
    "9:(OPCIONAL) Hacer un adorno de cáscara de naranja sacando delgadas tiras de cáscaraa de la naranja que queda utilizando un rallador. Atar estas tiras en nudos o retorcer formando espirales, como adorno.\n",
    CountIngredients:5,
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  },{
    id:"D:5",
  Name:"Dulce de durazno",
  Portions:"4 Personas",
  Ingredients:"*6 cerezas\n"+
  "*1 lata de media crema\n"+
  "*1 lata de duraznos en almíbar, escurridos\n"+
  "*1 taza de crema para batir\n"+
  "*1 cucharada de azucar glass\n",
  Procedure:"1:Licua la media crema con los duraznos hasta obtener una mezcla suave y apartar\n"+
  "2:Batir la crema avelocidad media durante 1 minuto. Sin dejar de batir, agregar el azucar glass poco a poco y continuar batiendo hasta que la mezcla esté bien firme y cuando levantes el batidor, la punta se mantenga en su lugar sin caerse.\n"+
  "3:Integra la mezcla de duraznos a la crema batida.\n"+
  "4:Vierte el contenido en copas o el recipiente que usaras. Refrigerar durante 1 hora.\n"+
  "5:Puedes decorar con varias rebanadas de duraznos y con las cerezas\n",
  CountIngredients:0,
  filepath: "../../../assets/ImgRecipes/DulceDurazno.png",
  webviewPath: "../../../assets/ImgRecipes/DulceDurazno.png"
  },{//FACIL
    id:"D:6",
  Name:"Taquitos de jícama",
  Portions:"4 Personas",
  Ingredients:"*2 Jicamas medianas o grandes\n"+
  "*2 Pepinos\n"+
  "*2 Mangos\n"+
  "*2 Limones\n"+
  "*Chile tajin (OPCIONAL)\n",
  Procedure:"1:Pelar las jícamas. Una jícama cortar en tiritas y la otra cortar en rebanadas muy finas.\n"+
  "2:Pelar los pepinos y los mangos. Cortarlas en tiras delgadas. Al pepino retirar las semillas.\n"+
  "3:Para preparar los taquitos, enrollar las tiras de pepino, mango y jícama con las rebanas de jícamas.\n"+
  "4:Colocalos muy juntos en un plato, rociar con el jugo de limón y el chile al gusto.\n",
  CountIngredients:0,
  filepath: "../../../assets/ImgRecipes/TacosJicama.png",
  webviewPath: "../../../assets/ImgRecipes/TacosJicama.png"
  },{
    id:"D:7",
  Name:"Postre de Naranja",
  Portions:"4 Personas",
  Ingredients:"*3 Huevos\n"+
  "*6 Cucharadas de azúcar\n"+
  "*7 Naranjas\n"+
  "*2 Cucharas de fécula de maíz (tambien conocido como almidón de maíz o maicena)\n"+
  "*1 Cucharada de licor de naranja (OPCIONAL)\n",
  Procedure:"1:Bate las yemas con el azúcar hasta que tomen un color amarillo pálido.\n"+
  "2:De 6 naranjas extraer el jugo y utilizar un pelador o rallador para obtener la ralladura 1 naranja.\n"+
  "3:Añade el jugo, la ralladura, la fécula de maíz y el licor de naranja. Batir hasta que no tenga grumos.\n"+
  "4:HIerva la mezcla anterior. cuando espese, retirar del fuego y esperar a que enfrie.\n"+
  "5:Batir las claras a punto de nieve.\n"+
  "6:Con movimiento suaves mezclar las claras a la mezcla de naranja.\n"+
  "7:Vierte la preparación en copas y refrigere durante 2 horas.\n",
  CountIngredients:0,
  filepath: "../../../assets/ImgRecipes/PostreNaranja.png",
  webviewPath: "../../../assets/ImgRecipes/PostreNaranja.png"
  },{//HORNO
    id:"D:8",
  Name:"Tarta de frambuesas",
  Portions:"+5 Personas",
  Ingredients:"*1/2 taza de harina\n"+
  "*1/2 taza de nueces picadas\n"+
  "*1/4 de taza de azúcar\n"+
  "*1 pizca de sal\n"+
  "*90 gr de mantequilla\n"+
  "*1 yema de huevo\n"+
  "*1/2 cucharada de vainilla\n"+
  "*3 cucharadas de mermelada de frambuesa\n"+
  "*2 tazas de frambuesas lavadas\n",
  Procedure:"1:Precalerntar el horno a 190°C.\n"+
  "2:En un procesador de alimentos mezclar la harina, las nueces, el azúcar y la sal.\n"+
  "3:Agregar la mantequilla y muele hasta obtener una consistencia arenosa.\n"+
  "4:Agregar la yema y la vainilla en el procesador de alimentos la mezcla anterior hasta obtener una masas.\n"+
  "5:Refrigerar durante 30 minutos.\n"+
  "6:Engrasar una charola para el horno.\n"+
  "7:Hecharle harina a la masa para que no se pegue y estirarla sobre una superficie plana.\n"+
  "8:Con un molde ciruclar, cortar la masa del tamaño deseado.\n"+
  "9:Untala con dos cucharadas de mermelada de frambuesa.\n"+
  "10:Hornear 20 minutos o hasta que esté ligeramente dorada.\n"+
  "11:Dejarla enfriar, untar el resto de la mermelada.\n"+
  "12:Cubre la superficie con frambuesas.\n"+
  "13:Si lo deseas, decorar con azúcar glass espolvoreada.\n"+
  "*\n",
  CountIngredients:0,
  filepath: "../../../assets/ImgRecipes/TartaFrambuesas.png",
  webviewPath: "../../../assets/ImgRecipes/TartaFrambuesas.png"
  },{//MICROONDAS FACIL
    id:"D:9",
    Name:"Esquites",
    Portions:"+5 personas",
    Ingredients:"*50 gramos de manteca de puerco\n"+
    "*1 cebolla finamente picada\n"+
    "*Chile serrano picado al gusto\n"+
    "*6 elotes tiernos desgranados\n"+
    "*Sal, al gusto\n"+
    "*Epazote finamente picado\n",
    Procedure:"1:Poner la manteca en un recipiente para microondas y cocinar durante 2 minutos.\n"+
    "2:Agregar la cebolla y el chile. Cocinar un minuto mas.\n"+
    "3:añadir los elotes y tape el recipiente. Cocinar durante 6 minutos, revolviendo a mitad de cocción.\n"+
    "4:Añadir el epazote, destape y cocine durante otros 3 minutos o hasta que el elote esté cocido.\n"+
    "5:Añadir sal al gusto.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/JugoVitaminaC.jpg",
    webviewPath: "../../../assets/icon/IconMenu.png"
  },{//MICROONDAS
    id:"D:10",
  Name:"Flan de queso",
  Portions:"3 Personas",
  Ingredients:"*200 gramos de queso philadelphia\n"+
  "*370 gramos de leche condensada\n"+
  "*4 huevos\n"+
  "*500 ml de lec he\n"+
  "*4 cucharadas de caramelo liquido\n"+
  "*1 cucharadita de esencia de vainilla\n",
  Procedure:"1:En un recipiente mezclar el queso, los 4 huevos, añadir la leche condensada, la leche, la esencia de vainilla hasta que quede bien mezclado.\n"+
  "2:En un recipiente para microondas poner el caramelo líquido en el fondo del molde.\n"+
  "3:Poner la mezcla en el recipiente para microondas y calentarlo por 15 minutos o hasta que este cuajado en el centro, picar con un calillo y si esta liquido poner por 5 minutos más o el tiempo que haga falta hasta que ya no este liquido.\n"+
  "4:Dejar enfriar completamente antes de llevarlo al refrigerador. \n"+
  "5:Dejar reposar por un minimo de 4 horas.\n",
  CountIngredients:0,
  filepath: "../../../assets/ImgRecipes/JugoVitaminaC.jpg",
  webviewPath: "../../../assets/icon/IconMenu.png"
  }]

  AlcoholicDrink=[{
    id:"A:1",
    Name:"Margarita de maracuyá",
    Portions:"1 Persona",
    Ingredients:"*45ml de tequila\n"+
    "*22 ml de licor de naranja\n"+
    "*15 ml de jugo de limon\n"+
    "*89 ml de pulpa de maracuyá\n"+
    "*Sal\n"+
    "*1 rodaja de limon\n",
    Procedure:"1:Escarchar el vaso con sal.\n"+
    "2:Añadir la pulpa de maracuyá,el tequila, el licor de naranja y el jugo de limon. Mezclar todos los ingredientes.\n"+
    "3:Decorar con la rodaja de limon.\n",
    CountIngredients:5,
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  },{
    id:"A:2",
    Name:"Piña Colada",
    Portions:"1 Persona",
    Ingredients:"*90 ml de zumo de piña\n"+
    "*30 ml de leche de coco\n"+
    "*30 ml de ron blanco (para la version sin alcohol remplazar por 30 ml de leche)\n"+
    "*Hielo picado\n"+
    "*1 Rodaja de piña\n",
    Procedure:"1:Mezclamos en un shaker 90ml de zumo de piña, 30 ml de leche de coco y 30 ml de ron blanco o 30 ml de leche, durante unos segundo.\n"+
    "Tambien se puede mezclar en una licuadora durante unos 5 segundos.\n"+
    "2:Añadimos el hielo picado hasta llenar el shaker o 100g de hielo picado si es en la licuadora, durante unos 5 segundos.\n"+
    "3:Servimos en una copa alta junto con el hielo y adornamos con un trozo de piña.\n",
    CountIngredients:5,
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  }]
/*
  id:":",
  Name:"",
  Portions:"",
  Ingredients:"*\n"+
  "*\n"+
  "*\n"+
  "*\n"+
  "*\n"+
  "*\n"+
  "*\n"+
  "*\n"+
  "*\n",
  Procedure:"1:\n"+
  "2:\n"+
  "3:\n"+
  "4:\n"+
  "5:\n"+
  "6:\n"+
  "7:\n"+
  "8:\n"+
  "9:\n"+
  "10:\n",
  CountIngredients:0,
  filepath: "../../../assets/icon/IconMenu.png",
  webviewPath: "../../../assets/icon/IconMenu.png"
  */

}
