const HashSet = require("./hashset");

function main() {
    const set = new HashSet();

    console.log("Adding 'apple' to the set.");
    set.add('apple');
    console.log("Current set keys:", set.keys());
    console.log("Set contains 'apple':", set.has('apple'));
    console.log("Set contains 'banana':", set.has('banana'));

    console.log("Adding 'banana' to the set.");
    set.add('banana');
    console.log("Current set keys:", set.keys());
    console.log("Set contains 'banana':", set.has('banana'));

    console.log("Removing 'apple' from the set.");
    set.remove('apple');
    console.log("Current set keys:", set.keys());
    console.log("Set contains 'apple':", set.has('apple'));

    console.log("Adding 'orange' to the set.");
    set.add('orange');
    console.log("Adding 'grape' to the set.");
    set.add('grape');
    console.log("Current set keys:", set.keys());
    console.log("Current set length:", set.length());

    console.log("Clearing the set.");
    set.clear();
    console.log("Current set keys:", set.keys());
    console.log("Current set length:", set.length());

    for (let i = 0; i < 20; i++) {
        set.add(`item${i}`);
    }
    console.log("After adding 20 items, current set keys:", set.keys());
    console.log("Current set length:", set.length());
}

main();

