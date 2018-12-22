// Second promise

function secondFunction(boolean) {
  if (boolean === true) {
    return Promise.resolve("Succes").then(function(value) {
      console.log(value);
    });
  } else {
    return Promise.reject("Failure").catch(function(value) {
      console.log(value);
    });
  }
}

secondFunction(true);
