function thirdFunction() {
  return Promise.resolve("Success").then(function(value) {
    setTimeout(() => {
      console.log(value);
    }, 1000);
  });
}

thirdFunction();
