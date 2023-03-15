function oficial(pesos) {
  const cambio = 208.75;
  dolares = pesos / cambio;
  return dolares;
}

function blue(pesos) {
  const cambio = 377;
  dolares = pesos / cambio;
  return dolares;
}

function tarjeta(pesos) {
  const cambio = 365.31;
  dolares = pesos / cambio;
  return dolares;
}

function turista(pesos) {
  const cambio = 417.5;
  dolares = pesos / cambio;
  return dolares;
}

function mep(pesos) {
  const cambio = 377.76;
  dolares = pesos / cambio;
  return dolares;
}

function ccl(pesos) {
  const cambio = 393.27;
  dolares = pesos / cambio;
  return dolares;
}

function mayorista(pesos) {
  const cambio = 201.8;
  dolares = pesos / cambio;
  return dolares;
}


let total = 0;
let seguir = "s";
let pesos = prompt("Ingrese la camtidad de pesos que desea cambiar");
let tipo = prompt("Ingrese el tipo de cambio que desea calcular: 1-Oficial, 2-Blue, 3-Tarjeta, 4-Turista, 5-MEP, 6-CCL o 7-Mayorista");

do {
  switch (tipo) {
    case "1":
      total = oficial(pesos);
      break;
    case "2":
      total = blue(pesos);
      break;
    case "3":
      total = tarjeta(pesos);
      break;
    case "4":
      total = turista(pesos);
      break;
    case "4":
      total = turista(pesos);
      break;
    case "5":
      total = mep(pesos);
      break;
    case "6":
      total = ccl(pesos);
      break;
    case "7":
      total = mayorista(pesos);
      break;
    default:
      alert("La opcion elegida no es valida");
      break;
  }
  alert("Son " + total + " dolares.");
  
  seguir = prompt("Desea realizar otro calculo? S/N");
  if (seguir == "s" || seguir == "S") {
    pesos = prompt("Ingrese la camtidad de pesos que desea cambiar");
    tipo = prompt("Ingrese el tipo de cambio que desea calcular: 1-Oficial, 2-Blue, 3-Tarjeta, 4-Turista, 5-MEP, 6-CCL o 7-Mayorista");
  }else{
    alert("Chau!")
  }
  
} while (seguir == "s" || seguir == "S");

function calcpf(pesos, meses, tasaanual){
    let tasa = tasaanual/12*meses;
    let intereses = pesos*tasa;
    return (intereses);
}

function calcpfr(pesos, meses, tasaanual){
    let intereses = 0;
    let acumulado = pesos;
    acumulado = parseFloat(acumulado);
    for (let i = 0; i < meses; i++) {
        intereses = calcpf(acumulado, 1, tasaanual);
        intereses = parseFloat(intereses);
        acumulado = acumulado + intereses;
    }
    intereses = acumulado-pesos;
   
    return(intereses);
}

let opcion = prompt("Bueno no, tengo algo mas! Te gustaria calcular cuanto ganarias si en lugar de comprar dolares hicieras un plazo fijo? S/N");
let meses = 0;
let plazofijo;
let plazofijorenovable;
const tasaanual = 0.75;

while (opcion=="s"||opcion=="S") {
    pesos = prompt("Cuantos pesos queres ahorrar?");
    meses = prompt("Por cuantos meses te gustaria hacer el plazo fijo?");
    
    plazofijo = calcpf(pesos, meses, tasaanual);
    plazofijorenovable = calcpfr(pesos, meses, tasaanual);

    alert("Si haces un plazo fijo a "+meses+" meses ganarias $"+plazofijo+", pero si lo haces con renovacion automatica mensual por el mismo tiempo ganarias $"+plazofijorenovable);

    opcion = prompt("Queres calcular otro plazo fijo? S/N")
    
}

alert("Bueno ahora si, chau!")
