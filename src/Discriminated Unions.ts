/**
 * SCENARIO: Handling a User Profile Fetch
 * The "status" property is our Discriminant.
 */

interface LoadingState {
    status: "loading"; 
  }
  
  interface SuccessState {
    status: "success";
    data: { id: number; name: string; email: string }; // Data only exists on success
  }
  
  interface ErrorState {
    status: "error";
    message: string; // Message only exists on error
  }
  
  // Create the Union
  type FetchResult = LoadingState | SuccessState | ErrorState;
  
  function renderUI(result: FetchResult) {
    switch (result.status) {
      case "loading":
        console.log("Showing a spinner...");
        break;
  
      case "success":
        // TypeScript automatically knows "data" exists here.
        // You don't need to check "if (result.data)"
        console.log(`User found: ${result.data.name}`);
        break;
  
      case "error":
        // TypeScript knows "message" exists here, but "data" does not.
        console.log(`Error occurred: ${result.message}`);
        break;
    }
  }


  

  /**
 * SCENARIO: Processing Payments
 * The "method" property acts as our Discriminant.
 */

interface CreditCard {
    method: "card";
    cardNumber: string;
    expiry: string;
  }
  
  interface PayPal {
    method: "paypal";
    email: string;
  }
  
  interface Crypto {
    method: "crypto";
    walletAddress: string;
  }
  
  type PaymentOption = CreditCard | PayPal | Crypto;
  
  function processPayment(payment: PaymentOption) {
    // The 'method' tag allows us to safely access specific properties
    switch (payment.method) {
      case "card":
        console.log(`Charging card ending in ${payment.cardNumber.slice(-4)}`);
        break;
        
      case "paypal":
        console.log(`Redirecting to PayPal for user: ${payment.email}`);
        break;
        
      case "crypto":
        console.log(`Sending invoice to wallet: ${payment.walletAddress}`);
        break;
  
      default:
        /**
         * EXHAUSTIVE CHECK:
         * This is a pro tip. If you add a new payment method (e.g., ApplePay) 
         * to the Union but forget to add a case here, TypeScript will 
         * throw an error on the line below!
         */
        const _exhaustiveCheck: never = payment;
        return _exhaustiveCheck;
    }
  }