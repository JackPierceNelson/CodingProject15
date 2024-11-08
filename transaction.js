// Task 3: Create the Transaction Module

// Import assets and getAssetById from asset.js
import {assets, getAssetById} from './asset.js';

// Define and export the Transaction class
export class Transaction {
    constructor(assetId, type, quantity) {
        // It retrieves the asset usiung getAssetById and throws an error if the asset is not found

        this.asset = getAssetById(assetId);
        if(!this.asset) {
            throw new Error(`Asset ID ${assetId} not found!`);
        }
        // It validates the transaction type, ensuring it's either 'buy' or 'sell'
        this.type = type.toLowerCase();
        if (this.type !== 'buy' && this.type !== 'sell') {
            throw new Error('Transaction type must be either "buy" or "sell"');
        }

        // It checks that the quantity is a positive number
        this.quantity = quantity;
        if (this.quantity <= 0) {
            throw new Error('Quantity must be a positive number');
        }
        // It calls the execute method to perform the transaction
        this.execute();
    }
    // For a 'buy' transaction, it increases the asset's quantity
    // For a 'sell' transaction, checks if there is sufficient quantity available for sale

    execute() {
        if (this.type === 'buy') {
            this.asset.quantity += this.quantity;
        } else if (this.type === 'sell') {
            if (this.asset.quantity < this.quantity) {
                throw new ErrorP(`Insufficient quantity for sale of ${this.asset.name}`);
            }
            this.asset.quantity -= this.quantity;
        } 
    }
}

/*
try {
    new Transaction(1, 'buy', 10); // Buy units of asset with ID 1
    new Transaction(2, 'sell', 5); // Sell 5 units of assets with ID 2
} catch (error) {
    console.error(error.message);
}
    */
   