const App = () => {
  const course ={

  name:'Half Stack application development',
   parts : [
    {
      name: "Fundamentals of react",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    },
    {
      name: "Redux",
      exercises: 11
    }
  ]
}

  return (
    <div>
     <Course course={course} />
    </div>
  )

}
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  );
};

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <h2>Number of exercises </h2>
      <p>{props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises + props.course.parts[3].exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
      <Part part={props.course.parts[3].name} exercises={props.course.parts[3].exercises} />
    </div>
  );
};
const Part = (props) => {
  return (
    <div>
      <h2>{props.part}</h2>
      <p>{props.exercises}</p>
    </div>
  );
};

export default App