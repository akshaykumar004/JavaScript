// ------------------------- Day-5, 28 Nov 2023 -------------------------------------

// ---------------------------  Stack Memory ------------------

// Stack Memory = Primitive ( Call by value.)
// Heap Memory = Non-Primitive (Call by reference)


// Stack Memory 
let emailOne = "user@google.com";

let emailTwo = emailOne;

emailTwo = "akshay@google.com"

console.log(emailOne) // here emailOne value moving to emailTwo (not entire reference). that's why value is different for both.
console.log(emailTwo)


// Heap Memory

let userOne = {
    upi : "akshay@paytm" ,
    upi2 : "googlepay@sbi"
}
let userTwo = userOne;
userTwo.upi = "phonepay@ybl"

console.log(userOne.upi)  // here userOne upi entirely moving(reference) to userTwo. that's why value is same for both.
console.log(userTwo.upi)