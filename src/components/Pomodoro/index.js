import React from 'react'
import Timer from '../Timer'
import '../../styles/pomodoro.css'

function Pomodoro() {
  return (
    <section className="pomodoro_tracker">
      <h1>Pomodoro Tracker</h1>
      <Timer />
    </section>
  )
}

export default Pomodoro