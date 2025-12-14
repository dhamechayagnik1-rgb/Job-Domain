import jobs from "../models/jobModel.js";
export default class UserController {
  getLandingPage(req, res) {
    res.render('landing-page');
  }
  getLoginPage(req, res) {
    res.render('user-login');
  }
  getListAllJobs(req, res) {
    res.render('list-all-jobs', {jobs});
  }
}

export const getSingleJob = (req, res) => {
  const jobId = parseInt(req.params.id);

  const job = jobs.find(j => j.id === jobId);

  if (!job) {
    return res.status(404).render("404", {
      message: "Job not found"
    });
  }

  res.render("job-details", {
    job
  });
};
