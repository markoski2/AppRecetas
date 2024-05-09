import { Injectable } from '@angular/core';
import { InformationCard } from './interfaces.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  SaveInformation?:InformationCard

  Garnish=[{
    id:"G:1",
    Name:"Sopa de Spaghetti Blanco",
    Portions:"+5 Personas",
    Ingredients:"*Spaghetti\n*Adobera\n*1 o 2 Chiles poblanos (azados y rebanados)\n*2 Dientes de ajo (Picados)"+
    "*1 Knorr suiza o similar\n*1 Taza de leche\n*1 Mantequilla o Margarina\n*1/4 de Crema",
    Procedure:"1:Se coce el Spaghetti con poca sal\n2:Se muele la leche con el Knorr suiza\n3:En una cacerola se pone a derretir la mantequilla y se frien los ajos, cuando esten dorados se agregan los chiles ya rebanados"+
    "\n4:Se le agrega la leche ya que hierva un poco, se le agrega el Spaghetti (previamente se lava el Spaghetti con solo agua)\n"+
    "5:Ya que seque la leche se le apaga y ya que enfrie un pocose le agrega la crema y la adobera en cuadritos",
    CountIngredients:8,
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  },{
    id:"G:2",
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
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  },{
    id:"G:3",
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
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  },{
    id:"G:4",
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
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  },{
    id:"G:5",
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
    filepath: "../../../assets/ImgRecipes/ArrozJardinera.jpg",
    webviewPath: "../../../assets/ImgRecipes/ArrozJardinera.jpg"
  },{
    id:"G:6",
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
  filepath: "../../../assets/ImgRecipes/SpaguetiCarbonara.jpg",
  webviewPath: "../../../assets/ImgRecipes/SpaguetiCarbonara.jpg"
  },{
    id:"G:7",
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
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  },{
    id:"G:8",
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
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  }]
 
  mel=[{
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
    "1:Se lava el arroz.\n"+
    "2:Se le agrega el agua en una olla y se espera a que este caliente el agua.\n"+
    "3:Se pone media cebolla y un poco de sal.\n"+
    "4:Ya que hierva el agua se pone el arroz.\n"+
    "5:Se tapa y se pone el fuego en lo mas minimo y se deja cocer hasta que se consuma el agua.\n"+
    "6:Esperar a que seque el agua y que el arroz se esponje.\n"+
    "CHILE\n"+
    "1:En una olla se le agrega agua y se pone a coser el chile guajillo y los jitomates.\n"+
    "2:Ya que hierva, se muele en una licuadora el ajo, cebolla, los jitomates y el chile.\n"+
    "3:Se pone poco aceite en una cacerola y se frien unas rodajas de cebolla.\n"+
    "4:En la cacerola se le echa y se cuela lo que se molio anteriormente en la licuadora.\n"+
    "5:Se espera a que hierva.\n"+
    "6:Ya que hierva se le apaga y se le agrega el queso y un poco de sal.\n",
    CountIngredients:9,
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  },{
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
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  },{
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
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
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
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  },{
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
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
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
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
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
    filepath: "../../../assets/ImgRecipes/LagartinosMantequilla.jpg",
    webviewPath: "../../../assets/ImgRecipes/LagartinosMantequilla.jpg"
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
    filepath: "../../../assets/ImgRecipes/MilanesaCordon.jpg",
    webviewPath: "../../../assets/ImgRecipes/MilanesaCordon.jpg"
  },{
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
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  },{
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
    filepath: "../../../assets/ImgRecipes/PapasLonganiza.jpg",
    webviewPath: "../../../assets/ImgRecipes/PapasLonganiza.jpg"
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
    filepath: "../../../assets/ImgRecipes/PolloVino.jpg",
    webviewPath: "../../../assets/ImgRecipes/PolloVino.jpg"
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
    filepath: "../../../assets/ImgRecipes/CafeVienesa.jpg",
    webviewPath: "../../../assets/ImgRecipes/CafeVienesa.jpg"
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
    filepath: "../../../assets/ImgRecipes/JugoMandarina.jpg",
    webviewPath: "../../../assets/ImgRecipes/JugoMandarina.jpg"
  },{
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
  filepath: "../../../assets/ImgRecipes/JugoVitaminaC.jpg",
  webviewPath: "../../../assets/ImgRecipes/JugoVitaminaC.jpg"
  },{
    id:"B:4",
    Name:"Licuado de Fresa-Kiwi",
    Portions:"1 persona",
    Ingredients:"*1 Kiwi maduro y pelado\n"+
    "*1 taza de fresas en rodajas\n"+
    "*1 taza de leche soya o agua\n",
    Procedure:"1:Licuar todos los ingredientes y disfrutar.\n",
    CountIngredients:0,
    filepath: "../../../assets/ImgRecipes/LicuadoFresaKiwi.jpg",
    webviewPath: "../../../assets/ImgRecipes/LicuadoFresaKiwi.jpg"
  },{
    id:"B:5",
    Name:"Jugo de fresa y naranja",
    Portions:"+5 Personas",
    Ingredients:"*1/2 kilo de fresas\n"+
    "*1 litro de jugo de naranja\n",
    Procedure:"1:Licue las fresas con el jugo de naranja.\n",
    CountIngredients:0,
    filepath: "../../../assets/icon/IconMenu.png",
    webviewPath: "../../../assets/icon/IconMenu.png"
  }]

  
  Dessert=[{
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
  filepath: "../../../assets/ImgRecipes/FlanChocolate.jpg",
  webviewPath: "../../../assets/ImgRecipes/FlanChocolate.jpg"
  },{
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
  filepath: "../../../assets/ImgRecipes/SandwichesHelado.jpg",
  webviewPath: "../../../assets/ImgRecipes/SandwichesHelado.jpg"
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
  filepath: "../../../assets/ImgRecipes/DulceDurazno.jpg",
  webviewPath: "../../../assets/ImgRecipes/DulceDurazno.jpg"
  },{
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
  filepath: "../../../assets/ImgRecipes/TacosJicama.jpg",
  webviewPath: "../../../assets/ImgRecipes/TacosJicama.jpg"
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
  filepath: "../../../assets/ImgRecipes/PostreNaranja.jpg",
  webviewPath: "../../../assets/ImgRecipes/PostreNaranja.jpg"
  },{
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
  "11:Dejarla enfriar, untar elk resto de la mermelada.\n"+
  "12:Cubre la superficie con frambuesas.\n"+
  "13:Si lo deseas, decorar con azúcar glass espolvoreada.\n"+
  "*\n",
  CountIngredients:0,
  filepath: "../../../assets/ImgRecipes/TartaFrambuesas.jpg",
  webviewPath: "../../../assets/ImgRecipes/TartaFrambuesas.jpg"
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
