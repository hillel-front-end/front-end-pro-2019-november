// function Animal() {

// }

// Animal.prototype.run = function() {
//     console.log('123123');
// }



// var animal = new Animal();

// animal.run();


// function Cat() {

// }

// Cat.prototype = Object.create(Animal.prototype)// {proto: Animal.prototype}
// // Cat.prototype = Animal.prototype; //bad

// Cat.prototype.hunting = function() {
//     console.log('ням ням');
// }

// function Dog() {

// }

// Object.prototype.pipi = function() {
//     console.log('Pi pi....');
// }


// console.dir(Cat);

// console.dir(Animal)

// var mass = [];


// mass.pipi();


// function Pagination(size, color) {
//     this.color = color; // public color = color

//     this.curentSelectPage = 1;

//     var size = size;//private zise = size;

//     this.getterSize = function() {
//         return size;
//     }

//     this.setterSize = function(newSize) {
//         if (newSize && newSize < size) {
//             size = newSize;
//         }
//     }

//     function privateFoo() {

//     }   
// }


// Pagination.prototype.click = function() {
//     this.curentSelectPage++;

//     // console.log(this.curentSelectPage, 'curentSelectPage');
// }




// var pagination = new Pagination(50000, 'red');
// var paginationSecond = new Pagination(30000, 'red');



// pagination.color = 'blue';

// console.log(paginationSecond, 'paginationSecond');
// console.log(pagination, 'pagination');

// paginationSecond.click();
// paginationSecond.click();
// paginationSecond.click();

// console.log('after click')

// console.log(paginationSecond, 'paginationSecond');
// console.log(pagination, 'pagination');



// // console.log(pagination.getterSize());

// // console.log(pagination.setterSize(20));

// // console.log(pagination.getterSize());



function Animal() {

}

Animal.prototype.run = function() {
    console.log('run ..slow');
}


Cat.prototype = Object.create(Animal.prototype);

function Cat() {

}

Cat.prototype.run = function() {
    console.log('run ..fast');
}

var murka = new Cat();

murka.run();