var a = {};

console.log(a, 'a');

var b = a;


b.name = 'Valera';

console.log(a, 'a');

// function arrayFiller(mass) { // mass = array
//     mass.push('123213');

//     return mass;
// }

// var array = [];

//  array = arrayFiller(array);

// console.log(array, 'foo');

function getStr(str) { // str = name
    str += 'Hello'
    return str;
}

// getStr = function(){

// }

var name = 'Valera';
res = getStr(name);

console.log(res);

// -------------- object --------

// var person = {
//     name: 'Valera',
//     age: '25',
//     isMarried: false,
//     walk: function() {
//         console.log('walking ...');
//     },
//     eat: function() {
//         console.log('eating...');
//     }
// }

// person.walk();

// console.log(person.eat)


// eat = person.eat;

// eat();

// person.eat();

var person = {
    name: 'Valera',
    age: 25,
    isMarried: false,
    walk: function() {
        console.log('walking ...');
    },
    eat: function() {
        console.log('eating...');
    }
}

for(var i in person) {
    console.log(i, person[i]);
    console.log
    if(typeof person[i] === 'function') {
        // person[i]()
        // var func = person[i];
        // func();
    }
    
}

// if(arr[i] && arr[i].splice)