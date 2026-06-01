import { useState } from "react";
import axios from "axios";

function Register() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",

    dob: "",
    gender: "",
    currentAddress: "",
    permanentAddress: "",

    college: "",
    degree: "",
    branch: "",
    year: "",
    cgpa: "",

    skills: "",
    github: "",
    linkedin: "",
    portfolio: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mt-5 mb-5">

      <div className="card shadow-lg border-0 p-5">

        <h2 className="text-center mb-3">
          User Registration
        </h2>

        <div className="progress mb-4">
          <div
            className="progress-bar"
            style={{
              width: `${step * 20}%`
            }}
          >
            Step {step} of 5
          </div>
        </div>

        {step === 1 && (
          <>
            <h4 className="mb-4">Account Details</h4>

            <input
              className="form-control mb-3"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              placeholder="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </>
        )}

        {step === 2 && (
          <>
            <h4 className="mb-4">Personal Details</h4>

            <input
              type="date"
              className="form-control mb-3"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />

            <select
              className="form-control mb-3"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <textarea
              className="form-control mb-3"
              placeholder="Current Address"
              name="currentAddress"
              value={formData.currentAddress}
              onChange={handleChange}
            />

            <textarea
              className="form-control mb-3"
              placeholder="Permanent Address"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
            />
          </>
        )}

        {step === 3 && (
          <>
            <h4 className="mb-4">Education Details</h4>

            <input
              className="form-control mb-3"
              placeholder="College Name"
              name="college"
              value={formData.college}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              placeholder="Degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              placeholder="Branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              placeholder="Year"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              placeholder="CGPA"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
            />
          </>
        )}

        {step === 4 && (
          <>
            <h4 className="mb-4">Professional Details</h4>

            <input
              className="form-control mb-3"
              placeholder="Skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              placeholder="GitHub URL"
              name="github"
              value={formData.github}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              placeholder="LinkedIn URL"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              placeholder="Portfolio URL"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
            />

            <input
              type="file"
              className="form-control mb-3"
            />
          </>
        )}

   {step === 5 && (
  <>
    <h4 className="mb-4">Review & Submit</h4>

    <div className="alert alert-success">
      Please review your details before submission.
    </div>

    <div className="card shadow border-0 p-4 mb-4">

      <h5 className="mb-3">Account Information</h5>

      <div className="row g-3">

        <div className="col-md-6">
          <div className="card p-3">
            <strong>Full Name</strong>
            {formData.name || "Not Provided"}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <strong>Email</strong>
            {formData.email || "Not Provided"}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <strong>Mobile Number</strong>
            {formData.mobile || "Not Provided"}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <strong>Password</strong>
            ********
          </div>
        </div>

      </div>

      <hr />

      <h5 className="mb-3">Personal Information</h5>

      <div className="row g-3">

        <div className="col-md-6">
          <div className="card p-3">
            <strong>Date of Birth</strong>
            {formData.dob || "Not Provided"}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <strong>Gender</strong>
            {formData.gender || "Not Provided"}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <strong>Current Address</strong>
            {formData.currentAddress || "Not Provided"}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <strong>Permanent Address</strong>
            {formData.permanentAddress || "Not Provided"}
          </div>
        </div>

      </div>

      <hr />

      <h5 className="mb-3">Education Details</h5>

      <div className="row g-3">

        <div className="col-md-6">
          <div className="card p-3">
            <strong>College</strong>
            {formData.college || "Not Provided"}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <strong>Degree</strong>
            {formData.degree || "Not Provided"}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <strong>Branch</strong>
            {formData.branch || "Not Provided"}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <strong>Year</strong>
            {formData.year || "Not Provided"}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <strong>CGPA</strong>
            {formData.cgpa || "Not Provided"}
          </div>
        </div>

      </div>

      <hr />

      <h5 className="mb-3">Professional Details</h5>

      <div className="row g-3">

        <div className="col-md-6">
          <div className="card p-3">
            <strong>Skills</strong>
            {formData.skills || "Not Provided"}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <strong>GitHub</strong>
            {formData.github || "Not Provided"}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <strong>LinkedIn</strong>
            {formData.linkedin || "Not Provided"}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <strong>Portfolio</strong>
            {formData.portfolio || "Not Provided"}
          </div>
        </div>

      </div>

    </div>

    <button
      className="btn btn-primary w-100"
      onClick={async () => {
        try {
          const response = await axios.post(
            "http://localhost:5000/api/register",
            formData
          );

          alert(response.data.message);

        } catch (error) {
          console.log(error);
          alert("Registration Failed");
        }
      }}
    >
      Submit Registration
    </button>
  </>
)}

        <div className="d-flex justify-content-between mt-4">

          {step > 1 && (
            <button
              className="btn btn-secondary"
              onClick={() => setStep(step - 1)}
            >
              Previous
            </button>
          )}

          {step < 5 && (
            <button
              className="btn btn-success"
              onClick={() => setStep(step + 1)}
            >
              Next
            </button>
          )}

        </div>

      </div>

    </div>
  );
}

export default Register;