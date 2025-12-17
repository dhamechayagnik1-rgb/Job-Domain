import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import ProductController from './src/controler/controller.js';



const app = express();



  const usersController = new ProductController();

app.use(ejsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(path.resolve(), 'src', 'public')));
app.set(
  'views',
  path.join(path.resolve(), 'src', 'views')
);

app.get('/', usersController.getLandingPage);
app.get('/login', usersController.getLoginPage);
app.get('/jobs', usersController.getListAllJobs);
app.get("/job/:id", usersController.getSingleJob );  
app.get(
  '/job/update/:id',
  usersController.getupdateJob 
);
app.get(
  '/job/applicants/:id',
  usersController.getallapplicants 
);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
