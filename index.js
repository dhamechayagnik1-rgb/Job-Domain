import express from 'express';
import ProductsController from './src/controllers/controler.js';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';


const app = express();

const productsController =
    new ProductsController();

app.use(ejsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/');

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});