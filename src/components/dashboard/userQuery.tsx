'use client'

import { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'

interface UserQueryModalProps {
  isOpen: boolean
  onClose: () => void
  type: string | null
}

export default function UserQueryModal({ isOpen, onClose, type }: UserQueryModalProps) {
  const [tableData, setTableData] = useState<string[]>(Array(10).fill(''))
  const [naturalLanguageInput, setNaturalLanguageInput] = useState('')
  const [analysis, setAnalysis] = useState<{allowed: boolean, reason: string, suggested_modification?: string} | null>(null)
  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState<string | null>(null)
  const [showInput, setShowInput] = useState(true)

  if (!isOpen) return null

  const handleTableCellChange = (index: number, value: string) => {
    const newData = tableData.map((cell, i) => i === index ? value : cell)
    setTableData(newData)
  }

  const handleAnalyze = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/getPrompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: type === 'user_data' ? tableData.join('\n') : naturalLanguageInput,
          type: type,
          data: type === 'user_data' ? tableData : [naturalLanguageInput]
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to analyze')
      }

      const data = await response.json()
      
      // Extract prompt from between tags
      const promptMatch = data.analysis.match(/<prompt>(.*?)<\/prompt>/s)
      if (promptMatch) {
        setPrompt(promptMatch[1].trim())
      }
      
      setAnalysis(data.analysis)
      setShowInput(false)
    } catch (error) {
      console.error('Error analyzing:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <AnimatePresence mode="wait">
        <motion.div
          key="modal"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="w-full max-w-4xl bg-gradient-to-b from-[var(--background-800)] to-[var(--background-900)] rounded-2xl p-6 shadow-xl border border-[var(--primary-300)]/20"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-[var(--primary-200)]">
              {showInput ? (type === 'user_data' ? 'User Data Input' : 'Natural Language Input') : 'Analysis Results'}
            </h3>
            <button
              onClick={onClose}
              className="text-[var(--primary-300)] hover:text-[var(--primary-200)]"
            >
              <RiCloseLine size={24} />
            </button>
          </div>

          {showInput ? (
            <>
              {type === 'user_data' ? (
                <div className="overflow-y-auto max-h-[60vh]">
                  <table className="w-full border-collapse">
                    <tbody>
                      {tableData.map((cell, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <td className="border border-[var(--primary-300)]/20 p-1">
                            <input
                              type="text"
                              value={cell}
                              onChange={(e) => handleTableCellChange(index, e.target.value)}
                              className="w-full bg-[var(--background-900)] text-[var(--primary-200)] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[var(--primary-300)]"
                            />
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <textarea
                  value={naturalLanguageInput}
                  onChange={(e) => setNaturalLanguageInput(e.target.value)}
                  className="w-full h-64 bg-[var(--background-900)] text-[var(--primary-200)] p-4 rounded-xl border border-[var(--primary-300)]/20 focus:outline-none focus:border-[var(--primary-300)] resize-none"
                  placeholder="Enter your natural language query here..."
                />
              )}

              <div className="mt-6 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="px-6 py-3 bg-[var(--primary-400)] text-[var(--background-900)] rounded-xl hover:bg-[var(--primary-500)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Analyzing...' : 'Analyze'}
                </motion.button>
              </div>
            </>
          ) : (
            <div className="h-[80vh] overflow-y-auto markdown-content">
              <AnimatePresence mode="wait">
                {analysis && (
                  <motion.div
                    key="analysis"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`mb-6 p-4 rounded-xl ${analysis.allowed ? 'bg-green-500/20' : 'bg-red-500/20'}`}
                  >
                    <ReactMarkdown className="text-[var(--primary-200)]">{analysis.reason}</ReactMarkdown>
                    {!analysis.allowed && analysis.suggested_modification && (
                      <ReactMarkdown className="mt-2 text-[var(--primary-300)]">
                        Suggestion: {analysis.suggested_modification}
                      </ReactMarkdown>
                    )}
                  </motion.div>
                )}

                {prompt && (
                  <motion.div
                    key="prompt"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-6 rounded-xl bg-[var(--background-800)] border border-[var(--primary-300)]/20"
                  >
                    <h4 className="text-lg font-semibold text-[var(--primary-200)] mb-4">Generated Prompt</h4>
                    <div className="prose prose-invert max-w-none">
                      <ReactMarkdown className="whitespace-pre-wrap text-[var(--primary-300)] bg-[var(--background-900)] p-4 rounded-lg">
                        {prompt}
                      </ReactMarkdown>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
