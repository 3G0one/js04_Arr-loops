let names = ["Sofia", "David", "Juan"];

console.log(names.sort()); //oden alfabetico
names.splice(3, 0, "Sara"); //posiciona en indice 3 
names.splice(4, 0, "Augustin"); //posiciona en indice 4
console.log(names);
names.shift(); //elimina el primer elemento
console.log(names);
names.unshift("Davdi", "Renata"); //agrega en los primeros dos lugares del índice
console.log(names);
names.push("Elena"); //agrega al final del array 
console.log(names);