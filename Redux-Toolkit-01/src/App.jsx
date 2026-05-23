import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, increaseByAmount } from './features/counter/counterSlice.js'

const App = () => {
  const [inputValue, setInputValue] = useState("")
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
  <>
    <button onClick={() => { dispatch(decrement()) }}>Decrease</button>
    <div>{count}</div>
    <button onClick={() => { dispatch(increment()) }}>Increase</button>

    <input type="text" onChange={(e) => { setInputValue(e.target.value) }} value={inputValue} />
    <button onClick={() => { dispatch(increaseByAmount(Number(inputValue))) }}>Increase By Amount</button>

    <p>{inputValue}</p>
  </>
  )
}

export default App