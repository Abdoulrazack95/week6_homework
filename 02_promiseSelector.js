// Second promise

var boolean = true;

var success = new Promise(function(resolve, reject) {
  if (boolean) {
    resolve("success");
  } else {
    reject("Failure");
  }
});

console.log(success);
