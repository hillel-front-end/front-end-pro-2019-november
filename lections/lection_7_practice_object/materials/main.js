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

function arrayFiller(mass) { // [] , [].length = 4;
    for(var i = 0; i < mass.length; i++) {
        if (mass[i] && mass[i].splice) {
            mass[i].length = 4;
            arrayFiller(mass[i])
        } else {
            mass[i] = Math.random();
        }
    }

    console.log(mass, 'mass');
}

var array =[ [], [[[]]] ];

arrayFiller(array);


obj = {
    a: 10,
    b: 12,
    c: {
        f: 13
    }
}
function convert(obj) {
    var newObj = {a: 10};

    for(var key in obj) { // key = 'a'
        newObj['a'] = obj['a'];
    }
}

convert(obj);