// Here is the first primise.

function resolvePromise() {
  return Promise.resolve("Success")
    .then(function(value) {
      console.log("Here is the promise: ", value);
    })
    .catch(function(value) {
      console.log("There is an erro: ", value);
    });
}

resolvePromise();
