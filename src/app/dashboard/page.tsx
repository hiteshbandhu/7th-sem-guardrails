'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Toaster, toast } from 'sonner'
import { RiAddLine, RiSettings4Line, RiHomeLine, RiBarChartLine, RiPulseLine, RiArrowLeftLine } from 'react-icons/ri'
import UserQueryModal from '@/components/dashboard/userQuery'
import QueryDisplay from '@/components/dashboard/queryDisplay'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Link from 'next/link'

interface Prompt {
  id: string
  created_at: string
  prompt_type: string
  prompt_text: string
}

const Sidebar = ({ onNewPrompt, onViewChange }: { onNewPrompt: (type: string) => void, onViewChange: (view: string) => void }) => {
  const [showPromptOptions, setShowPromptOptions] = useState(false)
  
  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-gradient-to-b from-[var(--accent-green-500)/60] to-[var(--accent-blue-500)] shadow-2xl">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[var(--background-900)]">Guardrail</h2>
        <p className="text-sm text-[var(--background-800)] mt-1">AI Safety Platform</p>
      </div>
      
      <nav className="mt-6 px-4">
        <button
          onClick={() => setShowPromptOptions(!showPromptOptions)}
          className="w-full flex items-center px-6 py-4 text-[var(--background-900)] hover:bg-white/10 rounded-lg transition-all"
        >
          <RiAddLine className="mr-3 text-xl" />
          New Prompt
        </button>

        {showPromptOptions && (
          <div className="ml-4 mt-2 bg-white/10 rounded-lg overflow-hidden">
            <button
              onClick={() => onNewPrompt('user_data')}
              className="w-full px-6 py-3 text-left text-[var(--background-900)] hover:bg-white/10 text-sm flex items-center"
            >
              <RiBarChartLine className="mr-2" />
              <span>User Data Prompt</span>
            </button>
            <button
              onClick={() => onNewPrompt('natural_language')}
              className="w-full px-6 py-3 text-left text-[var(--background-900)] hover:bg-white/10 text-sm flex items-center"
            >
              <RiPulseLine className="mr-2" />
              <span>Natural Language Prompt</span>
            </button>
          </div>
        )}

        <button 
          onClick={() => onViewChange('home')} 
          className="w-full flex items-center px-6 py-4 mt-2 text-[var(--background-900)] hover:bg-white/10 rounded-lg transition-all"
        >
          <RiHomeLine className="mr-3 text-xl" />
          Dashboard
        </button>

        <button 
          onClick={() => onViewChange('settings')} 
          className="w-full flex items-center px-6 py-4 mt-2 text-[var(--background-900)] hover:bg-white/10 rounded-lg transition-all"
        >
          <RiSettings4Line className="mr-3 text-xl" />
          Settings
        </button>
        <button 
          onClick={() => window.location.href = '/'} 
          className="w-full flex items-center px-6 py-4 mt-2 text-[var(--background-900)] hover:bg-white/10 rounded-lg transition-all"
        >
          <RiArrowLeftLine className="mr-3 text-xl" />
          Back to Home
        </button>


      </nav>
    </div>
  )
}

const DashboardHeader = ({ companyName, promptStats }: { companyName: string, promptStats: any }) => (
  <div className="mb-12">
    <h1 className="text-5xl font-bold text-[var(--background-900)]">
      Welcome, {companyName}
    </h1>
    <p className="mt-4 text-lg text-[var(--background-800)]">
      Monitor your AI safety metrics and guardrails
    </p>
    
    <div className="grid grid-cols-3 gap-6 mt-8">
      <div className="p-6 bg-white/5 rounded-xl border border-white/10">
        <h3 className="text-[var(--background-800)]">Total Prompts</h3>
        <p className="text-3xl font-bold mt-2 text-[var(--background-900)]">{promptStats.total}</p>
      </div>
      <div className="p-6 bg-white/5 rounded-xl border border-white/10">
        <h3 className="text-[var(--background-800)]">Success Rate</h3>
        <p className="text-3xl font-bold mt-2 text-[var(--background-900)]">{promptStats.successRate}%</p>
      </div>
      <div className="p-6 bg-white/5 rounded-xl border border-white/10">
        <h3 className="text-[var(--background-800)]">Active Today</h3>
        <p className="text-3xl font-bold mt-2 text-[var(--background-900)]">{promptStats.activeToday}</p>
      </div>
    </div>

    <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={promptStats.weeklyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
          <YAxis stroke="rgba(255,255,255,0.5)" />
          <Tooltip />
          <Line type="monotone" dataKey="prompts" stroke="#96c0dd" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
)

const PromptList = ({ prompts, onPromptClick }: { prompts: Prompt[], onPromptClick: (prompt: Prompt) => void }) => (
  <div className="grid grid-cols-2 gap-6">
    {prompts.map((prompt) => {
      const date = new Date(prompt.created_at)
      const istDate = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short'
      }).format(date)

      return (
        <button
          key={prompt.id}
          onClick={() => onPromptClick(prompt)}
          className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:border-white/20 transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {prompt.prompt_type === 'user_data' ? 
                <RiBarChartLine className="text-xl text-[var(--accent-blue-500)]" /> : 
                <RiPulseLine className="text-xl text-[var(--accent-green-500)]" />
              }
              <p className="text-lg text-[var(--background-800)] font-medium">
                {prompt.prompt_type === 'user_data' ? 'User Data Prompt' : 'Natural Language Prompt'}
              </p>
            </div>
            <span className="text-[var(--background-800)] group-hover:translate-x-1 transition-transform">→</span>
          </div>
          <p className="mt-2 text-sm text-[var(--background-700)]">
            Created on {istDate} IST
          </p>
        </button>
      )
    })}
  </div>
)

const Settings = ({ companyName, onUpdateCompany }: { companyName: string, onUpdateCompany: (name: string) => void }) => {
  const [newCompanyName, setNewCompanyName] = useState(companyName)
  const [isUpdating, setIsUpdating] = useState(false)
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      const { error } = await supabase
        .from('profiles')
        .update({ 
          company_name: newCompanyName,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id)

      if (error) throw error

      await onUpdateCompany(newCompanyName)
      toast.success('Company name updated successfully')
    } catch (error) {
      console.error('Failed to update company name:', error)
      toast.error('Failed to update company name')
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-bold text-[var(--background-900)] mb-8">Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-[var(--background-800)] mb-3 text-lg">Company Name</label>
          <input
            type="text"
            value={newCompanyName}
            onChange={(e) => setNewCompanyName(e.target.value)}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 text-[var(--background-900)] transition-all"
            placeholder="Enter company name"
          />
        </div>
        <button
          type="submit"
          disabled={isUpdating}
          className="px-8 py-4 bg-[var(--accent-blue-500)] text-[var(--background-900)] rounded-lg hover:bg-[var(--accent-blue-500)]/90 transition-all disabled:opacity-70"
        >
          {isUpdating ? 'Updating...' : 'Update Company Name'}
        </button>
      </form>
    </div>
  )
}

export default function Dashboard() {
  const [companyName, setCompanyName] = useState('')
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null)
  const [currentView, setCurrentView] = useState('home')
  const [showUserQueryModal, setShowUserQueryModal] = useState(false)
  const [userQueryType, setUserQueryType] = useState<string | null>(null)
  const [promptStats, setPromptStats] = useState({
    total: 0,
    successRate: 0,
    activeToday: 0,
    weeklyData: []
  })
  const supabase = createClient()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return

        const { data: profileData } = await supabase
          .from('profiles')
          .select('company_name')
          .eq('id', user.id)
          .single()

        if (profileData) {
          setCompanyName(profileData.company_name)
        }

        // Fetch all prompts
        const { data: promptsData } = await supabase
          .from('guardrails')
          .select('*')
          .order('created_at', { ascending: false })

        if (promptsData) {
          setPrompts(promptsData)
          
          // Calculate total prompts
          const total = promptsData.length

          // Calculate success rate (assuming successful if not marked as failed)
          const successful = promptsData.filter(p => !p.failed).length
          const successRate = Math.round((successful / total) * 100)

          // Calculate active today
          const today = new Date().toISOString().split('T')[0]
          const activeToday = promptsData.filter(p => 
            p.created_at.startsWith(today)
          ).length

          // Calculate weekly data
          const weeklyData = Array(7).fill(0).map((_, i) => {
            const date = new Date()
            date.setDate(date.getDate() - i)
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
            const dayStr = date.toISOString().split('T')[0]
            
            const count = promptsData.filter(p => 
              p.created_at.startsWith(dayStr)
            ).length

            return {
              name: dayName,
              prompts: count
            }
          }).reverse()

          setPromptStats({
            total,
            successRate,
            activeToday,
            weeklyData
          })
        }
      } catch (error) {
        toast.error('Error fetching dashboard data')
      }
    }

    fetchData()
  }, [])

  const handleNewPromptSelect = (type: string) => {
    setUserQueryType(type)
    setShowUserQueryModal(true)
  }

  const handleUpdateCompany = async (newName: string) => {
    setCompanyName(newName)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary-200)] to-[var(--primary-300)]">
      <Toaster position="top-center" />
      
      <Sidebar onNewPrompt={handleNewPromptSelect} onViewChange={setCurrentView} />
      
      <div className="ml-72 p-12">
        <div className="max-w-7xl mx-auto">
          {currentView === 'home' && (
            <>
              <DashboardHeader companyName={companyName} promptStats={promptStats} />
              <PromptList 
                prompts={prompts} 
                onPromptClick={(prompt) => setSelectedPrompt(prompt)} 
              />
            </>
          )}
          {currentView === 'settings' && (
            <Settings companyName={companyName} onUpdateCompany={handleUpdateCompany} />
          )}
        </div>
      </div>

      <QueryDisplay
        isOpen={selectedPrompt !== null}
        onClose={() => setSelectedPrompt(null)}
        prompt={selectedPrompt?.prompt_text || null}
      />

      <UserQueryModal
        isOpen={showUserQueryModal}
        onClose={() => setShowUserQueryModal(false)}
        type={userQueryType}
      />
    </div>
  )
}
