import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Statistics = (props) => {
  if (props.inputs !== 0) {
    return (
      <p>
        good: {props.good} <br/>
        neutral: {props.neutral} <br/>
        bad: {props.bad} <br/>
        all: {props.inputs} <br/>
        average: {props.average} <br/>
        % positive: {props.percentPositive} <br/>
      </p>
    )
  } else {
    return (
      <p>
        No feedback yet.
      </p>
    )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [inputs, setInputs] = useState(0)
  const [average, setAverage] = useState(0)
  const [percentPositive, setPerPos] = useState(0)

  const handleUpdate = (variable, updateFunc, value) => {
    const updated = variable + 1
    updateFunc(updated)
    const newInputs = inputs + 1
    setInputs(newInputs)
    const newTotal = total + value
    setTotal(newTotal)
    setAverage(newTotal / newInputs)
  
    if (value === 1) {
      setPerPos(100 * updated / newInputs)
    } else {
      setPerPos(100 * good / newInputs)
    }
  }

  return (
    <div>
      <h2>Give feedback!</h2>
      <div>
        <Button text={'good'} handleClick={() => handleUpdate(good, setGood, 1)}/>
        <Button text={'neutral'} handleClick={() => handleUpdate(neutral, setNeutral, 0)}/>
        <Button text={'bad'} handleClick={() => handleUpdate(bad, setBad, -1)}/>
      </div>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} inputs={inputs} average={average} percentPositive={percentPositive}/>
    </div>
  )
}

export default App