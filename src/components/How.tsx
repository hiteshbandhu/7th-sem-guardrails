'use client'

import Link from 'next/link'

const How = () => {
  return (
    <section className="py-24 bg-[var(--primary-200)] relative overflow-hidden">
      {/* SVG Curves */}
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
        <path d="M0 0L1440 100V0H0Z" fill="var(--primary-800)" fillOpacity="0.3"/>
        <path d="M0 50L1440 150V50H0Z" fill="var(--primary-200)" fillOpacity="0.2"/>
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-[var(--background-500)] mb-6">
            Custom Guardrails, Tailored to Your Workflow
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              step: '01',
              title: 'Sign Up and Create an Account',
              description: 'Get started quickly with our intuitive platform.',
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )
            },
            {
              step: '02',
              title: 'Input Data or Behavior',
              description: 'Upload user data prompts or describe behavior in natural language.',
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              )
            },
            {
              step: '03',
              title: 'Generate Guardrails',
              description: 'Our AI analyzes your input and generates an API endpoint with secure filters.',
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              step: '04',
              title: 'Integrate and Protect',
              description: 'Use your custom endpoint to filter queries in real time.',
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            }
          ].map((item, index) => (
            <div key={index} className="border border-white/10 bg-[var(--primary-100)]/30 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[var(--neutral-600)] to-[var(--neutral-900)] flex items-center justify-center text-[var(--primary-200)]">
                {item.icon}
              </div>
              <div className="text-sm font-medium text-[var(--background-400)] mb-2">Step {item.step}</div>
              <h3 className="text-xl font-bold text-[var(--background-500)] mb-4">{item.title}</h3>
              <p className="text-[var(--background-700)]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--background-900)] to-[var(--background-900)] text-[var(--primary-200)] rounded-xl font-semibold hover:from-[var(--background-900)] hover:to-[var(--background-900)] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[var(--background-500)]/50"
          >
            Create Your Guardrails Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom SVG Curve */}
      <svg className="absolute bottom-0 left-0 w-full rotate-180" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
        <path d="M0 0L1440 100V0H0Z" fill="var(--primary-300)" fillOpacity="0.3"/>
        <path d="M0 50L1440 150V50H0Z" fill="var(--primary-100)" fillOpacity="0.2"/>
      </svg>
    </section>
  )
}

export default How
