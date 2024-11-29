'use client'

import { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'

interface UserQueryModalProps {
  isOpen: boolean
  onClose: () => void
  type: string | null
}

export default function UserQueryModal({ isOpen, onClose, type }: UserQueryModalProps) {
  const [tableData, setTableData] = useState<string[]>(Array(10).fill(''))
  const [naturalLanguageInput, setNaturalLanguageInput] = useState('')

  if (!isOpen) return null

  const handleTableCellChange = (index: number, value: string) => {
    const newData = tableData.map((cell, i) => i === index ? value : cell)
    setTableData(newData)
  }

  const handleAnalyze = () => {
    if (type === 'user_data') {
      const jsonData = {
        data: tableData
      }
      console.log('User Data JSON:', jsonData)
    } else if (type === 'natural_language') {
      const jsonData = {
        prompt: naturalLanguageInput
      }
      console.log('Natural Language JSON:', jsonData)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-4xl bg-gradient-to-b from-[var(--background-800)] to-[var(--background-900)] rounded-2xl p-6 shadow-xl border border-[var(--primary-300)]/20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-[var(--primary-200)]">
            {type === 'user_data' ? 'User Data Input' : 'Natural Language Input'}
          </h3>
          <button
            onClick={onClose}
            className="text-[var(--primary-300)] hover:text-[var(--primary-200)]"
          >
            <RiCloseLine size={24} />
          </button>
        </div>

        {type === 'user_data' ? (
          <div className="overflow-y-auto max-h-[60vh]">
            <table className="w-full border-collapse">
              <tbody>
                {tableData.map((cell, index) => (
                  <tr key={index}>
                    <td className="border border-[var(--primary-300)]/20 p-1">
                      <input
                        type="text"
                        value={cell}
                        onChange={(e) => handleTableCellChange(index, e.target.value)}
                        className="w-full bg-[var(--background-900)] text-[var(--primary-200)] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[var(--primary-300)]"
                      />
                    </td>
                  </tr>
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
          <button
            onClick={handleAnalyze}
            className="px-6 py-3 bg-[var(--primary-400)] text-[var(--background-900)] rounded-xl hover:bg-[var(--primary-500)] transition-colors"
          >
            Analyze
          </button>
        </div>
      </div>
    </div>
  )
}
