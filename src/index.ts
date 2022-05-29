/*• Para tener control de la gente que hay en una disco el gerente quiere saber cuantas personas de diferentes edades han entrado. 
• No se han permitido la entrada a menores de 18 ni mayores de 40. Para la carga de los datos se usa la función aleatorio  (use la función aleatorio(menorValor,mayorValor), es decir aleatorio(19,40))
• Se sabe que la cantidad total de personas dentro del local es de 270
• Se quiere saber: 
• Cuántas personas son menores de 21 años
• Cuántas personas mayores o igual a 21 años
• Cuántas personas en total*/

let capacidad: number = 270;
let personas: number[] = new Array(capacidad);
let mayores21: number = 0;
let menores21: number = 0;

let crearAleatorio = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let completarBoliche = (personas: number[], capacidad: number): number[] => {
  let indice: number;
  for (indice = 0; indice < capacidad; indice++) {
    personas[indice] = crearAleatorio(18, 40);
  }
  return personas;
};

let calcularMayores = (personas: number[], capacidad: number): number => {
  let indice: number;

  for (indice = 0; indice < capacidad; indice++) {
    if (personas[indice] > 21) {
      mayores21++;
    }
  }
  return mayores21;
};

let calcularMenores = (personas: number[], capacidad: number): number => {
  let indice: number;

  for (indice = 0; indice < capacidad; indice++) {
    if (personas[indice] <= 21) {
      menores21++;
    }
  }
  return menores21;
};

completarBoliche(personas, capacidad);
calcularMayores(personas, capacidad);
calcularMenores(personas, capacidad);

console.log(personas);
console.log("Las personas mayores de 21 son " + mayores21);
console.log("La cantidad de personas menores de 21 son " + menores21);
console.log("La cantidad total de personas es " + capacidad);
