const { iif, timer, map } = rxjs;

let flag = false;
let start = +new Date();
let dataSource$ = iif(
  () => flag,
  timer(2000).pipe(map((x) => `A-${x}`)),
  timer(1000).pipe(map((x) => `B-${x}`))
);

dataSource$.subscribe((v) => {
  console.log(v, +new Date() - start);
});

// flag = true;
// dataSource$.subscribe((v) => {
//   console.log(v, +new Date() - start);
// });
