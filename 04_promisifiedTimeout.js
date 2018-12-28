function delayTime(delay) {
  return new Promise(function(resolve) {
    setTimeout(() => resolve("Success!"), delay);
  });
}

delayTime(1000);
