import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Title = (props) => (
    <h1>
        {props.text}
    </h1>
)

const Display = (props) => (
    <div>
        {props.text} {props.value}
    </div>
)

const Button = (props) => (
    <button onClick = {props.handleClick}>
        {props.text}
    </button>
)

const StatisticLine = (props) => (
    <div>
        <Display
            text = {props.text}
            value = {props.value}
        /><br/>
    </div>
)

const Statistics = (props) => {

    if (props.good + props.neutral + props.bad == 0) {
        return (
            <div>
                <p> No feedback given! </p>
            </div>
        )
    }

    return (
        <div>
            <StatisticLine text = "Good: " value = {props.good}
            /><br/>

            <StatisticLine text = "Neutral: " value = {props.neutral}
            /><br/>

            <StatisticLine text = "Bad: " value = {props.bad}
            /><br/>

            <StatisticLine text = "All: " value = {props.good + props.neutral + props.bad}
            /><br/>

            <StatisticLine text = "Average: " value = {(props.good * 1 + props.neutral * 0 + props.bad * -1) / (props.good + props.neutral + props.bad)}
            /><br/>

            <StatisticLine text = "Positive: " value = {100 * props.good / (props.good + props.neutral + props.bad)}
            /><br/>

        </div>
    )

}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setToGood = (newValue) => {
        setGood(newValue)
    }

    const setToNeutral = (newValue) => {
        setNeutral(newValue)
    }

    const setToBad = (newValue) => {
        setBad(newValue)
    }

    return (
        <div>

            <Title
                text = "Give Feedback"
            /><br/>

            <Button
                handleClick = {() => setToGood(good + 1)}
                text = "Good"
            />

            <Button
                handleClick = {() => setToNeutral(neutral + 1)}
                text = "Neutral"
            />

            <Button
                handleClick = {() => setToBad(bad + 1)}
                text = "Bad"
            /><br/>

            <Title
                text = "Statistics"
            /><br/>

            <Statistics good = {good} neutral = {neutral} bad = {bad} />

        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)

