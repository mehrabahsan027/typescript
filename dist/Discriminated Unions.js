/**
 * SCENARIO: Handling a User Profile Fetch
 * The "status" property is our Discriminant.
 */
function renderUI(result) {
    switch (result.status) {
        case "loading":
            console.log("Showing a spinner...");
            break;
        case "success":
            // TypeScript automatically knows "data" exists here.
            // You don't need to check "if (result.data)"
            console.log("User found: ".concat(result.data.name));
            break;
        case "error":
            // TypeScript knows "message" exists here, but "data" does not.
            console.log("Error occurred: ".concat(result.message));
            break;
    }
}
