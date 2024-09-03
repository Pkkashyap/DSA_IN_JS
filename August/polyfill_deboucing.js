function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function handleInput(a) {
  console.log(a);
  console.log("Input processing...");
}

const debouncedHandleInput = debounce(handleInput, 3000);

// Simulate input events
debouncedHandleInput(1); // This won't trigger the immediate execution
debouncedHandleInput(2); // This won't trigger the immediate execution

// After 300 milliseconds, only the last invocation will trigger the execution
// setTimeout(debouncedHandleInput, 3000);
