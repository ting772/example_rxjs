const { fromEvent, bufferCount, tap, map } = rxjs;

fromEvent(document, "keyup")
  .pipe(
    map((e) => e.key),
    tap(console.log),
    bufferCount(5, 1)
  )
  .subscribe((arr) => console.log(arr.join("")));
