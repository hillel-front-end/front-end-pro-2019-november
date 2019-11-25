console.log('Lection 7');

// --------- recursive --------
function iteration(i, size) {
    console.log(i, 'i');
    if(i == size) {
         return;
    } else {
        iteration(++i, size);
    }

}


iteration(0, 5);


mass = [1,2,3,4];

// function sumArray(mass) {
//     if(mass.length == 1) {
//         return mass[0];
//     } else {
//         var last = mass.pop();
//         var res = last + sumArray(mass);
//         return res;
//     }
// }

// debugger;
// console.log(sumArray(mass));

// console.log('before sumArray');

person = {
    chortName: "Valera",
    lastName: "Abd"
};


console.log(person.chortName);
console.log(person['chortName']);

foo = 'lastName';

console.log(person[foo]);

foo = 'chortName';

console.log(person[foo]);

// -------------- add prop in object

person.ololo = false;

console.log(person.ololo)

person[foo] = 12323;
console.log(person, 'person');


var menu = {
    direction: 'row',
    width: '500px',
    isOpen: false
};

team = [];

// for(var i = 0; i < 3; i++) {
//    var person = {}, name, age, lastName;

//     name = prompt('Name');
//     person.name = name;

//     lastName = prompt('lastName');
//     person.lastName = lastName;

//     age = +prompt('Age');
//     person.age = age;

//     team.push(person);
// }

console.log(team, 'team');

var person = {};

person["Hello world"] = 123;

console.log(person, 'person');

// console.log(person["Hello world"] = )

// console.log(person.Hello world)
