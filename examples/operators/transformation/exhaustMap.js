const { exhaustMap, of, fromEvent, interval, take, map, scan } = rxjs;

// of("a", "b", "c")
//   .pipe(
//     exhaustMap((v) =>
//       interval(1000).pipe(
//         map((n) => `${v}-${n}`),
//         take(10)
//       )
//     )
//   )
//   .subscribe(console.log);

fromEvent(document, "click")
  .pipe(
    scan((str, e, index) => {
      if (index == 0) return str;
      return String.fromCharCode(str.charCodeAt(0) + 1);
    }, "a"),
    exhaustMap((v) => {
      return interval(1000).pipe(
        map((n) => `${v}-${n}`),
        take(5)
      );
    })
  )
  .subscribe(console.log);
