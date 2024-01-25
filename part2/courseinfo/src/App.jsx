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

const Content = ({content}) => {

  return (
    <>
      {content.map((part) => <Part content={part} key={part.id}/>)}
    </>
  )

}

const Total = ({parts}) => {

  return (
    <p>
      <b>
        Total number of exercises: {parts.map(part => part.exercises).reduce((acc, curval) => acc + curval, 0)}
      </b>
    </p>
  )

}

const Course = ({course}) => {
  return (
    <div>
      <Header courseName = {course.name}/>
      <Content content = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Test course',
        exercises: 27,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App

  