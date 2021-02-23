import React from "react"
import Course from "./components/Course"

const App = (props) => {

    return (
        <div>
            <Course course = {props.course}/>
        </div>
    )
}

export default App