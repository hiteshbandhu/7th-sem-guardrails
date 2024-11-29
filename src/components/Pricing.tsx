'use client'

import { useState } from 'react'
import Link from 'next/link'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for startups and small teams',
      price: isAnnual ? '₹2,999' : '₹299',
      period: isAnnual ? '/year' : '/month',
      savings: 'Save 15%',
      features: [
        'Up to 1,000 API calls/month',
        'Basic input protection',
        'Standard output filtering',
        'Email support',
        'Basic analytics',
        'Community access',
        'Documentation',
      ],
      cta: 'Start Free Trial',
      theme: 'bg-white'
    },
    {
      name: 'Pro',
      description: 'For growing teams with advanced needs',
      price: isAnnual ? '₹11,999' : '₹1,199',
      period: isAnnual ? '/year' : '/month', 
      savings: 'Save 20%',
      features: [
        'Up to 10,000 API calls/month',
        'Advanced input protection',
        'Custom output filters',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Team management'
      ],
      cta: 'Get Started',
      theme: 'bg-white',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Full-scale protection for large organizations',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited API calls',
        'Enterprise-grade security',
        'Custom deployment options',
        'Dedicated support team',
        'Advanced compliance tools',
        'SLA guarantees',
        'Custom feature development'
      ],
      cta: 'Contact Sales',
      theme: 'bg-white'
    }
  ]

  return (
    <section className="py-24 bg-[#fafafa] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-50 opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-50 opacity-50 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Simple Plans, Maximum Protection
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your AI safety needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-gray-800' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-gray-200 p-1 transition-colors duration-300"
            >
              <div className={`w-6 h-6 rounded-full bg-blue-600 transition-transform duration-300 ${isAnnual ? 'translate-x-8' : ''}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-800' : 'text-gray-500'}`}>
              Yearly
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${plan.theme} shadow-lg hover:shadow-xl backdrop-blur-sm border border-gray-100 hover:scale-105 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                {plan.savings && (
                  <span className="text-sm text-blue-600">{plan.savings}</span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className="block w-full py-3 px-6 text-center rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            Compare all features
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Pricing
