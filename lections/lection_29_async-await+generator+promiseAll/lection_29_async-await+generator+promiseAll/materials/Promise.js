  var p1 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 7000, "one"); 
  }); 

  var p2 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 2000, "two"); 
  });

  var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
  });

  var p4 = new Promise((resolve, reject) => {
    setTimeout(function(value) {
        resolve("four");
    }, 4000);
  });

  var p5 = new Promise((resolve, reject) => {
    reject("reject - 11111");   // Это обещание прервет Promise.all
  });
  
  Promise.all([p1, p2, p3, p4, p5]).then(value => { 
    console.log(value);
  }, reason => {
    console.log(reason)
  });
  
  //Выведет