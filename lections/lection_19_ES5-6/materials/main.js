// console.log('Lection_1');


// /*
// ES-5 Methods
// - let,const
// - Arrow Functions
// - Template Literals // tag templates

// - Object Properties
// - Destructuring

// */

//--------------- forEach, Filter, Map, Reduce -- ES-5 -----------------

// var persons = [

//     {
//         name: 'Valera',
//         age: 12
//     },
    
//     {
//         name: 'Vaasdera',
//         age: 17,
//         isMarried: true
//     },
    
//     {
//         name: 'asdasd',
//         age: 15
//     },
    
//     {
//         name: 'Valera',
//         age: 27
//     },

// ];

// console.log(persons, 'persons');

// persons.forEach(function(item, inex) {
//     console.log(item, inex);
// });

// var newArr = persons.filter(function(item, index) {    
//     return item.isMarried;
// });

// var newArr = persons.map(function(item, index) {    
//     if (item.isMarried) {
//         return item.isMarried;
//     } else  {
//         return item;
//     }
// });
// console.log(newArr);

// var bool = persons.some(function(item, index) {    
//     return item.age == 18;
// });

// var bool = persons.every(function(item, index) {    
//     return item.age;
// });

// console.log(bool, 'bool');

// persons.filter(function(person) {
//     return person.age > 15;
// })
// .map(function(item) {
//     return item.age;
// })
// .reduce(function(oldValue, currentItem) {
//     return oldValue + currentItem;
// }, 0);
// 


// ------ ES - 6 --------------
// console.log(a); Error
// let a = 12;


// // scope -> {}

// let b = 13;
// if (true) {
//     console.log(b, 'b');
//     // let z = 12;
// }

// console.log(z, 'z'); Error
// let arr = document.querySelectorAll('.block');

// for(let i = 0; i < arr.length; i++) {
//     arr[i].onclick = function() {
//         console.log(i, 'i');
//     }
// }


// const PI = 3.14;


// PI = 13;


// const g = {
//     name: 'Valera'
// };

// g.name = 'Nikola';

// console.log(g, 'g');


// var arrow = (b) => {
//     console.log(b);
//     console.log(this, 'this');
//     return 'abc';
// }


// console.log(arrow(123));

// var obj = {
//     toDo: function() {
        
//         var arrow = (b) => {
//             console.log(this, 'this');
//             console.log(arguments, 'arg');
//             return 'abc';
//         }


//         arrow(123);

//     }
// }

// obj.toDo('Hello world');



// [1,2,3].forEach(item => {
//     console.log(item);
// })

// let arrowSecond = item => console.log(item, index);


// arrowSecond(2)


let objSecond = {
    toDO: function(){},
    doFunction() {
        console.log('aaa')
    },
    age: 12,
    name: 'Valera',
    adress: {
        street: '123123',
        d: '123'
    }
}

objSecond.doFunction();

// var name = obj.name;
// var age = obj.age;
// var street = obj.adress.street;
// var d = obj.adress.d;

let {name, age, adress:{street, d}} = objSecond;

console.log(name, age, street, d);

let mass = [1,2,3];

const [a,,c] = mass;

console.log(a, c)
