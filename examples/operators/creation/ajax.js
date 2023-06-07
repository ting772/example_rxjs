let { ajax } = rxjs;

ajax = ajax.ajax;

ajax("http://www.baidu.com").subscribe(
  (x) => {
    console.log(x);
  },
  (err) => {
    console.log(err.message);
  }
);
