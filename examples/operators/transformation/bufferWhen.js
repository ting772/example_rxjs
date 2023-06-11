const { bufferWhen, timer, fromEvent, empty } = rxjs;

empty().subscribe({
  complete() {
    console.log("complete");
  },
});

fromEvent(document, "click")
  .pipe(
    bufferWhen(() => {
      console.log("fac called");
      // return empty()
      return timer(Math.random() * 2000 + 500);
    })
  )
  .subscribe(console.log);
