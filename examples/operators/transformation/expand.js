const { expand, of, timeout, map } = rxjs;

of("a")
  .pipe(
    expand((x) => {
      return timeout(1000).pipe(map((v) => `${x}-${v}`));
    })
  )
  .subscribe(console.log);
