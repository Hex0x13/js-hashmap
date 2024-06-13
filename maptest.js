// main.js
const HashMap = require('./hashmap');

function main() {
    const hashMap = new HashMap();

    console.log("Testing set and get methods with multiple keys:");
    hashMap.set("apple", "fruit");
    console.log(hashMap.get("apple"));
    hashMap.set("carrot", "vegetable");
    console.log(hashMap.get("carrot"));
    hashMap.set("banana", "fruit");
    console.log(hashMap.get("banana"));

    console.log("Testing overwriting a value:");
    hashMap.set("carrot", "root");
    console.log(hashMap.get("carrot"));

    console.log("Testing has method for existing and non-existing keys:");
    console.log(hashMap.has("apple"));
    console.log(hashMap.has("carrot"));
    console.log(hashMap.has("tomato"));

    console.log("Testing remove method with existing and non-existing keys:");
    console.log(hashMap.remove("banana"));
    console.log(hashMap.get("banana"));
    console.log(hashMap.remove("banana"));

    console.log("Testing length method after multiple operations:");
    console.log(hashMap.length());

    console.log("Testing clear method and ensure it resets the map:");
    hashMap.clear();
    console.log(hashMap.length());
    console.log(hashMap.get("apple"));

    console.log("Re-populating the HashMap with different types of keys:");
    hashMap.set("key1", "value1");
    hashMap.set("key2", "value2");
    hashMap.set("key3", "value3");
    hashMap.set("key4", "value4");

    console.log("Testing keys method after re-populating:");
    console.log(hashMap.keys());

    console.log("Testing values method after re-populating:");
    console.log(hashMap.values());

    console.log("Testing entries method after re-populating:");
    console.log(hashMap.entries());

    console.log("Testing grow functionality by adding more elements:");
    for (let i = 5; i <= 20; i++) {
        hashMap.set("key" + i, "value" + i);
    }
    console.log(hashMap.keys());
    console.log(hashMap.values());

    console.log("Additional test: Ensure keys with similar hash codes are handled:");
    hashMap.set("a", "first");
    hashMap.set("b", "second");
    console.log(hashMap.get("a"));
    console.log(hashMap.get("b"));
    console.log(hashMap.remove("a"));
    console.log(hashMap.remove("b"));


    console.log("Additional test: Large number of entries:");
    for (let i = 21; i <= 40; i++) {
        hashMap.set("key" + i, "value" + i);
    }
    console.log(hashMap.length());
    console.log(hashMap.entries().length);
}

main();

