import express from 'express';
const viewRoutes = express.Router();

// Index route
viewRoutes.get('/', (req, res) => {
    res.render('index');
});

// Docs route
viewRoutes.get('/docs', (req, res) => {
    res.render('docs');
});

// About route
viewRoutes.get('/about', (req, res) => {
    res.render('about');
});

// viewRoutes.get('/users', getUsers);
export default viewRoutes;