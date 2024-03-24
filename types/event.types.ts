export type Event = {
  summary: string
  startISO: string
  endISO: string
  startTimeISO: string
  endTimeISO: string

  // startUtcIso: string
  // endUtcIso: string

  // startTimeUtcIso: string
  // endTimeUtcIso: string

  shift_id?: number
  shift_status?: string
}
