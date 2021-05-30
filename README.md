# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Respecto a su diseño](#3-respescto-a-su-diseño)
* [4. Prototipado y maquetación del proyecto](#4-Prototipado-y-Maquetación-del-proyecto)

***

## 1. Preámbulo

En Chile, entre los años 2010 y 2020, la Red Chilena contra la violencia contabilizó 637 femicidios (53.08 anual) de los cuales el 83.80% fue perpetrado por alguien que poseía un vínculo íntimo o íntimo-familiar con la víctima y en el 30% de los casos el victimario contaba con denuncias previas, incluso algunos tenían medidas cautelares –prohibición de acercamiento específicamente- (fuente: eldesconcierto.cl); y en lo que va del 2021 -al 30 de abril- se registran 12 femicidios consumados y 43 femicidios frustrados (fuente: t13.cl). 
Pero un caso llama la atención: a fines de enero de 2020 una mujer, Ivette Necul, domiciliada en Temuco  hace un llamado a carabineros y simula pedir pizza ¿el objetivo? denunciar a su esposo por violencia intrafamiliar, por suerte la oficial que atendió la llamada captó la situación y lograron detener al sujeto y atender a la mujer por las heridas que éste le propició. 

Hoy, en el mundo, existen algunas aplicaciones para que las mujeres puedan pedir ayuda -aplicaciones como alertcops o escapp disponible en otros países- y en Chile existen varios números telefónicos disponibles con ese mismo propósito, tales como:

* 133 Carabineros de Chile
* 134 PDI
* 149 Fono familia de carabineros
* 1455 Orientación de violencia contra la mujer

¿Qué problemas presentan dichas aplicaciones y números telefónicos? que pueden poner más agresivo al victimario... ¿Qué hubiese pasado si el esposo de Ivette Necul le hubiese quitado el celular y hubiese visto que en realidad llamaba al 133? la historia sería de seguro muy diferente.  
‘COCÍNALO’ pretende solucionar estas disyuntivas usando el cifrado césar. 


## 2. Resumen del proyecto

‘COCÍNALO’ es una aplicación web diseñada para que una mujer que sufre violencia -ya sea en su núcleo familiar, en su trabajo, colegio, etc- pueda pedir ayuda de forma segura pues su mensaje será cifrado y, en caso de que quien la daña le quite el móvil, éste solo verá una aplicación de cocina con letras aparentemente sin sentido y dos links, uno que lo llevará a ver algunas recetas y otro que lo llevará a una tabla de equivalencias. Si bien la aplicación estará disponible para ser descargada en cualquier dispositivo móvil y la usuaria podrá seleccionar con quien enlazarla, cumplirá su total funcionalidad (la de cifrar un mensaje por ayuda y recibir dicha ayuda) cuando sea enlazada con las autoridades; por ello al momento de la primera denuncia por violencia se le dará a conocer a la víctima esta herramienta y se enlazará con la central de carabineros de su localidad.  
Debido al propósito anteriormente expuesto la aplicación inicialmente no contaría con una opción de descifrar el mensaje ni se vería el mensaje inicial una vez enviado; pero, para cumplir con los requisitos de aceptación del proyecto, se implementaron dos botones justo abajo del mensaje a codificar llamados "ir" y "atrás" cuyas funciones son cifrar y descifrar respectivamente, además de una opción llamada "número" donde se podrá elegir la cantidad de posiciones que se desplace cada letra del mensaje tanto en números positivos como números negativos; Cocínalo además aceptará espacios, por ende es capaz de cifrar no solo una palabra sino frases completas, apareciendo éstas con otro tono de letra a fin de facilitar la diferenciación de los mensajes.

## 3. RESPECTO A SU DISEÑO

Cocínalo busca no llamar la atención de los varores (usualmente los victimarios en los casos de violencia) por ello su cifrador estará "oculto" aparentando ser una aplicación de cocina; Ésta será de colores catalogados usualmente de femeninos como el rosa y lila y tendrá dibujos de cocina  de fondo; Se implementarán además dos links, uno que llevará al usuario a 3 recetas de cocina y otro link que estará enlazado a una tabla de equivalencias de cocina para dar credibilidad a la propuesta.

## 4. Prototipado y maquetación del proyecto

En las fases iniciales del proyecto se buscó mucha información respecto de la realidad del país en temas de violencia y a las opciones de ayuda (tanto en Chile como en el extranjero); y se descubrió que, si bien exiten varias opciones, todas son bastante obvias al mostrar su propósito... cocínalo pretende mantener oculto su objetivo... 
A continuanción se muestran algunos prototipos en fase inicial de desarrollo:  

MAQUETACIÓN:

![maqueta 1](../master/src/imagenes/m1.jpg)


![maqueta 2](../master/src/imagenes/m2.jpg)


Ya hecha la maquetación, generamos un primer prototipo de baja fidelidad, con el objetivo de buscar feedback e iterar; se veía así:

![maqueta 3](../master/src/imagenes/p1.jpg)

Luego de diversos feedback generamos un prototipo que muestra cómo quedaría finalmente el proyecto: en la página principal incorporamos botones de codificar y decodificar (a los que llamamos "ir" y "atrás" por lo explicado anteriormente) y quitamos el rango de número para escoger el offset pues -según los usuarios consultados- no era muy fácil de entender y, en vez de eso, agregamos la opción de escoger número de offset a voluntad (está implementado para escoger tanto números positivos como negativos) y los links los pusimos uno junto al otro. En el caso de las páginas de los link resultaban entendibles según las personas consultadas y no se le hicieron mayores cambios respecto del prototipo inicial. 

Imagen del prototipo final de la página principal de nuestra aplicación web:
![prototipo-final](../master/src/imagenes/prototipo.jpg)



</details>
