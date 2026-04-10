// 1. Optional Parameter Example
// Syntax: (variable?: type)
// If you don't provide a value, it becomes 'undefined'
function getProfile(name: string, age?: number) {
    if (age !== undefined) {
        return `User: ${name}, Age: ${age}`;
    } else {
        return `User: ${name}, Age: Not Provided`;
    }
}

// 2. Default Parameter Example
// Syntax: (variable: type = defaultValue)
// If you don't provide a value, it uses the "defaultValue"
function getSettings(theme: string = "Light Mode") {
    return `Current Theme: ${theme}`;
}

// --- Testing the concepts ---

// Testing Optional:
console.log(getProfile("Karim"));       // Output: User: Karim, Age: Not Provided
console.log(getProfile("Karim", 25));   // Output: User: Karim, Age: 25

// Testing Default:
console.log(getSettings());             // Output: Current Theme: Light Mode
console.log(getSettings("Dark Mode"));  // Output: Current Theme: Dark Mode