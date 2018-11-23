const Singleton = (function () {
    let instance;

    function Singleton () {
        if ( !instance ) {
            instance = this;
        } else {
            return instance;
        }
    }

    return Singleton;
}());

////

const s1 = new Singleton();
const s2 = new Singleton();
console.log(s1 === s2);
