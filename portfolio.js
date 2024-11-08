// Task 2: Create the Portfolio Module

// Import the assets array from asset.js
import { assets } from './asset.js';

// Function to calculate the total value of the portfolio, uses the reduce() method
// to sum up the total value of all assets in the portfolio

export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => {
        // For each asset, it multiplies the price by the quantity and adds it to the total
        return total + (asset.price * asset.quantity);
    }, 0);
}

// Function to calculate the percentage allocation of each asset in the portfolio
export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    // Use the map() method to create a new array with allocation information for each asset
    return assets.map(asset => {
        const assetValue = asset.price * asset.quantity;
        // For each asset, it calculates its value and its percentage allocation in the portfolio
        const allocation = (assetValue/totalValue) * 100;
        // The function returns an array of objects, each containing the asset's id, name, type, and its allocation percentage
        return {
            id: asset.id,
            name: asset.name,
            type: asset.type,
            allocation: parseFloat(allocation.toFixed(2)) // Round to 2 decimal places
        };
    });
}