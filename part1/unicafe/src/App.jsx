import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Update = (props) => {
  func = props.handerFunction
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give feedback!</h2>
      <div>
        <Button text={'good'} handleClick={() => setGood(good + 1)}/>
        <Button text={'neutral'} handleClick={() => setNeutral(neutral + 1)}/>
        <Button text={'bad'} handleClick={() => setBad(bad + 1)}/>
      </div>
      <h2>Statistics</h2>
      <p>
        good: {good} <br/>
        neutral: {neutral} <br/>
        bad: {bad} <br/>
      </p>
    </div>
  )
}

export default App