// =============================================
// UNION TYPES vs INTERSECTION TYPES in TypeScript
// =============================================

// ==================== UNION TYPE ( | ) ====================
// Union means "OR" - The value can be ANY ONE of the mentioned types

type UserId = string | number | null;   // Can be string, number, or null

// Example function using Union Type
function printUserId(id: UserId): void {
    // TypeScript knows id can be string, number, or null
    if (id === null) {
        console.log("No user ID provided");
    } else if (typeof id === "string") {
        console.log(`User ID (String): ${id}`);
    } else {
        console.log(`User ID (Number): ${id}`);
    }
}

// Calling the function with different types
printUserId("USER-4567");   // ✅ String
printUserId(4567);          // ✅ Number  
printUserId(null);          // ✅ null


// ==================== INTERSECTION TYPE ( & ) ====================
// Intersection means "AND" - The type must have ALL properties from both types

type Person = {
    name: string;
    age: number;
    email: string;
};

type Employee = {
    employeeId: string;
    department: string;
    salary: number;
};

// Intersection Type: Must have properties from BOTH Person AND Employee
type EmployeePerson = Person & Employee;

// Now this object MUST contain ALL properties from both types
const employee1: EmployeePerson = {
    name: "Rahim Ahmed",
    age: 28,
    email: "rahim@example.com",
    employeeId: "EMP-2025-001",
    department: "Engineering",
    salary: 75000
};

console.log("Employee Details:", employee1);


// ==================== REAL-WORLD COMBINED EXAMPLE ====================

// Union Type for flexible input
type Status = "active" | "inactive" | "pending";

// Intersection Type for combining roles
type AdminRights = {
    canDeleteUser: boolean;
    canManageSettings: boolean;
};

type AdminUser = Person & AdminRights & { role: "admin" };   // Intersection

const admin: AdminUser = {
    name: "Mehrab Ahsan",
    age: 25,
    email: "mehrab@example.com",
    canDeleteUser: true,
    canManageSettings: true,
    role: "admin"
};

console.log("Admin User:", admin.name, "can delete users:", admin.canDeleteUser);