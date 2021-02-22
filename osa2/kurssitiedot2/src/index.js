import React from 'react';
import ReactDOM from 'react-dom';


const Course = (props) => {
    return (
        <>
            <Header title={props.course.name} />
            <Content parts={props.course.parts}/>
            <Total parts={props.course.parts} />
        </>
    )
}

const Header = (props) => {
    return (
        <>
            <h1> {props.title} </h1>
        </>
    )
}

const Content = (props) => {
    return (
        <>
            <ul>
                {props.parts.map(part =>
                    <Part key = {part.id} partOf = {part.name} totalOf = {part.exercises}/>
                )}
            </ul>
        </>
    )
}

const Part = (props) => {
    return (
        <li>{props.partOf} {props.totalOf}</li>
    )
}

const Total = (props) => {
    return (
        <>
            <p> Total of {} exercises </p>
        </>
    )
}

const App = () => {
    const course = {
        name: "Half Stack application development",
        id: 1,
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
                id: 1
            },
            {
                name: "Using props to pass data",
                exercises: 7,
                id: 2
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3
            }
        ]
    }

    return (
        <div>
        <Course course = {course}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

