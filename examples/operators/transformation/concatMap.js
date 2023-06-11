const { concatMap, interval, map, of, take } = rxjs;

of("a", "b", "c")
  .pipe(
    concatMap((v) => {
      return interval(1000).pipe(
        map((n) => `${v}-${n}`),
        take(10)
      );
    })
  )
  .subscribe(console.log);
