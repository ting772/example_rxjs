const { forkJoin, of, timer, from } = rxjs;

// forkJoin(timer(2000), of(1, 2, 3)).subscribe((v) => {
//   console.log(v);
// });

forkJoin(timer(2000), from([1])).subscribe({
  next: console.log,
  complete: () => console.log("complete"),
});
