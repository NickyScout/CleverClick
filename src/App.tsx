import React, { useEffect, useMemo, useState } from 'react'
import { Scenario, IndexFile } from './types'
import ScenarioRunner from './components/ScenarioRunner'

export default function App() {
  const [order, setOrder] = useState<string[] | null>(null)
  const [scenarios, setScenarios] = useState<Record<string, Scenario>>({})
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const idxRes = await fetch('/data/index.json')
        const idx: IndexFile = await idxRes.json()
        const scenarioEntries = await Promise.all(
          idx.order.map(async (id) => {
            const res = await fetch(`/data/${id}.json`)
            const data: Scenario = await res.json()
            return [id, data] as const
          })
        )
        const map = Object.fromEntries(scenarioEntries)
        setOrder(idx.order)
        setScenarios(map)
      } catch (e: any) {
        setError('Failed to load scenarios. Please reload the page.')
        console.error(e)
      }
    }
    load()
  }, [])

  const [current, setCurrent] = useState(0)

  const currentScenario = useMemo(() => {
    if (!order) return null
    const id = order[current]
    return scenarios[id]
  }, [order, scenarios, current])

  if (error) return <div style={{ padding: 24, color: 'crimson' }}>{error}</div>
  if (!order || !currentScenario) return <div style={{ padding: 24 }}>Loading…</div>

  const onNext = () => {
    if (current < order.length - 1) setCurrent((c) => c + 1)
    else alert('All done! Great job staying safe online.')
  }

  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: 24, fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>CleverClick</h1>
      <p style={{ color: '#444', marginTop: 0 }}>
        Learn to pause, check, and choose safely online.
      </p>
      <ScenarioRunner scenario={currentScenario} onNext={onNext} />
      <div style={{ marginTop: 12, fontSize: 12, color: '#666' }}>
        Step {current + 1} of {order.length}
      </div>
    </div>
  )
}
