/*
  Lection 4 - Array
  * Двумерные массивы
  * Зубчатые массива\ Ступенчатые массивы
*/

foo = ['Valera','Valera','Valera',4,5, 5, 6,7];

document.write(foo.join('_'));

// document.write("<ul>");
// for(i = 0; i < foo.length; i++) {
//   document.write('<li>' + foo[i] + '</li>');
// }
// document.write("</ul>");

document.write("<ul><li>");
document.write(foo.join('</li><li>'));;
document.write("</li></ul>");

array = [1,2,3,4];

count = array.length % 2 == 0? 2 : 1;
position = Math.ceil(array.length / 2) - 1;

console.log(count, position);
array.splice(position, count)

console.log(array, 'array');

// mass = [
//   [1,2,3,4],
//   [1,2,3,4],
//   [1,2,3,4],
// ];


size = +prompt('input size');
mass = new Array(size);

console.log(mass, 'mass');

for(i = 0; i < mass.length; i++) {
  mass[i] = new Array((i + 1) * 2);

  for(j = 0; j < mass[i].length; j++) {
    mass[i][j] = Math.round(Math.random() * (10 + 5) - 5);
  }
}

console.log(mass, 'mass');

// Пример для нахождения мин в одномерном массиве

b = [1,4,5,6];

min = b[0];

for(i = 0; i < b.length; i++) {
  if (min > b[i]) {
    min = b[i];
    minI = i;
  }
}