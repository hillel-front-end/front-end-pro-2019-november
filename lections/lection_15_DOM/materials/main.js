/*
   1. attrs: getAttribute, setAttribute, removeAttribute,
    dataset,
   2. createElement
   3. appendChild
   4. Навесить событие на дин. элем.
   5. cycles event


*/



window.onload = function() {
    // var div = document.createElement('div');
    //     div.classList.add('new-tag');
    //     div.style.color = 'red';
    //     div.innerHTML = '<a href="#">Link</a>'

    // console.dir(div, 'div');

    // var parent = document.querySelector('.parent');

    // console.log(parent)

    // parent.appendChild(div);// || append
  
    // setTimeout(function() {
    //     parent.prepend(div);

    //     setTimeout(function() {
    //         parent.after(div);

    //         setTimeout(function() {
    //             parent.before(div);

    //             setTimeout(function() {
    //                 div.onclick = function() {
    //                     console.log('CLICK');
    //                 }
    //             }, 2000)
            
    //         }, 3000);
    //     }, 3000);
    // }, 3000);




 function sendAjax() {
     var goods = [
        {
            name:"Milk",
            price: '12$'
        },
        {
            name:"juce",
            price: '20$'
        }
     ];

     return goods;
 }
    

 var button = this.document.querySelector('.button');

 button.addEventListener('click', function() {
   var goods = sendAjax();
   var container = document.createElement('div');
    // var fragment = document.createDocumentFragment();
    // console.dir(fragment, 'fragment');
   
   for(var i = 0; i  < goods.length; i++) {
     var div = document.createElement('div');
        div.innerHTML = "Product: " +  goods[i].name + " " + "Price: " + goods[i].price;
        // document.querySelector('.parent').append(div);// bad
        container.append(div);
   }

   document.querySelector('.parent').append(container);// good
 });

} 




