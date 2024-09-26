"use client"
import React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { useDatePickerStore } from '@/state/store'

export function DatePicker() {
  const { startDate, endDate, setStartDate, setEndDate, generatePreviewDates } = useDatePickerStore()

  const handleSelect = (range: { from: Date | undefined; to?: Date | undefined } | undefined) => {
    if (!range || !range.from) return
    if (!range.to || range.from < startDate) {
      setStartDate(range.from)
    } else {
      setEndDate(range.to)
    }
    generatePreviewDates()
  }

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Select Date Range</h3>
      <Calendar
        mode="range"
        selected={{ from: startDate, to: endDate || undefined }}
        onSelect={handleSelect} 
        className="rounded-md border"
      />
    </div>
  )
}