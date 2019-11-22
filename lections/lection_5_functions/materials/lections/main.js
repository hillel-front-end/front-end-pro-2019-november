// /*
//   Lection 5 - Functions
//     * example func declaration
//     * example func expression
//     * use/call func
//     * use/call func without args
//     * use/call func with args
//     * arguments
//     * callback
// */

// mass = new Array(5);


// g  = 12;

// c = g + 6;

// b = '123' * 13;

// for(i = 0; i < 10; i++) {
//     mass[mass.length] = i;
// }


function arrayFiller(arr, length) {
    length = length || 10;

    for(i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random() * (10 - 5) + 5);
    }

    console.log(arr, 'arr');

    return arr;
}

// console.log(mass, 'mass'); error

// var mass = [];

// res = arrayFiller(mass, 20);
// console.log(res, 'res');

function sum() {
    var resultSum = 0;
 console.log(arguments);
    for(var i = 0; i < arguments.length; i++) {
        resultSum += arguments[i]
    }

    return resultSum;
  console.log('Не будет выполнен.')
}

res = sum(2, 4, 5, 6, 6, 6, 7);

console.log(res, 'res');
// arrayFiller();


foo = function(g) {
 console.log(g);
 g()
}

function z() {
    console.log('Hello world');
}


console.log(z, 'z0');
foo(z);