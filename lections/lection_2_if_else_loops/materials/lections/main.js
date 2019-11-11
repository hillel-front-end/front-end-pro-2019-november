/*
    +
    bool
    typeof
    isNaN()
    if else
    logical operators [>,<, >=, <=, ==, ====, !] 
    logical and or, 
    if else else if // at home
    тернарный оператор ? // at home
    циклы основы
    while () {}
    do {} while()
    for(){} (прим. не парн.)
    for(){for(){}}
*/

/*
  Важно помнить что  такие значения как: 
    1)Число 0, 
    2)пустая строка "", //Любая строка, кроме пустой, в логическом контексте является true.
    3)null 
    4)undefined,
    5)NaN
  - При преобразовании в булевое значние будет === false;
  - Все остальное === true.
 */

// --------------------------------
a = 1 * 'abc'
isNaN(a)
isNaN('abc' - 12)
// --------------------------------

foo = 123;
// a = 123;
// bool = true;

console.log(typeof foo);// ---> string

console.log(typeof a);// ---> 
console.log(typeof bool);// ---> 
// ------------------if - else 


if (typeof foo == 'string') {
  console.log('Да это String');
  name = "Valera";
} else {
  console.log('Не, это String', 'Это ' + typeof foo);
}


if (typeof foo == 'string') {
  console.log('Да это String');
  name = "Valera";
} else if (typeof foo == 'number') {
  console.log('Не, это String', 'Это ' + typeof foo);
} else if (typeof foo == 'boolean') {
  console.log('Не, это boolean', 'Это ' + typeof foo);
} else {
  console.log('Не,', 'Это ' + typeof foo);
}


// if () {

// }

// res = '1' == 1; // true
// res = '1' === 1; // false

// res = 1 > 1;

console.log(1 > 1, '1 > 1');
console.log(1 >= 1, '1 >= 1');
console.log(15 < 100, '1 < 1');
console.log(10 <= '10', '10 <= 10');
console.log(10 >= 10, '10 <= 10');

age = 39;

// console.log(age >= 15 && age <= 20 && age == 19) ; 
//  console.log(age == 15 && age <= 20 || age == 39) ;

 console.log(age == 15 || age <= 20 || age == 39) ; // --> true


// console.log(res, 'res');

// if (age == 15 || age <= 20 || age == 39) {
//  console.log('Входи')
// }

if (age > 18 && age <= 45) {
   console.log('Входи')
   if (age > 18 && age <= 45) {
    console.log('Входи')
   }
}


// while


counter = 1;

// while(counter <= 10) {
//   console.log(counter);
//   // counter = counter + 1;
//   // counter += 1;
//   // counter++;// counter++, ++counter
// }

// do {
//   counter++;

//   console.log('To do');

// } while(counter <= 10)


// for(i = 0; i < 10; i++) {
//   console.log(i)
// }

// for(i = 0, k = 5; i < 10 && k != 0; i++, k--) {
//   console.log(i);
//   for(i = 0; i < 10; i++) {
//     console.log(i)
//   }
// }