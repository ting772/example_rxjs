const { bindCallback } = rxjs;

console.log("before bindCallback");
const fac = bindCallback((name, gender, cb) => {
  console.log("callback called");
  cb(`${name}-${gender}`,"extra blablabla...");
});
console.log("after bindCallback");

fac("张三", "男").subscribe({
  next: console.log,
  complete: () => {
    console.log("complete");
  },
});
