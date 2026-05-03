import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SalaryOptimizer AI — Smart Salary Ranges for Job Postings",
  description: "AI-powered salary range optimizer for job postings. Maximize applications by offering competitive, data-driven compensation."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0f28ee63-6260-469a-8c5f-56371bb3836c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
