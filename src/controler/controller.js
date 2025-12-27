import jobs, { getById, getId, updateUsers } from "../models/jobModel.js";
import UserModel from '../models/usermodel.js';
export default class UserController {

  getHomePage(req, res) {
    res.render('landing-page');
  }
  getLoginPage(req, res) {
    res.render('user-login');
  }

  getNewJobPage(req, res) {
    res.render('new-job');
  }
  getListAllJobs(req, res) {
    res.render('list-all-jobs', {
      jobs
    });
  }




  postRegister(req, res) {
    const { name, email, password } = req.body;
    UserModel.add(name, email, password);
    res.render('login', { errorMessage: null });
  }



  postLogin(req, res) {
    const { email, password } = req.body;
    const user = UserModel.isValidUser(
      email,
      password
    );
    if (!user) {
      return res.render('login', {
        errorMessage: 'Invalid Credentials',
      });
    }
    var products = ProductModel.getAll();
    res.render('index', { products });
  }
  getSingleJob(req, res, next) {
    // 1. if product exists then return view
    const id = req.params.id;
    const productFound = getById(id);
    if (productFound) {
      res.render('job-details', {
        data: productFound,
        errorMessage: null,
      });
    }
    // 2. else return errors.
    else {
      res.status(401).send('Product single not found');
    }
  }
  getupdateJob(req, res, next) {
    // 1. if product exists then return view
    const id = req.params.id;
    const productFound = getById(id);
    if (productFound) {
      res.render('update-job', {
        job: productFound,
        errorMessage: null,
      });
    }
    // 2. else return errors.
    else {
      res.status(401).send('Product not found');
    }
  }

  postUpdateProduct(req, res) {

    const isUpdated = updateUsers(req.body);
    console.log(isUpdated);

    if (isUpdated) {
      res.status(201).render("list-all-jobs", { job: req.body, error: null });
    } else {
      res
        .status(400)
        .render("update-job", { job: {}, error: "user not found!" });
    }
  }
  getallapplicants(req, res, next) {
    // 1. if product exists then return view
    const id = req.params.id;
    const productFound = getId(id);
    if (productFound) {
      res.render('all-applicants', {
        allApplicants: productFound,
        errorMessage: null,
      });
    }
    // 2. else return errors.
    else {
      res.status(401).send('Product not found');
    }
  }

  postAddJob(req, res, next) {


    const {
      id,
      job_designation,
      company_name,
      job_location,
      experience,
      salary,
      employees,
      job_posted,
      featured = true,
      skills_required,
      job_type,
      experience_level,
      job_category,
      applicants
    } = req.body;

    const newJob = {
      id: jobs.length + 1,
      job_designation,
      company_name,
      job_location,
      experience,
      salary,
      employees,
      job_posted,
      featured: featured === true || featured === 'true',
      skills_required,
      job_type,
      experience_level,
      job_category,
      applicants: 0
    };

    jobs.push(newJob);

    res.render('list-all-jobs', { jobs });




  }


}


