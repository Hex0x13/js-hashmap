
class HashSet {
    #bucket;
    #length;
    
    constructor(cap=16) {
        this.#bucket = new Array(cap);
        this.#length = 0;
    }

    #get(index) {
        if (index < 0 || index >= this.#bucket.length) {
            throw new Error("Trying to access index out of bound");
        }
        return this.#bucket[index];
    }

    #set(index, value) {
        if (index < 0 || index >= this.#bucket.length) {
            throw new Error("Trying to access index out of bound");
        }
        this.#bucket[index] = value;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; ++i) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= this.#bucket.length;
        }

        return hashCode;
    }

    grow() {
        const loadFactor = Math.ceil(this.#bucket.length * 0.8);
        if (this.#length >= loadFactor) {
            let tmp = this.#bucket;
            this.#bucket = null;
            this.#bucket = new Array(tmp.length * 2); 
            this.#length = 0;

            for (const elem of tmp) {
                this.add(elem);
            }

            tmp = null;
        }
    }

    add(key) {
        const index = this.hash(key);
        this.#set(index, key);
        ++this.#length;
    }

    get(key) {
        const index = this.hash(key);
        const elem = this.#get(index);

        if (elem) {
            return elem;
        }
        return null;
    }

    has(key) {
        const index = this.hash(key);
        let elem = this.#get(index);
        if (elem) {
            return true;
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);
        let elem = this.#get(index);
        if (elem) {
            this.#set(index, undefined);
            --this.#length;
            return true;
        }
        return false;
    }

    length() {
        return this.#length;
    }

    clear() {
        const capacity = this.#bucket.length;
        this.#bucket = null;
        this.#length = 0;
        this.#bucket = new Array(capacity);
    }

    keys() {
        const iterator = [];
        for (const elem of this.#bucket) {
            if (elem) {
                iterator.push(elem);
            }
        }
        return iterator;
    }
}

module.exports = HashSet;

