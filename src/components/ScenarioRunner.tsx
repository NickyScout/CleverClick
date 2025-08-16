import React, { useState } from 'react'
import type { Scenario } from '../types'

export default function ScenarioRunner({
  scenario,
  onNext,
}: {
  scenario: Scenario
  onNext: () => void
}) {
  const [feedback, setFeedback] = useState<string | null>(null)

  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: 20,
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        background: '#fff',
      }}
    >
      <h2 style={{ fontSize: 22, marginTop: 0 }}>{scenario.title}</h2>
      <p style={{ fontSize: 16, lineHeight: 1.5 }}>{scenario.body}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
        {scenario.choices.map((c) => (
          <button
            key={c.id}
            onClick={() => setFeedback(c.feedback)}
            style={{
              padding: '12px 16px',
              fontSize: 16,
              borderRadius: 10,
              border: '1px solid #d1d5db',
              cursor: 'pointer',
              background: '#f9fafb',
              textAlign: 'left',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {feedback && (
        <div
          role="status"
          aria-live="polite"
          style={{
            marginTop: 16,
            padding: 16,
            borderRadius: 10,
            background: '#f0fdf4',
            border: '1px solid #86efac',
          }}
        >
          {feedback}
          <div style={{ marginTop: 12 }}>
            <button
              onClick={() => {
                setFeedback(null)
                onNext()
              }}
              style={{
                padding: '10px 14px',
                fontSize: 16,
                borderRadius: 8,
                border: '1px solid #10b981',
                background: '#10b981',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}