'use client'

import { useState } from 'react'
import { login, signup } from './actions'
import { Toaster, toast } from 'sonner'
import { RiMailLine, RiLockPasswordLine, RiBuilding2Line } from 'react-icons/ri'

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    company: ''
  })
  const [validation, setValidation] = useState({
    email: true,
    password: true,
    company: true
  })

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string) => {
    return password.length >= 6
  }

  const validateCompany = (company: string) => {
    return company.length >= 2
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Validate in real time
    if (name === 'email') {
      setValidation(prev => ({...prev, email: validateEmail(value)}))
    } else if (name === 'password') {
      setValidation(prev => ({...prev, password: validatePassword(value)}))
    } else if (name === 'company') {
      setValidation(prev => ({...prev, company: validateCompany(value)}))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate all fields before submission
    const isEmailValid = validateEmail(formData.email)
    const isPasswordValid = validatePassword(formData.password)
    const isCompanyValid = !isSignup || validateCompany(formData.company)

    setValidation({
      email: isEmailValid,
      password: isPasswordValid,
      company: isCompanyValid
    })

    if (!isEmailValid || !isPasswordValid || !isCompanyValid) {
      toast.error('Please fix the validation errors')
      return
    }

    try {
      const formDataObj = new FormData()
      formDataObj.append('email', formData.email)
      formDataObj.append('password', formData.password)
      if (isSignup) {
        formDataObj.append('company', formData.company)
      }
      
      await (isSignup ? signup(formDataObj) : login(formDataObj))
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Authentication failed. Please try again.')
      }
    }
  }

  const getInputClassName = (isValid: boolean, value: string) => `
    w-full pl-12 pr-4 py-3 
    bg-[var(--background-700)]/50 
    border ${value && (isValid 
      ? 'border-green-500/50' 
      : 'border-red-500/50'
    )} 
    rounded-xl focus:outline-none 
    focus:ring-2 
    focus:ring-[var(--primary-400)]/50 
    focus:border-[var(--primary-400)] 
    text-[var(--primary-200)] 
    placeholder-[var(--primary-400)] 
    transition-all
  `

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background-900)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-500)]/10 via-transparent to-[var(--primary-400)]/5" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[var(--primary-400)]/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[var(--primary-300)]/10 blur-3xl" />

      {/* Beta Notice */}
      <div className="mb-8 px-6 py-3 bg-[var(--primary-200)]/10 border border-[var(--primary-300)]/20 rounded-2xl text-sm text-[var(--primary-300)] backdrop-blur-sm shadow-lg relative z-10">
        🚧 Beta Notice: Currently in testing phase. Sign up with email and password only.
      </div>

      <Toaster position="top-center" />
      
      <div className="w-full max-w-md p-8 bg-[var(--background-800)]/80 backdrop-blur-lg rounded-2xl shadow-xl border border-[var(--primary-300)]/20 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[var(--primary-200)]">
            {isSignup ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="mt-3 text-[var(--primary-300)]">
            {isSignup ? 'Sign up to get started' : 'Sign in to your account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <RiMailLine className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                formData.email ? (validation.email ? 'text-green-500' : 'text-red-500') : 'text-[var(--primary-400)]'
              }`} />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={getInputClassName(validation.email, formData.email)}
                placeholder="Email address"
              />
              {formData.email && !validation.email && (
                <p className="mt-1 text-xs text-red-500">Please enter a valid email address</p>
              )}
            </div>

            <div className="relative group">
              <RiLockPasswordLine className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                formData.password ? (validation.password ? 'text-green-500' : 'text-red-500') : 'text-[var(--primary-400)]'
              }`} />
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className={getInputClassName(validation.password, formData.password)}
                placeholder="Password"
              />
              {formData.password && !validation.password && (
                <p className="mt-1 text-xs text-red-500">Password must be at least 6 characters</p>
              )}
            </div>

            {isSignup && (
              <div className="relative group">
                <RiBuilding2Line className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                  formData.company ? (validation.company ? 'text-green-500' : 'text-red-500') : 'text-[var(--primary-400)]'
                }`} />
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className={getInputClassName(validation.company, formData.company)}
                  placeholder="Company name"
                />
                {formData.company && !validation.company && (
                  <p className="mt-1 text-xs text-red-500">Company name must be at least 2 characters</p>
                )}
              </div>
            )}
          </div>

          <div className="space-y-4 pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[var(--primary-400)] to-[var(--primary-500)] hover:from-[var(--primary-500)] hover:to-[var(--primary-600)] text-[var(--background-900)] rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-[var(--primary-500)]/50 transform hover:translate-y-[-2px]"
            >
              {isSignup ? 'Sign up' : 'Sign in'}
            </button>

            <p className="text-center text-sm text-[var(--primary-300)]">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsSignup(!isSignup)}
                className="text-[var(--primary-200)] hover:text-[var(--primary-100)] font-medium transition-colors"
              >
                {isSignup ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}