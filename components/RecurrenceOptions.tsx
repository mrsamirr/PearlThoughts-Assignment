import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { useDatePickerStore } from '@/state/store'

export function RecurrenceOptions() {
  const {
    recurrenceType,
    interval,
    selectedDays,
    nthDay,
    setRecurrenceType,
    setInterval,
    setSelectedDays,
    setNthDay,
    generatePreviewDates,
  } = useDatePickerStore()

  const handleRecurrenceTypeChange = (value: string) => {
    setRecurrenceType(value as 'daily' | 'weekly' | 'monthly' | 'yearly')
    generatePreviewDates()
  }

  const handleIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterval(parseInt(e.target.value))
    generatePreviewDates()
  }

  const handleDaySelect = (day: number) => {
    const newSelectedDays = selectedDays.includes(day)
      ? selectedDays.filter((d: number) => d !== day)
      : [...selectedDays, day]
    setSelectedDays(newSelectedDays)
    generatePreviewDates()
  }

  const handleNthDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNthDay(parseInt(e.target.value))
    generatePreviewDates()
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium m-4 text-gray-700">Recurrence Type</label>
        <Select onValueChange={handleRecurrenceTypeChange} value={recurrenceType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select recurrence type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Interval</label>
        <Input type="number" min="1" value={interval} onChange={handleIntervalChange} />
      </div>
      {recurrenceType === 'weekly' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Days</label>
          <div className="flex space-x-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <div key={day} className="flex items-center">
                <Checkbox
                  id={`day-${index}`}
                  checked={selectedDays.includes(index)}
                  onCheckedChange={() => handleDaySelect(index)}
                />
                <label htmlFor={`day-${index}`} className="ml-2 text-sm">
                  {day}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
      {recurrenceType === 'monthly' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Day of the month</label>
          <Input type="number" min="1" max="31" value={nthDay} onChange={handleNthDayChange} />
        </div>
      )}
    </div>
  )
}