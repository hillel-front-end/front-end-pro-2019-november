function sendAjax(method, url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.send();


        xhr.onreadystatechange = function() { // (3)
            console.log(xhr.responseText, xhr.readyState,'xhr.responseText');
            if(xhr.readyState == 4) {
                let response = JSON.parse(xhr.responseText);
                resolve(response);
            }   
        }

    });
}


sendAjax('localhost', 'post')
    .then(() => {
        
    },
    () => {

    });