const { concat, of, timer, take, map } = rxjs;

// let ob = concat(of(1, 2, 3, 4), of("a", "b", "c", "d"));
// ob.subscribe(console.log);
// console.log("after subscribe");

concat(
  timer(1000, 1000).pipe(
    take(10),
    map((v) => `a-${v}`)
  ),
  timer(1000, 1000).pipe(
    take(10),
    map((v) => `b-${v}`)
  )
).subscribe({
  next: console.log,
  complete: () => console.log("complate"),
});
