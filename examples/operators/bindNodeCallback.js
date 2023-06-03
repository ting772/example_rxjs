const { bindNodeCallback } = rxjs;

const fac = bindNodeCallback((a, b, callback) => {
  // callback(null, `${a}-${b}`);
  // callback(Error("这是一个异常"));
  // callback(null, 1, 2, 3);
  throw Error("这也是一个异常");
});

fac("a", "1").subscribe({
  next: console.log,
  error: (e) => {
    console.log("----------", e);
  },
  complete: () => console.log("complete"),
});
