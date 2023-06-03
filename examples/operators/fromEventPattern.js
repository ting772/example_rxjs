const { fromEventPattern } = rxjs;

let target = {
  pool: {},
  on(type, handler) {
    this.pool[type] ??= [];
    this.pool[type].push(handler);
  },
  off(type, handler) {
    let list = this.pool[type];
    if (!list) return false;
    let index = list.findIndex((fn) => fn == handler);
    if (index == -1) return false;
    list.splice(index, 1);
    return true;
  },
  trigger(type, ...args) {
    (this.pool[type] ?? []).forEach((fn) => fn(...args));
  },
};

console.log("from eventPattern ");

let source = fromEventPattern(
  function (handler) {
    console.log("cb == handler", cb == handler);
    console.log("this", this);
    target.on("test", handler);
  },
  (handler) => {
    console.log("unregister");
    target.off("test", handler);
  }
);
console.log("after eventPattern");

const cb = (v) => {
  console.log("received a value", v);
};

const subscription = source.subscribe(cb);

setTimeout(() => {
  console.log("emit a value");
  target.trigger("test", "张三", "男", "睡觉");
}, 1000);

setTimeout(() => {
  subscription.unsubscribe();
}, 2000);
