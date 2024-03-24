import { DateTime } from 'luxon'

export interface IcalDateTime {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
  isDate: boolean
  timezone: string
}

export interface IcalEvent {
  startDate: DateTime
  endDate: DateTime
  summary: string
}

export type IcalExpanderSeries = {
  events: object[]
  occurrences: object[]
}

export type Event = {
  summary: string
  startISO: string
  endISO: string
  startTimeISO: string
  endTimeISO: string
}
