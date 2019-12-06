/// ------------- this ---------




function foo() {
    function z() {
        console.log(this, 'this'); // window -> without dot
    }

    z();
}



foo();


var name = 'Global';

function say() {
    console.log(this, this.name);
    this.type = '123';
}


var person = {
    name: "Valera",
    say: say
}


var dog = {
    name: "Sharik",
    say: say
}

var cat = {
    name: "Murka",
    say: say
}


say();// this - > window
person.say();// this - >person
dog.say();// this - > dog
cat.say();// this - > cat