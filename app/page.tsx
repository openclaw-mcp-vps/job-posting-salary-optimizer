export default function Home() {
  const faqs = [
    {
      q: "How does the AI determine salary ranges?",
      a: "Our AI analyzes your job description, required skills, location, and seniority level against real-time market data to suggest competitive salary ranges that attract top candidates."
    },
    {
      q: "What job types and locations are supported?",
      a: "We support all major job categories across the US, Canada, UK, EU, and Australia. Simply paste your job description and select your location for instant results."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes, you can cancel anytime with no questions asked. Your access continues until the end of your billing period."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered HR Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Post Jobs With{" "}
          <span className="text-[#58a6ff]">Salary Ranges</span>{" "}
          That Actually Attract Talent
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste your job description and get AI-optimized salary ranges based on market data, location, and required skills — in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Optimizing Salaries
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">No credit card required to try. $12/mo after trial.</p>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { step: "1", title: "Paste Job Description", desc: "Drop in your full job posting or a rough draft." },
            { step: "2", title: "AI Analyzes Market Data", desc: "We cross-reference skills, location, and live compensation benchmarks." },
            { step: "3", title: "Get Optimized Range", desc: "Receive a salary range proven to maximize qualified applicants." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl font-bold mb-2">{item.step}</div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-[#8b949e] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited salary analyses",
              "50+ job categories supported",
              "US, UK, EU & AU market data",
              "Skills-based compensation insights",
              "Export reports as PDF",
              "Priority email support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started — $12/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} SalaryOptimizer AI. All rights reserved.
      </footer>
    </main>
  );
}
