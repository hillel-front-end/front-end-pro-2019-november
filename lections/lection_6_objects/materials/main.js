console.log('Lection 7');

// --------- recursive --------


// function foo (){

//     return function () {

//     }
// }




// function foo ()  {
//     foo();
// }

// foo(

// function iteration(i) {
//     debugger;
//     if (i == 3) {
//         return;
//     } else {
//         console.log(i, 'i');
//         iteration(++i);
//     }
// }


// iteration(0);


// function sumToArray (list) {
//     debugger;
//     if (list.length === 1) {
//         return list[0]
//     } else {
//         return list.pop() + sumToArray(list);
//     }
// }





// sum = sumToArray([1,2,3,4]);

// console.log(sum, 'sum')



// obj.propertyName



menu = {
    width: '200px',
    height: '100px',
    isVisiable: false
}


team = new Array(10);

for(i = 0; i < team.length; i++) {
    team[i] = {
        name: 'Valera ' + Math.random() * 10,
        age: Math.ceil(Math.random() * (30 - 10) + 10)
    }
}

// console.log(team, 'team');
// console.log(team[1].name, 'team');


human =  {
    name: 'Valera',
    age: 25,
    isMarried: false,
    skills: ['css', 'js', 'html'],
    sleep: function () {
        console.log("Zzzzzz....")
    },
    children: {
        name:'asdsad'
    }

}

// console.log(human.age, 'age');
// console.log(human.name, 'name');
// console.log(human.isMarried, 'isMarried');
// console.log(human.skills, 'skills');

// console.log(human.name);
// console.log(human["name"])


// key = 'age';


// console.log(human[key]);

// // console.log(human.key);

// console.log(human.sleep);

// console.log(human.sleep());


//for( key in  obj)


for(key in  human) {
    // console.log(key, 'key');
    console.log(human[key], 'key');
}