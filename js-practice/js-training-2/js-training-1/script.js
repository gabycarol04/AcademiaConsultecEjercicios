//Declaración e inicialización de variables
var number = 10;
console.log("Esta es una variable numérica: "+number);
number += 20;
console.log("Con +=20: "+number);

var variableExample = 'bienvenido al training';
console.log("Esta es una variable: "+variableExample);
variableExample = '120';
console.log("La misma variable pero con un número entre comillas: "+variableExample);

//Estructura de control: Condicional IF
console.log("Comparamos una variable con string 120 con un número 120 usando ==");
if (variableExample == 120){
    console.log('   Resultado: Se cumple la condición donde variableExample es 120: '+ variableExample);
} else {
    console.log('   Resultado: NO se cumple la condicion de que variableExamples es 120: '+variableExample)
}
console.log("   **Como solo se usan dos iguales (==) no se valida el tipo de dato en la comparación");

//Evaluar tipo de dato (con === )
console.log("Comparamos una variable con string 120 con un número 120 usando ===");
if (variableExample === 120){
    console.log('   Resultado: Se cumple la condición donde variableExample es 120: '+ variableExample);
} else {
    console.log('   Resultado: NO se cumple la condicion de que variableExamples es 120: '+variableExample)
}
console.log("   **Como se usan tres iguales (===) se valida el tipo de dato en la comparación");

//Estructura de control: Condicional SWITCH
console.log("Comparamos una variable con string 120 en un switch con un número 120");
switch (variableExample){
    case 120:
        console.log('   Resultado: El valor es 120');
        break;
    default:
        console.log('   Resultado: El valor NO es 120');
        break;
}
console.log("   **Se valida el tipo de dato");

//Estructura de control: Repetición WHILE
var index = 0;
while (index <= 10){
    console.log('Se repite '+ index + ' de veces con un WHILE');
    index++;
}

//Estructura de control: Repetición FOR
for (index=0; index<=10; index++){
    console.log('Se repite '+ index + ' de veces con un FOR');
}

var listFruits = ["Manzana", "Pera", "Piña"];
console.log("Variable listFrutis contiene: "+listFruits);
for(fruit in listFruits){
    console.log("Fruta: "+listFruits[fruit] + " --> Ciclo FOR");
}

//Estructura de control: TRY CATCH
console.log("Para probar el try catch, obligamos un error:");
try{
    throw new Error('Obligamos un error');
} catch (error) {
    //Formas de ver el código
    console.log(error);
    console.error(error);
    console.debug(error);
    console.info(error);
}

try {
    adddlert("Welcome guest!");
  }
  catch(error) {
    console.log("error aqui");
    console.error(error.name, error.message);
  } finally{
    console.log("finally aqui");
}

console.log("Practica: Error de ");
try{
    var test=29;
    if(test>50)
        throw new Error('No es mayor');
} catch (pError){
        console.error(pError.name, pE  rror.message);
}