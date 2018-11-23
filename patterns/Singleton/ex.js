const Singleton = (function () {
    let instance;
    const SERVER = 'localhost';

    class Singleton {
        constructor () {
            if (instance) return instance;
            instance = this;
        }

        connect () {
            console.log(`Connect to ${SERVER}`);
        }
    }

    return Singleton
}());

////

const s1 = new Singleton();
const s2 = new Singleton();
console.log(s1 === s2);
s2.connect();
