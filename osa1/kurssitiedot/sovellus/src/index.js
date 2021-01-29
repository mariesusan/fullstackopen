import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    // const maarittelyt
    const course = "Half Stack application development";
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10
    }

    const part2 = {
        name: "Using props to pass data",
        exercises: 7
    }

    const part3 = {
        name: "State of a component",
        exercises: 14
    }

    return (
        <>
            <Header course={course} />
            <br/>
            <Content part1={part1.name} part2={part2.name} part3={part3.name}
            sumOf1={part1.exercises} sumOf2={part2.exercises} sumOf3={part3.exercises} />
            <Total sum={part1.exercises + part2.exercises + part3.exercises} />
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
            <Part partOf={props.part1} totalOf={props.sumOf1} />
            <Part partOf={props.part2} totalOf={props.sumOf2} />
            <Part partOf={props.part3} totalOf={props.sumOf3} />
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
            {props.sum}
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

