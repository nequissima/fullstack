const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const contentArray = [
    part1, part2, part3
  ]

  const totalArray = [
    part1.exercises, part2.exercises, part3.exercises
  ]

  const Header = (props) => {

    return (
      <h1>{props.courseName}</h1>
    )

  }

  const Part = (props) => {
    return (
      <p>
        {props.content.name} {props.content.exercises}
      </p>
    )
  }

  const Content = (props) => {

    return (
      <>
        <Part content={props.content[0]}/>
        <Part content={props.content[1]}/>
        <Part content={props.content[2]}/>
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