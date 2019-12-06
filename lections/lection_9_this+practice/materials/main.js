// /// ------------- this ---------




// function foo() {
//     function z() {
//         console.log(this, 'this'); // window -> without dot
//     }

//     z();
// }



// foo();


// var name = 'Global';

// function say() {
//     console.log(this, this.name);
//     this.type = '123';
// }


// var person = {
//     name: "Valera",
//     say: say
// }


// var dog = {
//     name: "Sharik",
//     say: say
// }

// var cat = {
//     name: "Murka",
//     say: say
// }


// say();// this - > window
// person.say();// this - >person
// dog.say();// this - > dog
// cat.say();// this - > cat


obj = {}


list = [1,2,3];
foo = [];
function myPush(value) {
    console.log(this, 'this');
    this[this.length] = value;
}

obj.myPush = myPush;



// list.myPush = myPush;
// foo.myPush = myPush;

console.log(obj, 'obj');
console.log(list, 'list');
console.log(foo, 'foo');

// obj.myPush();


// list.myPush('123');

// foo.myPush('hello world');


console.log(foo, 'foo');

console.log(list, 'list');


list = [1,2,3]; // '1*2*3'


function myJoin(separator) {
    var str = '';

    for(var i = 0; i < this.length - 1; i++) {
        str += this[i] + separator;
    }

    str += this[this.length - 1];

    return str;
}

list.myJoin = myJoin;

console.log(list.myJoin('*'));

foo = {
    x: 10,
    y: 20
}


function renderObject() {
    document.write('<ul>');
    for(var key in this) {
        if(typeof this[key] != 'function') {
            document.write('<li>' + key + ' --> ' + this[key]);
        }
    }
    document.write('</ul>');
}

foo.renderObject = renderObject;
foo.renderObject(); // x,y

// ----

obj = {
    arr: [],
    remove: function(i) {
        if(this.arr[i]) {
            this.arr.splice(i , 1);
        }
        return this;
    },
    insert: function(value) {
        this.arr.push(value);
        return this;
    },
    clear: function() {
     this.arr = [];
     return this;
    },
    print: function() {
        console.log(this.arr);
        return this;
    }
}

// obj.m1().m2().m3()
//obj.m3().m1().m3()

obj.insert(1)
   .insert('123213')
   .print()
   .remove(1)
   .print()
   .insert('123213')
   .insert('123213')
   .insert('123213')
   .print()
   .clear()
   .print();

$ = function() {}

//    $("#p1").css("color", "red").slideUp(2000).slideDown(2000); // {css:func() {}}