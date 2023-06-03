const { from } = rxjs;

function log(ob) {
  ob.subscribe(console.log);
}

//array
console.log("before from array");
log(from([1, 2, 3, 4, 5]));
console.log("after from array");

//iterable
log(from("hello"));

//array-like object
log(from({ 0: "a", 1: "b", 2: "c", length: 3 }));

//promise ->直接抛出 ["p1","p2","p3"],而不是 p1,p2,p3分别一次抛出
log(from(Promise.resolve(["p1", "p2", "p3"])));
