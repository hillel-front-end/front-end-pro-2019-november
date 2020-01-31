// console.log(1)

// function a() {
//     console.log('a');
//     console.log(2)
// }



// setTimeout(() => {
//     console.log('settimeout');
//     console.log(3);
// }, 0);


// for (let index = 0; index < 5000; index++) {
//     let z = 123;
// }

// console.log(4);

// a();


// function m1() {
//     m2()
// }



// function m2() {
//     m3() 
// }

// function m3() {
//     m3()
// }

// m1();; .. Maximum call stack size exceeded


// setTimeout(function() {
//     console.log('1')
//     setTimeout(function() {
//         console.log('2');
//         setTimeout(function() {
//             console.log('3');
//         }, 5000);
//     }, 5000);
// }, 5000);

///--------------Promise --------------


console.log(1);

let promise = new Promise(function(resolve, reject) {
    console.log(2);

     setTimeout(function(){
        const id = prompt('ID');

            if(id > 10){
                resolve(id)
            } else {
                reject(id);
            }
     }, 5000);

});

console.log(3);

promise.then(function(id){
    console.log('resolve ... callback - 1.1', id);
    if (id < 15) {
        return id;
    } else {
        return Promise.reject(id);
    }
},
function(id) {
    console.log('reject ... callback - 1.2', id);
})
.then(function(id){
    console.log('resolve ... callback - 2.1', id);
},
function(id){
    console.log('reject ... callback - 2.2', id);
});


// console.log('6');
// console.log('6');
// console.log('6');

// console.log('6');
// console.log('6');
// // function Promise(cb) {

//     cb(function resolve(){}, function reject(){});
// }