// @ts-check

class Singleton extends EventTarget {
    constructor() {
        super();

        this._count = 0;
        setInterval(() => { this.count++; }, 1000);
    }

    emitCount() {
        this.dispatchEvent(new CustomEvent('message', {
            detail: {count: this.count}
        }));
    }

    set count(val) {
        this._count = val;
        this.emitCount();
    }

    get count() {
        return this._count;
    }

    reset() {
        this.count = 0;
    }
}

const _instance = new Singleton();

export const singleton = _instance;