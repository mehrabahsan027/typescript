// =============================================
// UNION TYPES vs INTERSECTION TYPES in TypeScript
// =============================================
// Example function using Union Type
function printUserId(id) {
    // TypeScript knows id can be string, number, or null
    if (id === null) {
        console.log("No user ID provided");
    }
    else if (typeof id === "string") {
        console.log("User ID (String): ".concat(id));
    }
    else {
        console.log("User ID (Number): ".concat(id));
    }
}
// Calling the function with different types
printUserId("USER-4567"); // ✅ String
printUserId(4567); // ✅ Number  
printUserId(null); // ✅ null
// Now this object MUST contain ALL properties from both types
var employee1 = {
    name: "Rahim Ahmed",
    age: 28,
    email: "rahim@example.com",
    employeeId: "EMP-2025-001",
    department: "Engineering",
    salary: 75000
};
console.log("Employee Details:", employee1);
var admin = {
    name: "Mehrab Ahsan",
    age: 25,
    email: "mehrab@example.com",
    canDeleteUser: true,
    canManageSettings: true,
    role: "admin"
};
console.log("Admin User:", admin.name, "can delete users:", admin.canDeleteUser);
