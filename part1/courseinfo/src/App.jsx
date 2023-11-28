const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const contentArray = [
    {name: part1, exercises: exercises1},
    {name: part2, exercises: exercises2},
    {name: part3, exercises: exercises3}
  ]

  const totalArray = [
    exercises1, exercises2, exercises3
  ]

  const Header = (props) => {

    return (
      <h1>{props.courseName}</h1>
    )

  }

  const Content = (props) => {

    return (
      <>
        <p>
        {props.content[0].name} {props.content[0].exercises}
        </p>
        <p>
        {props.content[1].name} {props.content[1].exercises}
        </p>
        <p>
        {props.content[2].name} {props.content[2].exercises}
        </p>
      </>
    )

  }

  const Total = (props) => {

    return (
      <p>
        Number of exercises {props.numbers[0] + props.numbers[1] + props.numbers[2]}
      </p>
    )

  }

  return (
    <div>
      <Header courseName = {course}/>
      <Content content = {contentArray}/>
      <Total numbers = {totalArray}/>
    </div>
  )
}

export default App