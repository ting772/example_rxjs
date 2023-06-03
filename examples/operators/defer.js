const { defer, of } = rxjs;

console.log("before defer defined");
const d = defer(() => {
  console.log("factory called");
  // return [1, 2, 3];
  // return "hello";
  // return new Set([1, 2, 3]);
  return Promise.resolve([1, 2, 3]);
});
console.log("after defer defined");

d.subscribe((x) => {
  console.log(`text-${x}`);
});
