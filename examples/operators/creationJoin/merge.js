const { merge, fromEvent, timer, of } = rxjs;

const click = fromEvent(document, "click");
const timer$ = timer(0, 1000);
const data$ = of("a", "b", "c", "d");

// merge(click, timer$, data$).subscribe((v) => {
//   console.log(v);
// });

merge(click, timer$, data$, 2).subscribe((v) => {
  console.log(v);
});
