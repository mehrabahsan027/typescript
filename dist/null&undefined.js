/**
 * ============================================================================
 * TYPESCRIPT CRASH COURSE: MASTERING NULL AND UNDEFINED
 * A comprehensive cheat sheet for quick revision.
 * ============================================================================
 *
 * CONCEPTUAL DEFINITIONS:
 * - undefined: A variable has been declared, but has not yet been assigned a value.
 *              It represents unintentional absence.
 * - null:      An explicit assignment that represents "nothing", "void", or "empty".
 *              It represents intentional absence.
 */
var _a;
// ============================================================================
// 1. THE DIFFERENCE IN CORE TYPESCRIPT / JAVASCRIPT
// ============================================================================
var unassignedVariable;
console.log(unassignedVariable); // Output: undefined (JS assigned this automatically)
var emptyValue = null;
console.log(emptyValue); // Output: null (We assigned this intentionally)
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object" (A historical JavaScript quirk)
// ============================================================================
// 2. STRICT NULL CHECKS (`strictNullChecks: true` in tsconfig.json)
// ============================================================================
// When enabled, TypeScript treats 'null' and 'undefined' as distinct types.
// You cannot assign them to regular types like string, number, or boolean.
var regularString = "Hello";
// regularString = null;      // ❌ Compile Error: Type 'null' is not assignable to type 'string'.
// regularString = undefined; // ❌ Compile Error: Type 'undefined' is not assignable to type 'string'.
// ============================================================================
// 3. HANDLING MECHANISM A: UNION TYPES (|)
// ============================================================================
// To allow a variable to explicitly hold a string, null, or undefined, 
// combine them using the pipe (|) operator.
var databaseResponse;
databaseResponse = "Data Found"; // Valid
databaseResponse = null; // Valid (e.g., resource explicitly deleted)
databaseResponse = undefined; // Valid (e.g., search operation not performed yet)
var userA = { username: "Alice", bio: "Software Engineer" }; // Valid
var userB = { username: "Bob" }; // Valid, bio defaults to undefined
var activeUser = { name: "Charlie" };
// Without ?.: activeUser.contact.email -> ❌ Crashes runtime with TypeError
// With ?.: Stops execution gracefully when it hits 'null'
console.log((_a = activeUser === null || activeUser === void 0 ? void 0 : activeUser.contact) === null || _a === void 0 ? void 0 : _a.email); // Output: undefined
// ============================================================================
// 6. HANDLING MECHANISM D: NULLISH COALESCING OPERATOR (??)
// ============================================================================
// Provides a fallback value if and only if the expression evaluates to null or undefined.
// Note: It does NOT trigger for other falsy values like empty string "" or 0.
var serverPort = null;
var finalizedPort = serverPort !== null && serverPort !== void 0 ? serverPort : 3000; // Falls back to 3000 because serverPort is null
console.log(finalizedPort); // Output: 3000
var customTag = "";
var resolvedTag = customTag !== null && customTag !== void 0 ? customTag : "DefaultTag"; // Does NOT fall back because "" is not null/undefined
console.log(resolvedTag); // Output: ""
// ============================================================================
// 7. HANDLING MECHANISM E: NON-NULL ASSERTION OPERATOR (!)
// ============================================================================
// Use this only when you are 100% certain a value is not null or undefined,
// even though TypeScript thinks it might be. It tells the compiler to shut up.
// Warning: Use with caution! If the value is actually null, your code will crash.
function getLength(text) {
    // return text.length; // ❌ Compile Error: Object is possibly 'null'.
    return text.length; // Valid in compiler. (Tells TS: "Trust me, text is not null")
}
// ============================================================================
// SUMMARY CHEAT SHEET FOR RESETTING LOGIC:
// ============================================================================
//  - Allow null/undefined?     -> Use Union Type (`type | null`)
//  - Avoid runtime crashes?    -> Use Optional Chaining (`object?.property`)
//  - Provide default values?   -> Use Nullish Coalescing (`value ?? fallback`)
//  - Force bypass compiler?    -> Use Non-null assertion (`value!`)
// ============================================================================
