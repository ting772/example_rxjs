const { partition, fromEvent } = rxjs;

const move$ = fromEvent(document, "mousemove");

const [xGy, xNGy] = partition(move$, (e, index) => {
  return e.pageX > e.pageY;
});

xGy.subscribe((v) => {
  console.log(`-------${v.pageX}:${v.pageY}`);
});
