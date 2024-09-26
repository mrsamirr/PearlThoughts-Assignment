**PearlThoughts Assignment**
This is a Next.js Project with React

A reusable date picker component that allows users to select recurring dates with various options. Here's a breakdown of the components and their responsibilities:

1. `store.ts`: Manages the state using Zustand, including the start date, end date, recurrence type, interval, selected days, and preview dates.
2. `RecurringDatePicker.tsx`: The main component that combines all other components.
3. `DatePicker.tsx`: Allows users to select the start and end dates using the Calendar component.
4. `RecurrenceOptions.tsx`: Provides options for selecting the recurrence type, interval, and specific options for weekly and monthly recurrences.
5. `Preview.tsx`: Displays a preview of the selected recurring dates on a calendar.
6. `page.tsx`: A Next.js page component that renders the RecurringDatePicker.


This implementation meets all the technical requirements and functionality specified in the task. Users can select different recurring patterns (daily, weekly, monthly, yearly), customize the recurrence with intervals and specific days, and see a visual preview of the selected dates.

The component is broken down into smaller, reusable parts, making it easier to maintain and extend in the future. The use of Zustand for state management provides a clean and efficient way to handle the complex state of the date picker.