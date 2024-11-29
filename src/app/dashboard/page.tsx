'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Toaster, toast } from 'sonner'
import { RiAddLine, RiSettings4Line, RiHomeLine, RiBarChartLine, RiPulseLine } from 'react-icons/ri'
import UserQueryModal from '@/components/dashboard/userQuery'

interface Prompt {
  id: string
  created_at: string
  prompt_type: string
  prompt_text: string
}

const Sidebar = ({ onNewPrompt, onViewChange }: { onNewPrompt: (type: string) => void, onViewChange: (view: string) => void }) => {
  const [showPromptOptions, setShowPromptOptions] = useState(false)
  
  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-gradient-to-b from-[var(--primary-200)] to-[var(--primary-300)] shadow-2xl">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[var(--background-900)]">Guardrail</h2>
        <p className="text-sm text-[var(--background-800)]/70 mt-2">AI Safety Platform</p>
      </div>
      
      <nav className="mt-6">
        <div className="px-6">
          <button
            onClick={() => setShowPromptOptions(!showPromptOptions)}
            className="w-full flex items-center px-6 py-4 text-[var(--background-800)] hover:bg-[var(--primary-300)] rounded-xl transition-all duration-200 hover:shadow-lg group"
          >
            <RiAddLine className="mr-3 text-xl group-hover:scale-110 transition-transform" />
            New Prompt
          </button>

          {showPromptOptions && (
            <div className="ml-4 mt-2 bg-[var(--primary-300)] rounded-xl overflow-hidden shadow-lg border border-[var(--background-900)]/10">
              <button
                onClick={() => onNewPrompt('user_data')}
                className="w-full px-6 py-3 text-left text-[var(--background-800)] hover:bg-[var(--primary-400)] text-sm flex items-center space-x-2"
              >
                <RiBarChartLine />
                <span>User Data Prompt</span>
              </button>
              <button
                onClick={() => onNewPrompt('natural_language')}
                className="w-full px-6 py-3 text-left text-[var(--background-800)] hover:bg-[var(--primary-400)] text-sm flex items-center space-x-2"
              >
                <RiPulseLine />
                <span>Natural Language Prompt</span>
              </button>
            </div>
          )}
        </div>

        <div className="px-6 mt-4">
          <button 
            onClick={() => onViewChange('home')} 
            className="w-full flex items-center px-6 py-4 text-[var(--background-800)] hover:bg-[var(--primary-300)] rounded-xl transition-all duration-200 hover:shadow-lg group"
          >
            <RiHomeLine className="mr-3 text-xl group-hover:scale-110 transition-transform" />
            Homepage
          </button>
        </div>

        <div className="px-6 mt-4">
          <button 
            onClick={() => onViewChange('settings')} 
            className="w-full flex items-center px-6 py-4 text-[var(--background-800)] hover:bg-[var(--primary-300)] rounded-xl transition-all duration-200 hover:shadow-lg group"
          >
            <RiSettings4Line className="mr-3 text-xl group-hover:scale-110 transition-transform" />
            Settings
          </button>
        </div>
      </nav>
    </div>
  )
}

const DashboardHeader = ({ companyName }: { companyName: string }) => (
  <div className="mb-16">
    <h1 className="text-6xl font-bold bg-gradient-to-r from-[var(--primary-200)] to-[var(--primary-400)] bg-clip-text text-transparent">
      Hi, {companyName}
    </h1>
    <p className="mt-6 text-lg text-[var(--primary-300)]">
      Welcome to your guardrail prompt dashboard. Create and manage your AI safety prompts here.
    </p>
  </div>
)

const PromptList = ({ prompts, onPromptClick }: { prompts: Prompt[], onPromptClick: (prompt: Prompt) => void }) => (
  <div className="grid gap-6">
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
          className="p-8 bg-gradient-to-br from-[var(--background-800)]/90 to-[var(--background-800)]/80 backdrop-blur-lg border border-[var(--primary-300)]/20 rounded-2xl hover:border-[var(--primary-300)]/40 transition-all group hover:shadow-xl hover:-translate-y-1"
        >
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center space-x-3">
                {prompt.prompt_type === 'user_data' ? <RiBarChartLine className="text-[var(--primary-400)]" /> : <RiPulseLine className="text-[var(--primary-400)]" />}
                <p className="text-lg text-[var(--primary-200)] font-medium group-hover:text-[var(--primary-100)]">
                  {prompt.prompt_type === 'user_data' ? 'User Data Prompt' : 'Natural Language Prompt'}
                </p>
              </div>
              <p className="mt-2 text-sm text-[var(--primary-300)]">
                Created on {istDate} IST
              </p>
            </div>
            <span className="text-[var(--primary-300)] text-xl group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </button>
      )
    })}
  </div>
)

const PromptModal = ({ prompt, onClose }: { prompt: Prompt | null, onClose: () => void }) => {
  if (!prompt) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50">
      <div className="w-full max-w-3xl bg-gradient-to-b from-[var(--background-800)] to-[var(--background-900)] rounded-3xl p-8 shadow-2xl border border-[var(--primary-300)]/20">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            {prompt.prompt_type === 'user_data' ? <RiBarChartLine className="text-[var(--primary-400)] text-xl" /> : <RiPulseLine className="text-[var(--primary-400)] text-xl" />}
            <h3 className="text-2xl font-semibold text-[var(--primary-200)]">
              {prompt.prompt_type === 'user_data' ? 'User Data Prompt' : 'Natural Language Prompt'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[var(--primary-300)] hover:text-[var(--primary-200)] text-xl transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="bg-[var(--background-900)] p-6 rounded-2xl border border-[var(--primary-300)]/10">
          <pre className="text-[var(--primary-200)] whitespace-pre-wrap text-lg">
            {prompt.prompt_text}
          </pre>
        </div>
      </div>
    </div>
  )
}

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
      <h2 className="text-4xl font-bold text-[var(--primary-200)] mb-8">Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-[var(--primary-100)] mb-3 text-lg">Company Name</label>
          <input
            type="text"
            value={newCompanyName}
            onChange={(e) => setNewCompanyName(e.target.value)}
            className="w-full p-4 bg-[var(--background-800)] border border-[var(--primary-300)]/20 rounded-xl focus:outline-none focus:border-[var(--primary-300)] text-[var(--primary-200)] text-lg transition-all"
            placeholder="Enter company name"
          />
        </div>
        <button
          type="submit"
          disabled={isUpdating}
          className="px-8 py-4 bg-gradient-to-r from-[var(--primary-400)] to-[var(--primary-500)] text-[var(--background-900)] rounded-xl hover:from-[var(--primary-500)] hover:to-[var(--primary-600)] transition-all duration-300 text-lg font-medium disabled:opacity-70"
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

        const { data: promptsData } = await supabase
          .from('prompts')
          .select('*')
          .order('created_at', { ascending: false })

        if (promptsData) {
          setPrompts(promptsData)
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
    <div className="min-h-screen bg-gradient-to-br from-[var(--background-900)] via-[var(--background-800)] to-[var(--background-900)]">
      <Toaster position="top-center" />
      
      <Sidebar onNewPrompt={handleNewPromptSelect} onViewChange={setCurrentView} />
      
      <div className="ml-72 p-12">
        <div className="max-w-6xl mx-auto">
          {currentView === 'home' && (
            <>
              <DashboardHeader companyName={companyName} />
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

      <PromptModal 
        prompt={selectedPrompt} 
        onClose={() => setSelectedPrompt(null)} 
      />

      <UserQueryModal
        isOpen={showUserQueryModal}
        onClose={() => setShowUserQueryModal(false)}
        type={userQueryType}
      />
    </div>
  )
}
