import { create } from 'zustand'
import { addDays, addWeeks, addMonths, addYears, startOfDay } from 'date-fns'

type RecurrenceType = 'daily' | 'weekly' | 'monthly' | 'yearly'

interface DatePickerState {
  startDate: Date
  endDate: Date | null
  recurrenceType: RecurrenceType
  interval: number
  selectedDays: number[]
  nthDay: number
  previewDates: Date[]
  setStartDate: (date: Date) => void
  setEndDate: (date: Date | null) => void
  setRecurrenceType: (type: RecurrenceType) => void
  setInterval: (interval: number) => void
  setSelectedDays: (days: number[]) => void
  setNthDay: (day: number) => void
  generatePreviewDates: () => void
}

export const useDatePickerStore = create<DatePickerState>((set, get) => ({
  startDate: startOfDay(new Date()),
  endDate: null,
  recurrenceType: 'daily',
  interval: 1,
  selectedDays: [],
  nthDay: 1,
  previewDates: [],
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setInterval: (interval) => set({ interval: interval }),
  setSelectedDays: (days) => set({ selectedDays: days }),
  setNthDay: (day) => set({ nthDay: day }),
  generatePreviewDates: () => {
    const { startDate, endDate, recurrenceType, interval, selectedDays, nthDay } = get()
    const previewDates: Date[] = []
    let currentDate = startOfDay(startDate)
    const endDateTime = endDate ? endDate.getTime() : currentDate.getTime() + 365 * 24 * 60 * 60 * 1000 // Default to 1 year if no end date

    while (currentDate.getTime() <= endDateTime) {
      switch (recurrenceType) {
        case 'daily':
          previewDates.push(currentDate)
          currentDate = addDays(currentDate, interval)
          break
        case 'weekly':
          if (selectedDays.includes(currentDate.getDay())) {
            previewDates.push(currentDate)
          }
          if (currentDate.getDay() === 6) {
            currentDate = addWeeks(currentDate, interval - 1)
          }
          currentDate = addDays(currentDate, 1)
          break
        case 'monthly':
          if (currentDate.getDate() === nthDay) {
            previewDates.push(currentDate)
            currentDate = addMonths(currentDate, interval)
          } else {
            currentDate = addDays(currentDate, 1)
          }
          break
        case 'yearly':
          previewDates.push(currentDate)
          currentDate = addYears(currentDate, interval)
          break
      }
    }
    set({ previewDates })
  },
}))