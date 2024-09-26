"use client"
import React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { useDatePickerStore } from '@/state/store'

export function DatePicker() {
  const { startDate, endDate, setStartDate, setEndDate, generatePreviewDates } = useDatePickerStore()

  const handleSelect = (value: Date | undefined) => {
    if (!value) return
    if (!endDate || value < startDate) {
      setStartDate(value)
    } else {
      setEndDate(value)
    }
    generatePreviewDates()
  }

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Select Date Range</h3>
      <Calendar
        mode="range"
        selected={{ from: startDate, to: endDate || undefined }}
        onSelect={handleSelect as any}
        className="rounded-md border"
      />
    </div>
  )
}