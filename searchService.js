const Product = require('./models/productModel');

// Function to search products by keyword
async function searchProducts(keyword) {
    try {
        const regex = new RegExp(keyword, 'i'); // Case-insensitive search
        const products = await Product.find({ name: regex });
        
        if (products.length === 0) {
            return { message: "No products found" };
        }
        
        return products;
    } catch (error) {
        throw new Error("Error searching products: " + error.message);
    }
}

module.exports = { searchProducts };
