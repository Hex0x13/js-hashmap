class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}


class HashMap {
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
                let ptr = elem;
                while(ptr) {
                    this.set(ptr.data.key, ptr.data.value);
                    ptr = ptr.next;
                }
            }

            tmp = null;
        }
    }

    set(key, value) {
        const index = this.hash(key);
        let prev = null;
        let ptr = this.#get(index);

        // if the element is empty
        if (!ptr) {
            this.#set(index, new Node({ key, value }));
            ++this.#length;
            this.grow();
            return;
        }

        while (ptr) {
            // If the key already exists just overwrite the value.
            if (ptr.data.key === key) {
                ptr.data.value = value;
                return;
            }
            prev = ptr;
            ptr = ptr.next;
        }
        if (prev) {
            prev.next = new Node({ key, value });
            ++this.#length;
            this.grow();
        }
    }

    get(key) {
        const index = this.hash(key);
        let ptr = this.#get(index);
        
        while(ptr) {
            if (ptr.data.key === key) {
                return ptr.data.value;
            }
            ptr = ptr.next;
        }

        return null;
    }

    has(key) {
        const index = this.hash(key);
        let ptr = this.#get(index);
        
        while(ptr) {
            if (ptr.data.key === key) {
                return true;
            }
            ptr = ptr.next;
        }

        return false;
    }

    remove(key) {
        const index = this.hash(key);
        let prev = null;
        let ptr = this.#get(index);

        while(ptr) {
            if (ptr.data.key === key) {
                if (!prev) {
                    this.#set(index, undefined);
                } else {
                    prev.next = ptr.next;
                    ptr.next = null;
                }
                --this.#length;
                return true;
            }
            prev = ptr;
            ptr = ptr.next;
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
            let ptr = elem;
            while (ptr) {
                iterator.push(ptr.data.key);
                ptr = ptr.next;
            }
        }
        return iterator;
    }


    values() {
        const iterator = [];
        for (const elem of this.#bucket) {
            let ptr = elem;
            while (ptr) {
                iterator.push(ptr.data.value);
                ptr = ptr.next;
            }
        }
        return iterator;
    }

    entries() {
        const iterator = [];
        for (const elem of this.#bucket) {
            let ptr = elem;
            while (ptr) {
                iterator.push([ptr.data.key, ptr.data.value]);
                ptr = ptr.next;
            }
        }
        return iterator;
    }
}



module.exports = HashMap;
