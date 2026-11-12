// index.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import viewRoutes from './router/viewRoutes.js';
import apiRoutes from './router/apiRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

// __dirname setup 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 
app.use(express.static(path.join(__dirname, 'public')));

// Routers
app.use('/', viewRoutes);
app.use('/api', apiRoutes);

// Local development ke liye server start ho, Vercel ke liye app export ho
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
}

export default app;