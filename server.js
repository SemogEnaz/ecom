import express from 'express';
import user from './src/backend/user.js';

const app = express();
const port = 3003;

// Adding static assets 
// https://expressjs.com/en/starter/static-files.html
app.use('/shop', express.static('./dist'));
app.use('/shop', express.static('./dist/assets'));

// Routes
app.get('/shop/user', user);

// Start listining to port 3003
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}/shop`);
})