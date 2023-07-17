const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];




//Ejercicio a: pizzas con id impar

pizzas.forEach( pizza => {
  if (pizza.id % 2 == 1) {
    console.log(` La ${pizza.nombre} tiene el id: ${pizza.id} que es impar`);
  } 
}
)

//Ejercicio b: pizza que valga menos de $600

const pizzaMasEconomica = pizzas.forEach( pizza => {
  if (pizza.precio < 600) {
      console.log(`La ${pizza.nombre}, cuesta menos de $600, su precio es de $${pizza.precio}.`)
  }
})

//Ejercicio c: nombre de cada pizza con su respectivo precio

const pizzaconPrecio = pizzas.forEach(e =>  console.log(`La ${e.nombre} tiene un costo de $${e.precio}`))

//Ejercicio d: ingredientes de cada pizza (realizar dos recorridos)

pizzas.map(e => {
  let nombre = e.nombre;
  let ingredientes = e.ingredientes.join(', ');

  return console.log(`La ${nombre} tiene los siguientes ingredientes: ${ingredientes}.`)
})

