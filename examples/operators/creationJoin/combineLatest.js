const { combineLatest, interval, fromEvent, map } = rxjs;

combineLatest(
  interval(1000).pipe(map((v) => `A-${v}`)),
  fromEvent(document, "click").pipe(map((e) => `x:${e.pageX},y:${e.pageY}`))
).subscribe((arr) => {
  console.log(arr);
});
