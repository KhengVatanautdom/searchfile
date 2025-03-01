const express = require('express');
const router = express.Router();
const { searchProducts } = require('./searchService');



// Route to search products
router.get('/search', async (req, res) => {
    try {
        const { keyword } = req.query;
        if (!keyword) return res.status(400).json({ error: "Keyword is required" });

        const results = await searchProducts(keyword);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
