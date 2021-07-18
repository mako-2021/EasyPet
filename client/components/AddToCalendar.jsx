import React, { useState, useEffect } from 'react'

export default function AddToCalendar () {
  // TODO: create actions to handle these functions

  const [eventItems, setEventItems] = useState([
    {
      title: '',
      date: subHours(new Date())
    }
  ])

  function handleChange (e) {
    const { title, date } = e.target
    setEventItems({
      ...eventItems,
      [title]: value
    })
  }

  function handleClick (e) {
    e.preventDefault()
    setEventItems({
      title: '',
      date: subHours(new Date())
    })
  }

  // TODO: Name placeholders more appropriately
  return (
    <div>

      <form>
        <input type='text' id='title' placeholder="Appointment info" />
        <input type='text' id='type' placeholder='Type?' />
        <input type='text' id='date' placeholder='Date'/>
        <button>Submit</button>
      </form>
    </div>

  )
}
