/*
Lection 3 - Array

 * Math
 * [], [].length
 * new Array(length || item-1, item-2, ... , item-n)
 * Доступ по индексу
 * Обращение к первому/последнему элементу массива
 * Добавление элемента в массив
 * [].length = 20 || data[30] = 'foo'
 * Заполнения массива случайными числами
 * Пример - перебор
*/

mass = ['Филя', 'Петя', 'Vasy'];

console.log(mass);

mass = [12, 'Петя', false];

console.log(mass)

first = mass[0];

console.log(first, 'first');

last = mass[mass.length - 1];

console.log(last, 'last');

console.log(mass[mass.length], 'mass');

mass[mass.length] = 13;

console.log(mass, 'mass');


mass[100] = 'ASdasd';

console.log(mass)
j = 0, c = 5;
a = [j, c];

console.log(a);


a.length = 200;

console.log(a)

b = new Array(5, 5);

console.log(b, 'b');

// ----------------------- Math -------------

/*
  1. Math
  Math​.round() - возвращает число, округлённое к ближайшему целом
  Math.floor() - возвращает целое число, которое меньше или равно данному 
  Math.ceil() - округляет аргумент до ближайшего большего целого.

  Math.random() - получени случайного числа от 0 - 1

  Форумула получени случайного числа в диапазоне от min (включительно) до max (не включительно):
    Math.random() * (max - min) + min;
*/



console.log(Math.round(1.4), 'round');

console.log(Math.floor(1.6), 'floor');

console.log(Math.ceil(1.2), 'ceil');


console.log(Math.round(Math.random() * (20 - 10) + 10))


b = new Array(3);

console.log(b)

for(i = 0; i < b.length ;i++) {
  b[i] = Math.round(Math.random() * (20 - 10) + 10);
  console.log(b[i]);
}

console.log(b);;

for(j = 0; j < b.length; j++) {
  console.log(b[j]);
}