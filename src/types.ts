export type Choice = {
  id: string
  label: string
  feedback: string
}

export type Scenario = {
  id: string
  title: string
  body: string
  choices: Choice[]
  meta?: { category?: string; difficulty?: number }
}

export type IndexFile = {
  order: string[]
}