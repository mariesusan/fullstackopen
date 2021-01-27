import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    // const maarittelyt

    return (
        <>
            <Header course={course} />
            <br/>
            <Content part={part1} />
            <br/>
            <Content part={part2} />
            <br/>
            <Content part={part3} />
            <br/>
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
            {props.part}
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

