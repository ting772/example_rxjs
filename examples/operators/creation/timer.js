const { timer, concatMap, of, takeUntil, interval } = rxjs;

timer(1000).subscribe(console.log);

let date = new Date();
date.setTime(+date + 2000);
timer(date).subscribe(console.log);

//等待3s后抛出另外一个observable的数据
timer(3000)
  .pipe(concatMap(() => of("a", "b", "c", "d")))
  .subscribe(console.log);

//一直获取数据直到多少秒后或者特定时间点
interval(1000)
  .pipe(
    takeUntil(
      timer(3100) //3s后停止打印
    )
  )
  .subscribe((v) => console.log(`A-${v}`));

timer(0, 1000).subscribe((v) => console.log(`B-${v}`));
