const App = () => {
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development Curriculum</h1>
      <Course course={courses[0]} />
      <Course course={courses[1]} />
    </div>
  )

}
const Course = ({ course }) => {

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h2>{props.course.name}</h2>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <h3>Sum of exercises</h3>
      <p> {props.course.parts.reduce((s, p) => s + p.exercises, 0)}</p>
    </div>
  )

}

const Content = (props) => {
  const parts = props.course.parts.map(part => (
    <div key={part.id}>
      <Part part={part.name} exercises={part.exercises} />
    </div>
  ));

  return (
    <div>
      {parts}
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <h4>{props.part}</h4>
      <p>{props.exercises}</p>
    </div>
  );
};

export default App