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

// ============================================================================
// 1. THE DIFFERENCE IN CORE TYPESCRIPT / JAVASCRIPT
// ============================================================================

let unassignedVariable; 
console.log(unassignedVariable); // Output: undefined (JS assigned this automatically)

let emptyValue = null;
console.log(emptyValue);         // Output: null (We assigned this intentionally)

console.log(typeof undefined);   // Output: "undefined"
console.log(typeof null);        // Output: "object" (A historical JavaScript quirk)


// ============================================================================
// 2. STRICT NULL CHECKS (`strictNullChecks: true` in tsconfig.json)
// ============================================================================
// When enabled, TypeScript treats 'null' and 'undefined' as distinct types.
// You cannot assign them to regular types like string, number, or boolean.

let regularString: string = "Hello";
// regularString = null;      // ❌ Compile Error: Type 'null' is not assignable to type 'string'.
// regularString = undefined; // ❌ Compile Error: Type 'undefined' is not assignable to type 'string'.


// ============================================================================
// 3. HANDLING MECHANISM A: UNION TYPES (|)
// ============================================================================
// To allow a variable to explicitly hold a string, null, or undefined, 
//  combine them using the pipe (|) operator.

let databaseResponse: string | null | undefined;

databaseResponse = "Data Found"; // Valid
databaseResponse = null;         // Valid (e.g., resource explicitly deleted)
databaseResponse = undefined;    // Valid (e.g., search operation not performed yet)


// ============================================================================
// 4. HANDLING MECHANISM B: OPTIONAL PROPERTIES AND PARAMETERS (?)
// ============================================================================
// The '?' symbol automatically marks a property or parameter as optional,
// which implicitly adds '| undefined' to its type definition.

interface UserProfile {
    username: string;
    bio?: string; // This means: string | undefined
}

const userA: UserProfile = { username: "Alice", bio: "Software Engineer" }; // Valid
const userB: UserProfile = { username: "Bob" }; // Valid, bio defaults to undefined


// ============================================================================
// 5. HANDLING MECHANISM C: OPTIONAL CHAINING (?.)
// ============================================================================
// Safely accesses deeply nested properties even if the parent object is null or undefined.
// Instead of crashing the application, it safely stops and returns 'undefined'.

interface AdvancedUser {
    name: string;
    contact?: {
        email: string;
    };
}

let activeUser: AdvancedUser | null = { name: "Charlie" };

// Without ?.: activeUser.contact.email -> ❌ Crashes runtime with TypeError
// With ?.: Stops execution gracefully when it hits 'null'
console.log(activeUser?.contact?.email); // Output: undefined


// ============================================================================
// 6. HANDLING MECHANISM D: NULLISH COALESCING OPERATOR (??)
// ============================================================================
// Provides a fallback value if and only if the expression evaluates to null or undefined.
// Note: It does NOT trigger for other falsy values like empty string "" or 0.

let serverPort: number | null = null;
let finalizedPort = serverPort ?? 3000; // Falls back to 3000 because serverPort is null
console.log(finalizedPort); // Output: 3000

let customTag: string | undefined = "";
let resolvedTag = customTag ?? "DefaultTag"; // Does NOT fall back because "" is not null/undefined
console.log(resolvedTag); // Output: ""


// ============================================================================
// 7. HANDLING MECHANISM E: NON-NULL ASSERTION OPERATOR (!)
// ============================================================================
// Use this only when you are 100% certain a value is not null or undefined,
// even though TypeScript thinks it might be. It tells the compiler to shut up.
// Warning: Use with caution! If the value is actually null, your code will crash.

function getLength(text: string | null): number {
    // return text.length; // ❌ Compile Error: Object is possibly 'null'.
    return text!.length;   // Valid in compiler. (Tells TS: "Trust me, text is not null")
}


// ============================================================================
// SUMMARY CHEAT SHEET FOR RESETTING LOGIC:
// ============================================================================
//  - Allow null/undefined?     -> Use Union Type (`type | null`)
//  - Avoid runtime crashes?    -> Use Optional Chaining (`object?.property`)
//  - Provide default values?   -> Use Nullish Coalescing (`value ?? fallback`)
//  - Force bypass compiler?    -> Use Non-null assertion (`value!`)
// ============================================================================