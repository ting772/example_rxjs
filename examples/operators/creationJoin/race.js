const { race, interval, map } = rxjs;

const timer1000 = interval(1000).pipe(map((v) => 1000 + v));
const timer2000 = interval(2000).pipe(map((v) => 2000 + v));

// race(timer1000, timer2000, ["a", "b", "c"]).subscribe((v) => {
//   console.log(v);
// });

race(timer1000, timer2000).subscribe((v) => {
  console.log(v);
});
