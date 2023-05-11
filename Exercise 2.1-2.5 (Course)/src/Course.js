import React from 'react'

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
 
export default Course
