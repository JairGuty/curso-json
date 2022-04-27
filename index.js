// JSON.stringify(); // Convierte un objeto en un JSON
// JSON.parse(); // Convierte un JSON en un objeto

const user = {
  name: "Juan",
  lastname: "Lopez",
  age: "25",
  nickname: "Juanito",
  hobbies: ["run", "code", "read", "eat"],
  address: {
    street: "Calle main 123",
    city: "Barranquilla",
  },
  married: false,
  greet() {
    // La funciones no es valido como JSON, entonce no se muestra en el JSON
    return "Hola";
  },
};
// console.log(user);
// console.log(user.greet());

// console.log(
//   JSON.stringify(user) // convierte un tipo de dato en un JSON.
// );

const friends = [
  { name: "Jair", nickname: "Jairito" },
  { name: "Marcos", nickname: "Marquito" },
  { name: "Pablo", nickname: "Pablito" },
  { name: "Carlos", nickname: "Carlito" },
  { name: "Jose", nickname: "Joselito" },
  { name: "Miguel", nickname: "Miguelito" },
];

user.friends = friends;

// console.log(friends.forEach(f => console.log(f.name)));
// console.log(JSON.stringify(friends));

let output = "";
// Peticion a un archivo de mi servidor
fetch("/user.json")
  .then((res) => res.json()) // La promesa se resuelve y se convierte en un JSON
  .then((data) => {
    const { name, lastname, friends } = data;
    document.getElementById(
      "people"
    ).innerHTML = `<li>${name} - ${lastname}, sus amigos son: ${friends.map(
      (e) => e.name
    )}</li>`; // Se muestra en el HTML
  });

// console.log(
//     JSON.stringify(user) // convierte un tipo de dato en un JSON.
// );
let postsElement = "";

// Peticion a una rest API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    // res es una promesa
    return res.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      postsElement += `<li>${data[i].userId} - ${data[i].title}</li>`; // Creamos la lista con los datos
    }
    document.getElementById("posts").innerHTML = postsElement; // Pintamos en web
  });
