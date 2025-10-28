/* CONDICIONALES
1-SIMPLE
2-COMPUESTOS
3-ANINDADO
4-MULTIPLE
5-OPERADOR TERNARIO
*/
//SIMPLE
// if(true)
// {
//     console.log("Esto es verdad")
// }

// //COMPUESTO
// if(false)
// {
//     console.log("Esto es verdad");
    
// }
// else
// {
//     console.log("Esto es falso")
// }

// //MULTIPLE
// switch (1) 
// {
//     case 1:
//     break;
//     default:
//     break;
// }

// //ANIDADO

// if (true) 
// {
    
// }else if (true) 
// {
    
// }else if (true) 
// {
    
// }else if (true) 
// {
    
// }else{

// }

//TERNARIO

//let variable = condicion ? true : false
/*CICLOS
1-FOR
2-WHILE
3-DO-WHILE
*/


let opcion = prompt("Ingrese una opcion: \n1 - calcular bruto \n2 - calcular deducciones \n3 - calcular auxilio de transporte \n4 - salario neto")

let valorHora
let cantidadDeHoras
let deduccion

switch (opcion) {
    case "1":
        valorHora = prompt("Ingrese el valor de la hora: ")
        cantidadDeHoras = prompt("Ingrese la cantidad de horas elaboradas: ")
        if(isNaN(valorHora) || isNaN(cantidadDeHoras)){
            console.log("El valor ingresado no corresponde a un numero valido");   
        }else{
            console.log("El salario bruto es: " + (valorHora * cantidadDeHoras));
        }
    
        break;

    case "2":
        // valorHora = prompt("Ingrese el valor de la hora: ")
        // cantidadDeHoras = prompt("Ingrese la cantidad de horas elaboradas: ")
        // deduccion = prompt("Ingrese las deducciones: ")
        // if(isNaN(valorHora) || isNaN(cantidadDeHoras) || isNaN(deduccion)){
        //     console.log("El valor ingresado no corresponde a un numero valido");   
        // }else{
        //     console.log("las deducciones del salario son: " + (valorHora * cantidadDeHoras - deduccion));
        // }
        // break;

        valorHora = prompt("Ingrese el valor de la hora: ")
        cantidadDeHoras = prompt("Ingrese la cantidad de horas elaboradas: ")
        if(isNaN(valorHora) || isNaN(cantidadDeHoras) || isNaN(deduccion)){
            console.log("El valor ingresado no corresponde a un numero valido");   
        }else{
            console.log("las deducciones del salario son: " + (valorHora * cantidadDeHoras * 0.08));
        }
        break;

    case "3":
        valorHora = prompt("Ingrese el valor de la hora: ")
        cantidadDeHoras = prompt("Ingrese la cantidad de horas elaboradas: ")
        if(isNaN(valorHora) || isNaN(cantidadDeHoras) || isNaN(deduccion)){
            console.log("El valor ingresado no corresponde a un numero valido");   
        }else if(valorHora * cantidadDeHoras < 1400000){
            console.log("Tiene derecho a auxilio de transporte ");
        }else{
            console.log("No tiene derecho a auxilio de transporte ");
        }
        break;

    case "4":
        valorHora = prompt("Ingrese el valor de la hora: ")
        cantidadDeHoras = prompt("Ingrese la cantidad de horas elaboradas: ")
        if(isNaN(valorHora) || isNaN(cantidadDeHoras) || isNaN(deduccion)){
            console.log("El valor ingresado no corresponde a un numero valido");   
        }else if(valorHora * cantidadDeHoras < 1400000){
            console.log("El salario neto es: " + (valorHora * cantidadDeHoras) - (valorHora * cantidadDeHoras * 0.08) + 200000);
        }else{
            console.log("El salario neto es: " + (valorHora * cantidadDeHoras) - (valorHora * cantidadDeHoras * 0.08));
        }
        break;

    default:
    break;
}

