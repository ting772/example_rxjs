const { of } = rxjs;

console.log("before of");
of(1, 2, 3, 4, 5, 6).subscribe(console.log);
console.log("after of");
