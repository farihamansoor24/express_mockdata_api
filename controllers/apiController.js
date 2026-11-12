// controllers/apiController.js
import connectDB  from '../config/db.js';

// Generic function to get paginated items
export const getPaginatedData = async (req, res) => {
    try {
        const category = req.params.category; // e.g. posts, products, users, recipes
        const db = await connectDB();
        const collection = db.collection(category);

        // Query parameters for pagination (default: limit 10, skip 0)
        const limit = parseInt(req.query.limit) || 10;
        const skip = parseInt(req.query.skip) || 0;

        const total = await collection.countDocuments();
        const items = await collection.find({}).skip(skip).limit(limit).toArray();

        // Return DummyJSON style response format
        res.json({
            [category]: items,
            total,
            skip,
            limit
        });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// Get single item by numeric ID
export const getItemById = async (req, res) => {
    try {
        const { category, id } = req.params;
        const db = await connectDB();
        const collection = db.collection(category);

        // Numeric id se find karein (kyunki seed data mein id: 1, 2, 3 numeric hain)
        const item = await collection.findOne({ id: Number(id) });

        if (!item) {
            return res.status(404).json({ message: `Item with id '${id}' not found in ${category}` });
        }

        res.json(item);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};