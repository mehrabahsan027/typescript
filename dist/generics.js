/**
 * TYPESCRIPT GENERICS - A Comprehensive Guide
 * Generics allow us to create components that work over a variety of types
 * rather than a single one. This makes our code reusable and safe.
 */
// 1. A Basic Generic Function
// <T> is a placeholder for the type. When you call the function, 
// TypeScript "captures" the type you provide and uses it for 'value' and the return type.
function wrapInArray(value) {
    // This function takes an input of any type and returns it inside an array.
    return [value];
}
// Usage:
var stringArray = wrapInArray("Hello"); // T becomes 'string'
var numberArray = wrapInArray(100); // T becomes 'number'
// 2. Multiple Type Parameters
// You aren't limited to just one. You can use T, U, V, etc.
function pair(first, second) {
    return [first, second];
}
// Usage: first is string, second is number
var result = pair("Age", 25);
var bookBox = {
    content: "The Great Gatsby",
    isOpen: true
};
var giftBox = {
    content: 5000,
    isOpen: false
};
function logLength(item) {
    // Now we can safely access .length because TypeScript knows it exists.
    console.log("Length is:", item.length);
}
logLength("Hello"); // Works: Strings have a length.
logLength([1, 2, 3]); // Works: Arrays have a length.
// logLength(10);         // Error: Numbers do not have a length.
// 5. Generic Classes
// Classes can use generics to manage internal data types safely.
var StorageContainer = /** @class */ (function () {
    function StorageContainer() {
        this.items = [];
    }
    StorageContainer.prototype.addItem = function (item) {
        this.items.push(item);
    };
    StorageContainer.prototype.getAllItems = function () {
        return this.items;
    };
    return StorageContainer;
}());
// Usage for strings:
var textStorage = new StorageContainer();
textStorage.addItem("First Note");
// Usage for numbers:
var numStorage = new StorageContainer();
numStorage.addItem(404);
