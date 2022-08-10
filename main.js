function CallMenu() {
  let nro_ejercicio = parseInt(
    prompt(
      "ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares \r\n 9. calcular edad   \r\n 10. calcular mayor de 3   \r\n 11. calcular bono antiguedad   \r\n 12. calcular salario \r\n 13. Cantidad de aprobados  \r\n 14. Cantidad de focos \r\n 15. ¿Puede sufragar?"
    )
  );
  if (isNaN(nro_ejercicio)) {
    alert("porfavor ingresa valores numericos");
  } else {
    MenuEjercicios(nro_ejercicio);
  }
}

function MenuEjercicios(nro_ejercicio) {
  switch (nro_ejercicio) {
    case 1:
      let valor1 = parseFloat(prompt("ingrese el valro 1 a sumar:"));
      let valor2 = parseFloat(prompt("ingrese el valro 2 a sumar:"));
      alert(ej1_sumarValores(valor1, valor2));
      break;

    case 2:
      let ex1 = parseFloat(prompt("ingrese la primera nota:"));
      let ex2 = parseFloat(prompt("ingrese la segunda nota:"));
      let ex3 = parseFloat(prompt("ingrese la tercera nota:"));
      let ex4 = parseFloat(prompt("ingrese la cuarta nota:"));
      alert(ej2_calcularPromedio(ex1, ex2, ex3, ex4));
      break;

    case 3:
      let base_rect = parseFloat(prompt("ingrese la base del rectangulo"));
      let altura_rect = parseFloat(prompt("ingrese la altura del rectangulo"));
      alert(ej3_CalcularAreaReactangulo(base_rect, altura_rect));
      break;

    case 9:
      let año_nacimiento = parseInt(prompt("Ingrese su fecha de nacimiento: "));
      alert(ej9_CalcularEdad(año_nacimiento));
      break;

    case 10:
      let nombre1 = prompt("ingrese su nombre de la persona 1: ");
      let edad1 = parseInt(prompt("ingrese su edad de la persona 1: "));

      let nombre2 = prompt("ingrese su nombre de la persona 2: ");
      let edad2 = parseInt(prompt("ingrese su edad de la persona 2: "));

      let nombre3 = prompt("ingrese su nombre de la persona 3: ");
      let edad3 = parseInt(prompt("ingrese su edad de la persona 3: "));
      
      alert(ej10_IdentificarMayorde3(nombre1,nombre2,nombre3,edad1,edad2,edad3));
      break;

    case 11:
      let año_ingreso = parseInt(prompt("ingrese el año de ingreso a la empresa: "));
      alert(ej11_calculaBono(año_ingreso));
      break;

    case 12:
      ej12_calcularSalario();
      break;

    case 13:
      let cantidadAlumnos = parseInt(prompt("ingrese la cantidad de alumnos: "));
      alert(ej13_cantidadAprobados(cantidadAlumnos));
      break;

    case 14:
      let focos=parseInt(prompt("Ingrese la cantidad de focos: "));
      alert(ej14_cantidadFocos(focos));
      break;

    case 15:
      let añoNacimiento = parseInt(prompt("Ingrese su fecha de nacimiento: "));
      alert(ej15_mayorEdad(añoNacimiento));
      break;

     default:
      alert("Seleccione un ejercicio del 1 al 15")
      break;
  }
}

function ej1_sumarValores(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return " porfavor ingrese valores";
  } else {
    return a + b;
  }
}

function ej2_calcularPromedio(ex1, ex2, ex3, ex4) {
  if (isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)) {
    return "porfavor ingresa valores";
  } else {
    return (ex1 + ex2 + ex3 + ex4) / 4;
  }
}

function ej3_CalcularAreaReactangulo(base_rect, altura_rect) {
  if (isNaN(base_rect) || isNaN(altura_rect)) {
    return "ingresa valores numericos";
  } else {
    return "el area del rectangulo es :" + base_rect * +altura_rect;
  }
}

function ej9_CalcularEdad(año_nacimiento) {
  if (!isNaN(año_nacimiento) && año_nacimiento > 1900) {
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    return "La edad del trabajador es : " + (añoActual - año_nacimiento);
  } else {
    return "ingrese un valor numérico de cuatro cifras";
  }
}

function ej10_IdentificarMayorde3( nombre1, nombre2, nombre3, edad1, edad2, edad3 ) {
  let mayor = edad1;
  if (edad2 > mayor) {
    mayor = edad2;
    if ( edad3 > mayor ){
      mayor = edad3;
      return  'El mayor es '+ nombre3+ ' su edad es '+String(mayor);
    }else{
      return  'El mayor es '+ nombre2+ ' su edad es '+String(mayor);
    }

  } else {
    if (edad3 > mayor) {
      mayor = edad3;
      return  'El mayor es '+ nombre3+ ' su edad es '+String(mayor);
    } else {
      return 'El mayor es '+ nombre1+ ' su edad es '+String(mayor);
    }
  }
}

function ej11_calculaBono(año_ingreso){
  if (!isNaN(año_ingreso) && año_ingreso > 1900) {
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    let cantidadAños = añoActual - año_ingreso;
    let bono = 100;
    if (cantidadAños > 0  &&  cantidadAños < 6){
      return 'El bono que recibirá es: $'+ String(bono*cantidadAños);
    }else{
      return 'El bono que recibirá es: $1000 ' ;
    }
  } else {
    return "ingrese un valor numérico de cuatro cifras";
  }
}

function ej12_calcularSalario(){
  let salario = 1500;
  let año = 0;
  while(año < 6){
    año = año + 1 ;
    salario = salario*1.1;
    salario = salario.toFixed(2);
    alert( 'El salario para elaño ' + año + ' es de ' + salario) ; 
  }
}

function ej13_cantidadAprobados(cantidadAlumnos){
  let n = 0;
  let aprobados = 0;
  let desaprobados = 0;
  while ( n < cantidadAlumnos ) {
    n = n+ 1;
    let nota = parseFloat(prompt("ingrese nota:"));
    if (nota > 10 && n <= 20 ){
      aprobados = aprobados + 1;
    }else{
      desaprobados = desaprobados + 1;
    }
  }
  return 'La cantidad de aprobados es ' + aprobados + ' los desaprobados son ' + desaprobados;
}

function ej14_cantidadFocos(focos){
    let n=0;
    let verde=0;
    let blanco=0;
    let rojo=0;

    
    while (n < focos){
      let enter=parseInt(prompt("Ingrese el color del foco: \n 1. Verde \n 2. Blanco \n 3. Rojo"));
      n = n+1;
      if (enter==1){
        verde++;
      } else if (enter==2){
        blanco++;
      }else{
        rojo++;
      }
    }
    return `La cantidad total de focos es: ${focos} de los cuales ${verde} son verdes, ${blanco} son blancos y ${rojo} son rojos`
}


function ej15_mayorEdad(añoNacimiento){
  if (!isNaN(añoNacimiento) && añoNacimiento > 1900) {
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    let cantidadAños = añoActual - añoNacimiento;
    if (cantidadAños > 0  &&  cantidadAños < 19){
      return 'Usted no es mayor de edad puede sufragar';
    }else{
      if ( cantidadAños <= 0){
        return 'No ingreso un dato correcto';
      }else{
        return 'Usted es mayor de edad puede sufragar';
      }

    }
  } else {
    return "ingrese un valor numérico de cuatro cifras";
  }
}

console.log("%cGRUPO 9", "color: red; font-size: 2rem;");
