"use client"
import React, { useEffect } from 'react'
import { DatePicker } from './DatePicker'
import { RecurrenceOptions } from './RecurrenceOptions'
import { Preview } from './Preview'
import { useDatePickerStore } from '@/state/store'

export function RecurringDatePicker() {
  const { generatePreviewDates } = useDatePickerStore()

  useEffect(() => {
    generatePreviewDates()
  }, [generatePreviewDates])

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Recurring Date Picker</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <DatePicker />
          <RecurrenceOptions />
        </div>
        <Preview />
      </div>
    </div>
  )
}