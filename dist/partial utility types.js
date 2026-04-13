var updateMyProfile = function (id, changes) {
    // TypeScript is happy even if we only provide one or two fields
    console.log("Updating user ".concat(id, " with:"), changes);
};
// Example: We are only updating the age. Other fields are skipped safely.
updateMyProfile(101, { age: 26 });
var topUsers = [
    { username: "Sabbir", age: 22 },
    { username: "Nabila", age: 24 }
    // We cannot add 'email' or 'id' here; TypeScript will block it.
];
var registerUser = function (userData) {
    // This ensures we don't accidentally try to manually set an ID or Timestamp
    console.log("Registering new user:", userData.username);
};
registerUser({
    username: "Arif_Dev",
    email: "arif@example.com",
    age: 30,
    isAdmin: false
});
/**
 * QUICK SUMMARY FOR YOUR REFERENCE:
 * * - Partial: Makes everything optional (Good for Updates/Edits).
 * - Pick: Takes only the keys you list (Good for specific UI components).
 * - Omit: Removes the keys you list and keeps the rest (Good for filtering sensitive/auto-gen data).
 */ 
