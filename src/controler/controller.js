import jobs, { getById, getId } from "../models/jobModel.js";
export default class UserController {
  getLandingPage(req, res) {
    res.render('landing-page');
  }
  getLoginPage(req, res) {
    res.render('user-login');
  }
  getListAllJobs(req, res) {
    res.render('list-all-jobs', {
      jobs
    });
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
      res.status(401).send('Product not found');
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
}


