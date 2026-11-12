// router/apiRoutes.js
import express from 'express';
import { getPaginatedData, getItemById } from '../controllers/apiController.js';

const apiRoutes = express.Router();

// Route for getting all items with pagination (e.g., /api/posts, /api/products)
apiRoutes.get('/:category', getPaginatedData);

// Route for getting a single item by ID (e.g., /api/posts/1, /api/products/2)
apiRoutes.get('/:category/:id', getItemById);

export default apiRoutes;