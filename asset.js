// Task 1: Create the Asset Module

// Define the array of assets
const assets = [
    { id: 1, name: "Apple Inc.", type: "stock", price: 150.25, quantity: 100 },
    { id: 2, name: "Microsoft Corporation.", type: "stock", price: 305.50, quantity: 75 },
    { id: 3, name: "US Treasury Bond 10Y.", type: "bond", price: 98.75, quantity: 50 },
    { id: 4, name: "Amazon.com Inc.", type: "stock", price: 3300.00, quantity: 25 },
    { id: 5, name: "Corporate Bond XYZ.", type: "bond", price: 102.50, quantity: 200 }
];

// Export the assets array making it available for use in other modules
export {assets};

// Export the getAssetById function, uses the find() method to search the assets array for
// an asset with a matching ID else undefined
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}

