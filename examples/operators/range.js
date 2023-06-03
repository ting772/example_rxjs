const { range } = rxjs;

range(10).subscribe((v) => console.log(`a-${v}`));
range(10, 10).subscribe((v) => console.log(`b-${v}`));
