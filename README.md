# PearlThoughts Assignment
This repository contains the implementation of the PearlThoughts assignment. It includes the task as specified and demonstrates the functionalities using modern web development technologies.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Scripts](#scripts)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Features

  **Recurring Options**: Users should be able to select different recurring patterns:
 - Daily
 - Weekly
 - Monthly
 - Yearly

**Customization**: Allow users to fine-tune the recurrence:

 - Every X days/weeks/months/years
 - Specific days of the week
 - The nth day of the month (e.g., the second Tuesday)

**Visual Preview**: Display the selected recurring dates on a mini calendar within the date picker.
## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Context Management**: Zustland
## Scripts
-   **Start development server**:
    `npm run dev` 
    
-   **Build for production**:
    `npm run build`
## Usage

A reusable date picker component that allows users to select recurring dates with various options. Here's a breakdown of the components and their responsibilities:

1. `store.ts`: Manages the state using Zustand, including the start date, end date, recurrence type, interval, selected days, and preview dates.
2. `RecurringDatePicker.tsx`: The main component that combines all other components.
3. `DatePicker.tsx`: Allows users to select the start and end dates using the Calendar component.
4. `RecurrenceOptions.tsx`: Provides options for selecting the recurrence type, interval, and specific options for weekly and monthly recurrences.
5. `Preview.tsx`: Displays a preview of the selected recurring dates on a calendar.
6. `page.tsx`: A Next.js page component that renders the RecurringDatePicker.


This implementation meets all the technical requirements and functionality specified in the task. Users can select different recurring patterns (daily, weekly, monthly, yearly), customize the recurrence with intervals and specific days, and see a visual preview of the selected dates.

The component is broken down into smaller, reusable parts, making it easier to maintain and extend in the future. The use of Zustand for state management provides a clean and efficient way to handle the complex state of the date picker.


## Folder Structure
```plaintext
PearlThoughts-Assignment/
├── app/                                
│   ├── layout.tsx                      # Layout component for the entire app
│   ├── page.tsx                        # The App of Calendar Components Date Picker
│   └── datepicker/                     # DatePicker-specific page route
│       └── page.tsx                    # Page for Recurrance Date Picker feature
├── components/                         
│   ├── DatePicker.tsx                  # Component for selecting a date
│   ├── Preview.tsx                     # Component for previewing the selected date
│   ├── RecurrenceOptions.tsx           # Component for configuring recurrence options
│   └── RecurringDatePicker.tsx         # Component combining date picker with recurrence options
│   └── ui/                                              # ui components            
│        └── button.tsx                        
│        └── calendar.tsx                      
│        └── card.tsx                            
│        └── checkbox.tsx                    
│        └── input.tsx                         
│        └── select.tsx                         
├── state/                         
│   ├── store.ts                  # modern state management library Zustand
├── lib/                             
│    ├── utils.ts                   # Utility Library functions
```

**Cloud IDE Workspace**:  https://pearl-thoughts-task.vercel.app/

**Github Git repo link:** https://github.com/mrsamirr/PearlThoughts-Assignment