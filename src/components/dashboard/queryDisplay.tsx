'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiCloseLine } from 'react-icons/ri'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface QueryDisplayProps {
  isOpen: boolean
  onClose: () => void
  prompt: string | null
}

export default function QueryDisplay({ isOpen, onClose, prompt }: QueryDisplayProps) {
  const [activeProvider, setActiveProvider] = useState<'openai' | 'anthropic'>('openai')

  if (!isOpen || !prompt) return null

  const openaiCode = `// Install: npm install openai
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  const { userInput } = await req.json()

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: \`${prompt}\`
      },
      {
        role: "user", 
        content: userInput
      }
    ]
  })

  return Response.json({ result: completion.choices[0].message })
}`

  const anthropicCode = `// Install: npm install @anthropic-ai/sdk
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function POST(req: Request) {
  const { userInput } = await req.json()

  const message = await anthropic.messages.create({
    model: "claude-3-opus-20240229",
    system: \`${prompt}\`,
    messages: [
      {
        role: "user",
        content: userInput
      }
    ]
  })

  return Response.json({ result: message.content[0].text })
}`

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="w-full max-w-6xl h-[80vh] bg-gradient-to-b from-[var(--background-800)] to-[var(--background-900)] rounded-2xl shadow-xl border border-[var(--primary-300)]/20 overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-[var(--primary-300)]/10 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-[var(--primary-200)]">
              API Implementation
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex bg-[var(--background-900)] rounded-lg p-1">
                <button
                  onClick={() => setActiveProvider('openai')}
                  className={`px-4 py-2 rounded-md transition-all ${
                    activeProvider === 'openai'
                      ? 'bg-[var(--primary-400)] text-[var(--background-900)]'
                      : 'text-[var(--primary-300)] hover:text-[var(--primary-200)]'
                  }`}
                >
                  OpenAI
                </button>
                <button
                  onClick={() => setActiveProvider('anthropic')}
                  className={`px-4 py-2 rounded-md transition-all ${
                    activeProvider === 'anthropic'
                      ? 'bg-[var(--primary-400)] text-[var(--background-900)]'
                      : 'text-[var(--primary-300)] hover:text-[var(--primary-200)]'
                  }`}
                >
                  Anthropic
                </button>
              </div>
              <button
                onClick={onClose}
                className="text-[var(--primary-300)] hover:text-[var(--primary-200)] transition-colors"
              >
                <RiCloseLine size={24} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-6">
            <SyntaxHighlighter
              language="typescript"
              style={atomOneDark}
              customStyle={{
                background: 'var(--background-900)',
                padding: '2rem',
                borderRadius: '1rem',
                fontSize: '0.95rem'
              }}
            >
              {activeProvider === 'openai' ? openaiCode : anthropicCode}
            </SyntaxHighlighter>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
