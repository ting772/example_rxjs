const { bufferTime, interval } = rxjs;

// let first;
// interval(1000)
//   .pipe(bufferTime(2000, 1000))
//   .subscribe((v) => {
//     if (!first) first = +new Date();
//     console.log(`[${Math.floor((+new Date() - first) / 1000)}s]     ${v}`);
//   });

interval(1000).pipe(bufferTime(2000)).subscribe(console.log);
