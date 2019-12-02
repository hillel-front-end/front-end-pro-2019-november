// console.log(a, 'a');






// var a  = 10;

// function b() {
//     var foo = undefined;
//     console.log(foo, 'foo0');
//     foo = 12;

//     function b2() {
//         var foo = undefined; /// ? foo = undefined
//         console.log(foo, 'foo0');
//         foo = 12;
//     }
// }

// console.log(foo, 'foo');

// var foo = function() {}

// console.log(isEvent, 'isEvent');
// function isEvent(){}


// function ggg() {
//     console.log(foo, 'foo  in ggg');

//     var foo = function() {}

//     console.log(isEvent, 'isEvent in ggg');
//     function isEvent(){}
// }

// ggg();


//------------ LE -------------------

// function ggg() {
// var LE = {
//     z: undefined,
//     foo: undefined,
//     foo2: function(){},
//     ggg2: function(){}
// }
//     var z = '123';
//     var foo = function() {}
//     function foo2(){}

//     LE = {
//         z: '123',
//         foo:  function() {},
//         foo2: function(){},
//         ggg2: function(){}
//     }

//     function ggg2() {
//         var LE = {
//             h: undefined
//         };
//         var h = 12;

//         z = 13;
//     }
//     LE = {
//         z: '123',
//         foo:  function() {},
//         foo2: function(){},
//         ggg2: function(){}
//     }
//     // LE = null died
// }

// ggg();
// var h = '123';
// // ggg2(); error

//------------ SCOPE -------------------

// function ggg() {
// var LE = {
//     z: undefined,
//     foo: undefined,
//     foo2: function(){},
//     ggg2: function(){}
// }
//     var z = '123';
//     var foo = function() {}
//     function foo2(){}

//     LE = {
//         z: '123',
//         foo:  function() {},
//         foo2: function(){},
//         ggg2: function(){}
//     }

//     function ggg2() {
//         var LE = {
//             h: undefined
//         };
//         var h = 12;

//         z = 13;
//     }
//     LE = {
//         z: '123',
//         foo:  function() {},
//         foo2: function(){},
//         ggg2: function(){}
//     }
//     // LE = null died
// }

// var z = 13;

// function foo() {
//     //LE = {foo2: func{},z: undefined, b: undefined, scope: window}
//     var b = 100;
// //LE = {foo2: func{},z: 13, b: 100, scope: window}
//     function foo2() {
//         //LE = {foo2: func{},b: undefined, scope: window}
//         var b = 12;
//         //LE = {foo2: func{},b: 12, scope: LE -> foo}
//         console.log(window.z, 'z');
//     }

//     foo2();
// }

// // foo();
// // window = {b: undefined, a: func(){}, foo:func(){}}
// var b = 16;
// // window = {b: 16, a: func(){}, foo:func(){}}

// function a() {
//     // var LE = {b: undefined, scope: window}
//     var b = 12;
//     //  LE = {b: 12, scope: window}
//     foo();
// }

// function foo() {
//     // var LE = {scope: window}

//     console.log(b, 'b in foo');
// }

// a();


//------------ Замыкание ------------

function a() {
    // LE ={ counter: undefined}
    var counter = 0;
    // LE ={ counter: 0}

    return function() {
        counter++;
        console.log(counter);
    }
}

var b = a();

b(); 

a = null;

b();

b();
b();
b();




function initSlider(size) {

}


var slider = initSlider(5);


slider.up()//1
slider.up()//2
slider.up()//3
slider.up()//4
slider.up()//5
slider.up()//1
slider.up()//2
slider.reset();//1
slider.up()//2
slider.up()//3
slider.down()//2
slider.down()//1
slider.down()//5
// slider.set(10)




