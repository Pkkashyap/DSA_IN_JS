function debouce(func, delay) {
  let timer;
  return function () {
    clearInterval(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}

const call = debouce(() => {
  console.log("hello");
}, 3000);
