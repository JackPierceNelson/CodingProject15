// Task 4: Create the Main Application

// Import calculatePortfolioValue, getPortfolioAllocation, and Transaction class
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';
import { assets } from './asset.js';

console.log("Financial Portfolio Management System");
console.log("=========================================");

/*

fetch('http://localhost:3000/api/portfolio')
.then(response => response.json())
.then(data => {
    console.log('Portfolio Data', data);
    updatePortfolioDisplay();
}).catch (error => console.error('Error:', error));

function updatePortfolioDisplay(portfolioData) {
    
*/


// Display initial portfolio details - the total portfolio value
console.log("\nInitial Portfolio Details:");
console.log(`Total Portfolio Value: $${calculatePortfolioValue().toFixed(2)}`);

console.log("\nPortfolio Allocation:");
getPortfolioAllocation().forEach(asset => {
    console.log(`${asset.name} (${asset.type}): ${asset.allocation}%`);
});

// Perform some transactions
console.log("\nPerfroming Transactions:");
// Create transaction instances for buying and selling different assets
try {
    const transactions = [
        new Transaction(1, 'buy', 50),
        new Transaction(2, 'sell', 25),
        new Transaction(3, 'buy', 100),
        new Transaction(4, 'sell', 10)
    ];

    transactions.forEach((transaction, index) => {
        console.log(`Transaction ${index + 1}: ${transaction.type.toUpperCase()} ${transaction.quantity} units of ${transaction.asset.name}`);
    });
} catch (error) {
    console.error("Transaction Error:", error.message);
}

// Display updated portfolio details
console.log("\nUpdated Portfolio Details:");
console.log(`Total Portfolio Value: $${calculatePortfolioValue().toFixed(2)}`);

console.log("\nUpdated Portfolio Allocation:");
getPortfolioAllocation().forEach(asset => {
    console.log(`${asset.name} (${asset.type}): ${asset.allocation}%`);
});

// Display current asset quantities
console.log("\nCurrent Asset Quantities:");
assets.forEach(asset => {
   console.log(`${asset.name}: ${asset.quantity} units`);
});


 