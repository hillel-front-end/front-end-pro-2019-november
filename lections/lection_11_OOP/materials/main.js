console.log('Lection 12');

function Animal(name, age) {
    this.name = name;
    this.age = age;

    this.run = function() {
        console.log('runn')
    }
}

Animal.prototype.eat = function() {
    console.log('eating .. ');
}

var valera = new Animal("Valera", 12);
var pety = new Animal("Pety", 29);

console.log(Animal.prototype, 'Animal.prototype')
console.log(valera, 'valera');
console.log(pety, 'pety');

/*
class Human {
    constructor() {

    }
}

var valera = new Human()
*/


obj = {
    doFunc: function(callback, x, y) {
        if(this.name) {
            this['foo'] = callback();
        } else {
            this.result = callback(x, y);
        }
    },
    target: function(nama) {
        this.name = name;
    },
    result: '',
    name: 'foo'
}