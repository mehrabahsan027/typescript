/**
 * TYPESCRIPT GENERICS - A Comprehensive Guide
 * Generics allow us to create components that work over a variety of types 
 * rather than a single one. This makes our code reusable and safe.
 */

// 1. A Basic Generic Function
// <T> is a placeholder for the type. When you call the function, 
// TypeScript "captures" the type you provide and uses it for 'value' and the return type.
function wrapInArray<T>(value: T): T[] {
  // This function takes an input of any type and returns it inside an array.
  return [value];
}

// Usage:
const stringArray = wrapInArray<string>("Hello"); // T becomes 'string'
const numberArray = wrapInArray<number>(100);     // T becomes 'number'


// 2. Multiple Type Parameters
// You aren't limited to just one. You can use T, U, V, etc.
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// Usage: first is string, second is number
const result = pair<string, number>("Age", 25); 








// 3. Generic Interfaces
// Interfaces can also be generic to define the structure of objects flexibly.
interface Box<T> {
  content: T;
  isOpen: boolean;
}

const bookBox: Box<string> = {
  content: "The Great Gatsby",
  isOpen: true
};

const giftBox: Box<number> = {
  content: 5000, 
  isOpen: false
};


// 4. Generic Constraints (using 'extends')
// Sometimes you want a generic function to work only on types that have certain properties.
// Here, we force T to be a type that must have a '.length' property.
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
  // Now we can safely access .length because TypeScript knows it exists.
  console.log("Length is:", item.length);
}

logLength("Hello");       // Works: Strings have a length.
logLength([1, 2, 3]);     // Works: Arrays have a length.
// logLength(10);         // Error: Numbers do not have a length.


// 5. Generic Classes
// Classes can use generics to manage internal data types safely.
class StorageContainer<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getAllItems(): T[] {
    return this.items;
  }
}

// Usage for strings:
const textStorage = new StorageContainer<string>();
textStorage.addItem("First Note");



// Usage for numbers:
const numStorage = new StorageContainer<number>();
numStorage.addItem(404);


