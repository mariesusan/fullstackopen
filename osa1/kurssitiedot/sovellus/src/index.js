import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    // const maarittelyt
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    return (
        <>
            <Header course={course} />
            <br/>
            <Content part1={part1} part2={part2} part3={part3}
            sumOf1={exercises1} sumOf2={exercises2} sumOf3={exercises3} />
            <Total sum={exercises1 + exercises2 + exercises3} />
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

