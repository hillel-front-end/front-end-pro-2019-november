/*

+ Глобальные обьекты Window, Document
+ setTimeout,  setInterval
+ JS обращение в html
+ html коллекция
+ html элемент
+ Обьекты classList, className, innerText

*/

window.onload = function() {
    console.dir(document, 'document')

    var html = document.documentElement;
    
    console.dir(html, 'html');
    
    // var block = document.getElementById('block');

    // var blocks = document.getElementsByClassName('block');
    
    // console.dir(blocks);

    // var blocks = document.getElementsByTagName('div');

    var block = document.querySelector('.foo#block');

    console.dir(block)

   var a = block.querySelector('a');

    var blocks = document.querySelectorAll('.foo#block');

    // console.dir(blocks)

    console.dir(a.style.color = 'green', 'a');
    a.style.left = '10px';

    // blocks.style.color = 'red'; --- >>bad, good: blocks[i]

    block.classList.add('name');
    

    // setTimeout(function(){
    //     block.classList.remove('name');
    // }, 3000)

    
    // setInterval(function(){
    //     block.classList.toggle('name');
    // }, 3000)
        
    console.log(block.classList.contains('name'));


}

console.log('after onload');









