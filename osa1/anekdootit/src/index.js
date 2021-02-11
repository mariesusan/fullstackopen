import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Display = (props) => (
    <div>
        {props.text1} {props.votes} {props.text2}
    </div>
)

const Button = (props) => (
    <button onClick = {props.handleClick}>
        {props.text}
    </button>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, vote] = useState(0)

    const setToSelected = (newValue) => {
        setSelected(newValue)
    }

    const setVoted = (newValue) => {
        vote(newValue);
    }

    const random = () => {
        return Math.floor(Math.random()*anecdotes.length)
    }

    return (
        <div>
            {props.anecdotes[selected]} <br/>
            <Display text1 = "Has " votes = {votes} text2 = "votes"/>
            <Button text = "Vote" handleClick = {() => setVoted(votes + 1)}/>
            <Button text = "Next anecdote" handleClick = {() => setToSelected(random)}/>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
