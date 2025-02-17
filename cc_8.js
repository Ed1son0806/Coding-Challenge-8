//Task 1 - Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

console.log(calculateSalary(5000, 500, 0.1));
console.log(calculateSalary(7000, 1000, 0.15));


//Task 2 - Function Expression
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
};

console.log(calculateDiscount(100, 0.2));
console.log(calculateDiscount(250, 0.15));


//Task 3 - Arrow Function
const calculateServiceFee = (amount, serviceType) => {
    let feeRate = serviceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.10 : 0.05;
    let serviceFee = amount * feeRate;
    return `Service Fee: $${serviceFee.toFixed(2)}`;
};

console.log(calculateServiceFee(200, "Premium"));
console.log(calculateServiceFee(500, "Standard"));


//Task 4 - Parameters and Arguments
function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate;

    if (carType === "Economy") {
        dailyRate = 40;
    } else if (carType === "Standard") {
        dailyRate = 60;
    } else if (carType === "Luxury") {
        dailyRate = 100;
    } else {
        return "Invalid car type";
    }

    let totalCost = days * dailyRate;
    
    if (insurance) {
        totalCost += days * 20;
    }

    return `Total Rental Cost: $${totalCost}`;
}

console.log(calculateRentalCost(3, "Economy", true));
console.log(calculateRentalCost(5, "Luxury", false));


//Task 5 - Returning Values
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}

console.log(calculateLoanPayment(1000, 0.05, 2));
console.log(calculateLoanPayment(5000, 0.07, 3));


//Task 6 - Higher-Order Functions
let transactions = [200, 1500, 3200, 800, 2500];

function filterLargeTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

console.log(filterLargeTransactions(transactions, amount => amount > 1000));


//Task 7 - Closures
function createCartTracker() {
    let total = 0;

    return function(itemPrice) {
        total += itemPrice;
        return `Total Cart Value: $${total}`;
    };
}

let cart = createCartTracker();
console.log(cart(20));
console.log(cart(35));


//Task 8 - Recursion in JavaScript
function calculateSavings(years, amount) {
    if (years >= 10) {
        return `Projected Savings: $${amount.toFixed(2)}`;
    }
    return calculateSavings(years + 1, amount * 1.05);
}

console.log(calculateSavings(8, 1000));
console.log(calculateSavings(5, 5000));
