import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants/resumeData";
import ApplicantCard from "~/components/ApplicantCard";
import { usePuterStore } from "~/core/puter";
import { useNavigate } from "react-router";
import { useEffect } from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "SkillLens" },
    {
      name: "description",
      content:
        "SkillLens is your intelligent AI-powered resume analyzer that helps you understand your skills, optimize your CV, and enhance your career opportunities effortlessly.",
    },
  ];
}

export default function Home() {

    const { auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
      if (!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated,]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading  py-16">
          <h1>Monitor Your Resume & Application Performance</h1>
          <h2>Let AI guide you to better resumes and career opportunities</h2>
        </div>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ApplicantCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
