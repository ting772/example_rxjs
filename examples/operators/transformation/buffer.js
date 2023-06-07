const { buffer, interval, fromEvent } = rxjs;

fromEvent(document, "click")
  .pipe(buffer(interval(1000)))
  .subscribe((e) => {
    console.log(e);
  });
