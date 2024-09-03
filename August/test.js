let a = [1, 2, 3, 4, 5];

let b = a.filter((val) => {
  return val > 3;
});

let c = a.reduce((acc, val) => {
  return (acc += val);
}, 0);

let d = a.map((val) => {
  return val + 1;
});
console.log(d);
// const crypto = require("crypto");

// let obj = new Promise((res, rej) => {
//   res("1");
// });

// let obj2 = new Promise((res, rej) => {
//   rej("2");
// });

// let obj3 = new Promise((res, rej) => {
//   res("3");
// });

// (async () => {
//   try {
//     let a = await Promise.allSettled([obj, obj2, obj3]);
//     console.log(a);
//   } catch (error) {
//     console.log("err", error);
//   }
// })();

// crypto.pbkdf2("pass", "salt", 5000000, 50, "sha512", (err, key) => {
//   console.log("1 done");
// });

// crypto.pbkdf2("pass", "salt", 5000000, 50, "sha512", (err, key) => {
//   console.log("2 done");
// });

// crypto.pbkdf2("pass", "salt", 5000000, 50, "sha512", (err, key) => {
//   console.log("3 done");
// });

// crypto.pbkdf2("pass", "salt", 5000000, 50, "sha512", (err, key) => {
//   console.log("4 done");
// });

// // co(0);

// // function co(i) {
// //   if (i == 5) return;
// //   setTimeout(() => {
// //     console.log(i);
// //     co(i + 1);
// //   }, 1000 * i);
// // }
