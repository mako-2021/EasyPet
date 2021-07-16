import React, { useState } from 'react'
import { format, subHours, startOfMonth } from 'date-fns'
import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem
} from '@zach.codes/react-calendar'
import '@zach.codes/react-calendar/dist/calendar-tailwind.css'

export default function MyMonthlyCalendar () {
  const [currentMonth, setCurrentMonth] = useState(
    startOfMonth(new Date())
  )

  return (

    <MonthlyCalendar
      currentMonth={currentMonth}
      onCurrentMonthChange={date => setCurrentMonth(date)}
    >
      <MonthlyNav />
      <MonthlyBody
        events={[
          { title: 'Call John', date: subHours(new Date(), 2) },
          { title: 'Call John', date: subHours(new Date(), 1) },
          { title: 'Meeting with Bob', date: new Date() }
        ]}
      >
        <MonthlyDay
          renderDay={data =>
            data.map((item, index) => (
              <DefaultMonthlyEventItem
                key={index}
                title={item.title}
                // Format the date here to be in the format you prefer
                date={format(item.date, 'k:mm')}
              />
            ))
          }
        />
      </MonthlyBody>
    </MonthlyCalendar>

  )
}
