function thirdFunction() {
  return Promise.resolve("Success").then(function(value) {
    setTimeout(function() {
      console.log("Here is the third success: ", value);
    }, 1000);
  });
}

thirdFunction();
