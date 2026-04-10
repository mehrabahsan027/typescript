// 1. Optional Parameter Example
// Syntax: (variable?: type)
// If you don't provide a value, it becomes 'undefined'
function getProfile(name, age) {
    if (age !== undefined) {
        return "User: ".concat(name, ", Age: ").concat(age);
    }
    else {
        return "User: ".concat(name, ", Age: Not Provided");
    }
}
// 2. Default Parameter Example
// Syntax: (variable: type = defaultValue)
// If you don't provide a value, it uses the "defaultValue"
function getSettings(theme) {
    if (theme === void 0) { theme = "Light Mode"; }
    return "Current Theme: ".concat(theme);
}
// --- Testing the concepts ---
// Testing Optional:
console.log(getProfile("Karim")); // Output: User: Karim, Age: Not Provided
console.log(getProfile("Karim", 25)); // Output: User: Karim, Age: 25
// Testing Default:
console.log(getSettings()); // Output: Current Theme: Light Mode
console.log(getSettings("Dark Mode")); // Output: Current Theme: Dark Mode
