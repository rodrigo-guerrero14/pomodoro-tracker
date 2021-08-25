import React, {useState, useEffect} from 'react'

function Timer(){
  const [breakLength, setBreak] = useState(5 * 60)
  const [sessionLength, setSession] = useState(25 * 60)

  // const [timeSpent, setTimeSpent] = useState(0)
  const [timeLeft, setTimeLeft] = useState(sessionLength * 1000)
  const [isActive, setIsActive] = useState(false)
  // let mode = 'session'

  useEffect(()=> {
    let interval = null
    if(isActive && timeLeft > 1){
      interval = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1000)
        // setTimeSpent(prevTimeSpent => prevTimeSpent + 1000)
        return
      }, 1000)
      console.log('interval: ',interval)
    }else{
      console.log('else interval: ', interval)
      clearInterval(interval)
    }
  }, [isActive])

  return(
    <>
      <h3>Timer - Clock</h3>
      <p>time left: {timeLeft}</p>
      <button onClick={()=> setIsActive(isActive => !isActive)}>Pausar / Activar</button>
    </>
  )
}

export default Timer