import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";


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
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading">
          <h1>Monitor Your Resume & Application Performance</h1>
          <h2>Let AI guide you to better resumes and career opportunities</h2>
        </div>
      </section>

      
    </main>
  );
}
