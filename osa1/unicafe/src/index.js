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
            />
            <br/>

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
            />
            <br/>

            <Title
                text = "Statistics"
            />
            <br/>

            <Display
                text = "Good: "
                value = {good}
            />
            <br/>
            <Display
                text = "Neutral: "
                value = {neutral}
            />
            <br/>
            <Display
                text = "Bad: "
                value = {bad}
            />
            <br/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)

