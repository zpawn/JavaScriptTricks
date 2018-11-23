// [Observable]
function Observable () {
    const observers = [];

    this.sendMessage = function (msg) {
        observers.forEach(observer => {
            observer.notify(msg)
        });
    };

    this.addObserver = function (observer) {
        observers.push(observer);
    };
}

// [Observer]
function Observer (behavior) {
    this.notify = function (msg) {
        behavior(msg)
    }
}

const observable = new Observable();
const o1 = new Observer(function (msg) { console.log(`one: ${msg}`) });
const o2 = new Observer(function (msg) { console.log(`two: ${msg}`) });
observable.addObserver(o1);
observable.addObserver(o2);

setTimeout (function () {
    observable.sendMessage(new Date())
}, 3000);
