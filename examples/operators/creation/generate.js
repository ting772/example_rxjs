const { generate } = rxjs;

generate(
  0,
  (x) => x < 20,
  (x) => x + 2,
  (x) => `a-${x}`
).subscribe(console.log);
