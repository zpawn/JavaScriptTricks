import $ from 'jquery';

// [Observable]
class Observable {
    constructor () {
        this.observers = [];
        this.sendMessage = this.sendMessage.bind(this);
        this.addObserver = this.addObserver.bind(this);
    }

    sendMessage (msg) {
        this.observers.forEach(observer => {
            observer.notify(msg)
        });
    };

    addObserver (observer) {
        this.observers.push(observer);
    };
}

// [Observer]
class Observer {
    constructor(behavior) {
        this.behavior = behavior;
        this.notify = this.notify.bind(this);
    }

    notify (msg) {
        this.behavior(msg);
    }
}

////

const observable = new Observable();

const basketObserver = new Observer(id => {
    $('.basket__products-list').append(
        $('<li></li>')
            .addClass('basket__product')
            .text(`Product ${id}`)
    );
});

const modalObserver = new Observer(id => {
    const modal = $('.buy-modal'),
        msg = `Product ${id} add to basket`;
    $('.buy-modal__message').text(msg);
    modal.removeClass('buy-modal--hide');
    setTimeout(() => modal.addClass('buy-modal--hide'), 2000);
});

const serverObserver = new Observer(id => console.log(`[id:${id}]`));

observable.addObserver(basketObserver);
observable.addObserver(modalObserver);
observable.addObserver(serverObserver);

$('.product').click(e => {
    const id = $(e.target).data('id');
    observable.sendMessage(id);
});
