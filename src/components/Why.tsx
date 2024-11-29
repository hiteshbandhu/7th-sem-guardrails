'use client'

import { RiShieldCheckLine, RiFilterLine, RiMoneyDollarCircleLine } from 'react-icons/ri'

const Why = () => {
  return (
    <section className="py-24 bg-[var(--background-600)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-[var(--primary-300)] mb-6">
            Why Your LLM Application Needs Guardrails
          </h2>
          <p className="text-xl text-[var(--primary-400)] leading-relaxed">
            Deploying LLMs to user-facing applications is risky without proper safeguards
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Challenges */}
          <div className="space-y-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[var(--primary-300)] mb-4">
                On the Input Side
              </h3>
              <p className="text-[var(--primary-400)]">
                Users can exploit prompts to access sensitive data, costing you both reputation and revenue.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[var(--primary-300)] mb-4">
                On the Output Side
              </h3>
              <p className="text-[var(--primary-400)]">
                LLMs might generate harmful, non-compliant, or copyrighted content that puts users at risk.
              </p>
            </div>
          </div>

          {/* Right Side - Stats & Features */}
          <div className="bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="mb-8 text-center">
              <div className="text-6xl font-bold text-[var(--primary-500)] mb-2">87%</div>
              <p className="text-lg text-[var(--primary-400)]">
                Success Rate in preventing malicious attacks, saving enterprises millions of dollars in query costs
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[var(--primary-200)] rounded-xl flex items-center justify-center mb-3">
                  <RiShieldCheckLine className="w-8 h-8 text-[var(--background-500)]" />
                </div>
                <p className="text-sm font-medium text-[var(--primary-400)]">Input Protection</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[var(--primary-200)] rounded-xl flex items-center justify-center mb-3">
                  <RiFilterLine className="w-8 h-8 text-[var(--background-500)]" />
                </div>
                <p className="text-sm font-medium text-[var(--primary-400)]">Output Filtering</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[var(--primary-200)] rounded-xl flex items-center justify-center mb-3">
                  <RiMoneyDollarCircleLine className="w-8 h-8 text-[var(--background-500)]" />
                </div>
                <p className="text-sm font-medium text-[var(--primary-400)]">Cost Savings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why
