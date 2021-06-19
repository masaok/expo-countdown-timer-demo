import React, { useEffect, useState } from 'react'

import { Text, View } from '../components/Themed'

// This StackOverflow answer works:
// https://stackoverflow.com/questions/57137094/implementing-a-countdown-timer-in-react-with-hooks

export default function TabTwoScreen() {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft])

  return (
    <View>
      <Text>{timeLeft}</Text>
    </View>
  )
}
