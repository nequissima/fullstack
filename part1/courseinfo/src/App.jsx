const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
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
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    )

  }

  return (
    <div>
      <Header courseName = {course}/>
      <Content content = {parts}/>
      <Total parts = {parts}/>
    </div>
  )
}

export default App