
console.log('script run');

/* 

 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = func(){} -- вызываеися всякий раз когда изменяеться, readyState
 xhttp.readyState - cодержит состояние объекта XMLHttpRequest. Изменяется от 0 до 4:
    0: запрос не инициализирован
    1: установлено соединение с сервером
    2: запрос получен
    3: обработка запроса
    4: запрос завершен и ответ готов

   xhttp.open("GET", "ajax_info.txt", true);
   xhttp.send();

*/


window.onload = function() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        console.log(xhttp.readyState, 'xhttp.readyState');
        if (xhttp.readyState == 4) {
            let data = xhttp.responseText;
            let parsedData = JSON.parse(data);
            console.log(parsedData)// {name:'Valera', lastName:"Adsasd", isMaried: true, childrens: [1,2,3]}
            render(parsedData);
        }
    }

    
   xhttp.open("post", "http://localhost:3000/users", true);

   this.document.querySelector('#btn').onclick = function() {
       var data = {name: '123'};
       var jsonData = JSON.stringify(data);

        xhttp.send(jsonData);
   }

   function render(data) {
    const users = document.querySelector('.users');

    let items = data.map(item => '<div' + ' class="block"' + '>' + item.name + '</div>');
      users.innerHTML  = items.join(' ')
   }
   
}