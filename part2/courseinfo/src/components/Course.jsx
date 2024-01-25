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

export default Course