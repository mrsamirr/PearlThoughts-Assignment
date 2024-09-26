import React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { useDatePickerStore } from '@/state/store'

export function Preview() {
  const { previewDates } = useDatePickerStore()

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Preview</h3>
      <Calendar
        mode="multiple"
        selected={previewDates}
        className="rounded-md border"

      />
    </div>
  )
}