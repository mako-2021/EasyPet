import React, { useState } from 'react'
import { saveEvent } from '../actions'
import { subHours } from 'date-fns'
export default function AddToCalendar (props) {
  const [eventItems, setEventItems] = useState([
    {
      title: '',
      date: subHours(new Date(), 1)
    }
  ])

  function handleChange (e) {
    const { title, date } = e.target
    setEventItems({
      ...eventItems,
      [title]: '',
      [date]: ''
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    props.dispatch(saveEvent(e))
    setEventItems({
      title: '',
      date: subHours(new Date())
    })
  }

  // TODO: Name placeholders more appropriately
  return (
    <div>

      <form>
        <input onChange={handleChange} type='text' id='title' placeholder="Appointment info" />
        {/* <input onChange={handleChange} type='text' id='type' placeholder='Type?' /> */}
        <input onChange={handleChange} type='text' id='date' placeholder='Date'/>
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>

  )
}
