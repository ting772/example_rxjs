const { zip, interval, fromEvent, map } = rxjs;

// const timer1000 = interval(1000).pipe(map((v) => `timer1000--${v}`));
// const timer2000 = interval(2000).pipe(map((v) => `timer2000--${v}`));
// const click = fromEvent(document, "click");

// zip(timer1000, timer2000, click).subscribe((v) => {
//   console.log(v);
// });

const timer1 = interval(1000);
const timer2 = interval(2000);
const click = fromEvent(document, "click");

zip(timer1, timer2, click, function (v1, v2, v3) {
  return `v1-${v1}|v2-${v2}|pos:(${v3.pageX},${v3.pageY})`;
}).subscribe((v) => {
  console.log(v);
});
