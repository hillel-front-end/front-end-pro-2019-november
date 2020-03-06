//  ------------------ [1 - async] ------------------
// async function sendAjax() {
//     return 1
// }

// функция с async "всегда" возвращает промис.
// console.log(sendAjax());

// sendAjax()
//     .then((value) => console.log(value), () => console.log('123123') );

//  ------------------ [2 - async + await ]------------------
//1) асинхронное программирование как синхронное!
// 2)Особенность асинхронных функций в том что они позволяют “вытащить” значение 
//   завершенного промиса без метода then.

// function sendAjax(url, method) {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url, true);
//     xhr.send();

//     return new Promise((resolve, reject) => {
//         xhr.onreadystatechange = function() { // (3)
//             if (xhr.readyState != 4) return;

//             if (xhr.status == 200) {
//                 resolve(xhr.responseText);
//             }
//         }
//     });
// }

// async function getData() {
//     let resp = await sendAjax('https://jsonplaceholder.typicode.com/posts/11', 'get');
//     console.log(resp, 'resp 111111111');
//     let resp2 = await sendAjax('https://jsonplaceholder.typicode.com/posts/4', 'get');
//     console.log(resp2, 'resp 2222222');
//     // console.log('start');

//     // foo = await new Promise((resolve) => {
//     //   setTimeout(() => {
//     //     console.log('in promise');
//     //     resolve('123123123')
//     //   }, 1000);
//     // })
//     // // .then((res) => console.log(res, 'res'));

//     // console.log('after promise', foo);
// }


// getData();




// --------------- fetch ----------------------

// async function a(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/11')
//     console.log(response, 'response');
//     const data = await response.json();
    
//     console.log(data, 'data');
//     const responseSecond =  await fetch('https://jsonplaceholder.typicode.com/posts/10');
//     const dataSecond = await responseSecond.json();
//     console.log(dataSecond);
// };

// console.log(a(), 'data');

// console.log(123123123);