export const resumes: Resume[] = [
  {
    id: "1",
    companyName: "Netflix",
    jobTitle: "Frontend Engineer",
    imagePath: "/images/resume-1.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 81,
      ATS: {
        score: 85,
        tips: [],
      },
      toneAndStyle: {
        score: 83,
        tips: [],
      },
      content: {
        score: 79,
        tips: [],
      },
      structure: {
        score: 80,
        tips: [],
      },
      skills: {
        score: 86,
        tips: [],
      },
    },
  },
  {
    id: "2",
    companyName: "Spotify",
    jobTitle: "Backend Developer",
    imagePath: "/images/resume-2.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 60,
      ATS: {
        score: 68,
        tips: [],
      },
      toneAndStyle: {
        score: 63,
        tips: [],
      },
      content: {
        score: 61,
        tips: [],
      },
      structure: {
        score: 64,
        tips: [],
      },
      skills: {
        score: 70,
        tips: [],
      },
    },
  },
  {
    id: "3",
    companyName: "Tesla",
    jobTitle: "Full Stack Developer",
    imagePath: "/images/resume-3.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 87,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 88,
        tips: [],
      },
      content: {
        score: 85,
        tips: [],
      },
      structure: {
        score: 86,
        tips: [],
      },
      skills: {
        score: 92,
        tips: [],
      },
    },
  },
];

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({
  jobTitle,
  jobDescription,
  AIResponseFormat,
}: {
  jobTitle: string;
  jobDescription: string;
  AIResponseFormat: string;
}) =>
  `You are an expert in ATS (Applicant Tracking System) and resume analysis.
  Please analyze and rate this resume and suggest how to improve it.
  The rating can be low if the resume is bad.
  Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
  If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
  If available, use the job description for the job user is applying to to give more detailed feedback.
  If provided, take the job description into consideration.
  The job title is: ${jobTitle}
  The job description is: ${jobDescription}
  Provide the feedback using the following format: ${AIResponseFormat}
  Return the analysis as a JSON object, without any other text and without the backticks.
  Do not include any other text or comments.`;
