console.log('Lection_17');

/*
JSON поддерживает следующие типы данных:

    Объекты { ... }
    Массивы [ ... ]
    Примитивы:
    строки,
    числа,
    логические значения true/false,
    null.

*/


/////////

/*
2) localStorage/sessionStorage 
    setItem(key, value) – сохранить пару ключ/значение.
    getItem(key) – получить данные по ключу key.
    removeItem(key) – удалить данные с ключом key.
    clear() – удалить всё.
    key(index) – получить ключ на заданной позиции.
    length – количество элементов в хранилище.
*/

window.onload = function() {
    var parent = document.querySelector('.parent');

    // var actions = {
    //     save: function() {
    //         console.log('..saving')
    //     },
    //     copy: function () {
    //         console.log('... copy')
    //     }, 
    //     delete: function () {
    //         console.log('delete');
    //     }
    // }



    // console.log('foo', foo);

    // foo.good = '123';

    // foo.setAttribute('good', 'no good');

    // // console.log(foo.getAttribute('good'));

    // parent.addEventListener('click', function (event) {
    //     var target = event.target;

    //     console.dir(target, 'target');

    //     if (target && target.dataset.action) {
    //         var currentAction =  actions[target.dataset.action];
    //         currentAction();
    //     }
    // });
    // var foo = localStorage.getItem('foo');

    // if (foo) {
    //     document.body.append(foo);
    // } else {
    //     localStorage.setItem('foo', prompt());
    // }

    // localStorage.setItem('foo', {value: 123});


    var obj = {
        name: 'Valera',
        age: 12,
        isMarried: false,
        children: [1,2,3],
        a: {
            name: 'foo'
        }
    }

    // var value = localStorage[textField[i].name];
    


    var jsonValue = JSON.stringify(obj);
    
    // localStorage.setItem('foo', jsonValue);

    // var json = localStorage.getItem('foo');

    
    // console.log(JSON.parse(json), 'json');

 ////////////////////////////////////////////////////////////////////
    var fields = document.querySelectorAll('.firstName, .lastName');
    var button = document.querySelector('#go');

    getValueFroStore()m;


    function setValueInStore() {
        var obj = {};
        
        for(var i = 0; i < fields.length; i++) {
            var name = fields[i].name;
            var value = fields[i].value;
            obj[name] = value;
        }
    

        var json = JSON.stringify(obj);
        localStorage.setItem('form', json);
    }

    button.onclick = setValueInStore;

    function getValueFromStore() {
        var obj = JSON.parse(localStorage.getItem('form'));
       
        if (obj) {
            for(var i = 0; i < fields.length; i++) {
                var name = fields[i].name;
                var value = obj[name];
                fields[i].value = value;
            }
        }
    
    }



}







