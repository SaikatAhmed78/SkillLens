import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "~/components/Navbar";
import { usePuterStore } from "~/core/puter";

const Upload = () => {


   const [isProcessing, setIsProcessing] = useState(false);
   const [statusText, setStatusText] = useState("");

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading">
          <h1>Your resume deserves a second pair of eyes</h1>

          {isProcessing ? (
            <>
              <h2>{statusText || "Analyzing your resume..."}</h2>
              <img src="/images/resume_scan.gif" alt="" className="w-full" />
            </>
          ) : (
            <h2>
              Upload your resume and let SkillLens evaluate it — scoring,
              structure, and style, all in one click.
            </h2>
          )}

          {!isProcessing && (
            <form id="upload-form" className="flex flex-col gap-4 mt-8">
              <div className="form-div">
                <label htmlFor="company-name">Company</label>
                <input
                  type="text"
                  name="company-name"
                  placeholder="Company Name"
                  id="company-name"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-title">Job Title</label>
                <input
                  type="text"
                  name="job-title"
                  placeholder="Job Title"
                  id="job-title"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-description">Job Description</label>
                <textarea
                  rows={5}
                  name="job-description"
                  placeholder="Job Description"
                  id="job-description"
                />
              </div>

              <div className="form-div">
                <label htmlFor="uploader">Upload Resume</label>
              </div>

              <button className="primary-button" type="submit">
                Start Analysis
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Upload;
