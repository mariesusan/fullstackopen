import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - props.age

    }

    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
            <p>
                So you were propably born {bornYear()}
            </p>
        </div>
    )
}

const App = () => {
    const name = 'Pekka'
    const age = 10

    return (
        <>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={name} age={age} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
