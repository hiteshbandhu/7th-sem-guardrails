'use client'

import Link from 'next/link'

const Features = () => {
  return (
    <section className="py-24 bg-[var(--primary-900)] relative overflow-hidden">

      {/* Decorative Elements */}
      <svg className="absolute -top-40 -right-40 w-96 h-96" viewBox="0 0 200 200">
        <path 
          d="M 100 0 A 100 100 0 0 1 100 200 A 100 100 0 0 1 100 0" 
          fill="var(--background-600)"
          opacity="0.5"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-[var(--primary-500)] mb-6">
            Key Features to Keep Your AI Safe
          </h2>
          <p className="text-xl text-[var(--primary-400)] leading-relaxed">
            Comprehensive protection for your AI applications, from input to output
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: 'Input Protection',
              description: 'Stop malicious prompts before they reach your system.',
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              )
            },
            {
              title: 'Output Filtering',
              description: 'Ensure your AI generates safe, compliant, and trustworthy results.',
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              )
            },
            {
              title: 'Customizable APIs',
              description: 'Tailored to your app\'s specific needs and workflows.',
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              )
            },
            {
              title: 'Real-Time Monitoring',
              description: 'Stay informed with detailed dashboards for all queries.',
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              )
            },
            {
              title: 'Cost Efficiency',
              description: 'Save on processing costs by eliminating exploitative or spammy queries.',
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
                title: 'Audit Logs',
                description: 'Track and analyze every request with detailed audit trails and compliance reporting.',
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-[var(--background-900)]/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 border border-[var(--primary-300)]"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[var(--primary-400)] to-[var(--primary-500)] flex items-center justify-center text-[var(--background-900)] group-hover:rotate-6 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-500)] mb-4">{feature.title}</h3>
              <p className="text-[var(--primary-400)]">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/features"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-600)] text-[var(--background-900)] rounded-2xl font-semibold hover:translate-y-[-2px] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            See All Features
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom SVG Wave */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
        <path d="M0 200L1440 100V200H0Z" fill="var(--background-600)" fillOpacity="0.3"/>
      </svg>
    </section>
  )
}

export default Features
