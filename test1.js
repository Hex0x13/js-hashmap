const HashMap = require("./hashmap");

// Test
function main() {
    const hashMap = new HashMap();

    console.log("Testing set and get methods:");
    hashMap.set("key1", "value1");
    console.log(hashMap.get("key1"));
    hashMap.set("key2", "value2");
    console.log(hashMap.get("key2"));
    hashMap.set("key1", "newValue1");
    console.log(hashMap.get("key1"));

    console.log("Testing has method:");
    console.log(hashMap.has("key1"));
    console.log(hashMap.has("key3"));

    console.log("Testing remove method:");
    hashMap.set("key3", "value3");
    console.log(hashMap.remove("key3"))
    console.log(hashMap.get("key3"));
    console.log(hashMap.remove("key3"));

    console.log("Testing length method:");
    console.log(hashMap.length());

    console.log("Testing clear method:");
    hashMap.clear();
    console.log(hashMap.length());
    console.log(hashMap.get("key1"));

    hashMap.set("key1", "value1");
    hashMap.set("key2", "value2");
    hashMap.set("key3", "value3");
    hashMap.set("key4", "value4");

    console.log("Testing keys method:");
    console.log(hashMap.keys());

    console.log("Testing values method:");
    console.log(hashMap.values());

    console.log("Testing entries method:");
    console.log(hashMap.entries());

    console.log("Testing grow functionality:");
    for (let i = 5; i <= 20; i++) {
        hashMap.set("key" + i, "value" + i);
    }
    console.log(hashMap.keys());
    console.log(hashMap.values());
}

main();

