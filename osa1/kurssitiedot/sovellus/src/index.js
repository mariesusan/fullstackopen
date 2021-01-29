import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    // const maarittelyt
    const course = "Half Stack application development";
    const parts = [
        {
            name: "Fundamentals of React",
            exercises: 10
        },
        {
            name: "Using props to pass data",
            exercises: 7
        },
        {
            name: "State of a component",
            exercises: 14
        }
    ]


    return (
        <>
            <Header course={course} />
            <br/>
            <Content parts={parts}/>
            <Total parts={parts} />
            <br/>
        </>
    )
}

const Header = (props) => {
    return (
        <>
            {props.course}
        </>
    )
}

const Content = (props) => {
    return (
        <>
            <Part partOf={props.parts[0].name} totalOf={props.parts[0].exercises} />
            <Part partOf={props.parts[1].name} totalOf={props.parts[1].exercises} />
            <Part partOf={props.parts[2].name} totalOf={props.parts[2].exercises} />
        </>
    )
}

const Part = (props) => {
    return (
        <>
            {props.partOf} {props.totalOf} <br/>
        </>
    )
}

const Total = (props) => {
    return (
        <>
            {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

