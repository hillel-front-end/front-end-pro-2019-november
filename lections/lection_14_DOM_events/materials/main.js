console.log('Lection_16');


window.onload = function() {
    var run = document.querySelector('#run');

    console.dir(run, 'run');

    // run.onclick = function () {
    //     var btnName = this.innerHTML;

    //     console.log('click');
    //     document.body.classList.toggle('color');
    //     // this.innerHTML = '..loading';

    //     // setTimeout(function() {
    //     //     run.innerHTML = btnName;
    //     // }, 3000);

    //     // console.dir(this, 'this')
    // };


    // run.onmousedown = function() {
    //     console.log('mousedown');
    // }

    // run.onmouseup = function() {
    //     console.log('onmouseup');
    // }

    // run.onmousemove = function() {
    //     console.log('onmousemove');
    // }

    // run.onmouseenter = function() {
    //     console.log('onmouseenter');
    // }

    // run.onmouseleave = function() {
    //     console.log('onmouseleave');
    // }

    function play(event) {
        console.log('play')
        console.log(event.type, 'event');

        console.log(event, 'event');
    }

    function stop() {
        console.log('stop')
    }

    // run.onclick = play;
    // run.onclick = stop;


    // ------ addEventListener ---------

    run.addEventListener('click', play);// (event, callback)

    run.addEventListener('click', stop);// (event, callback)

    // run.addEventListener('mousemove', play);// (event, callback)




}