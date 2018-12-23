// Here is the first primise.

function resolvePromise() {
  return Promise.resolve("Success").then(function(value) {
    console.log("Here is the promise: ", value);
  });
}

resolvePromise();

// var promiseHere = Promise.resolve("Succes");

// promiseHere.then(value => {
//   console.log(value);
// });
