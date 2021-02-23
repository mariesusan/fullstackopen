import React from "react"
import Course from "./components/Course"
import Title from "./components/Title";

const App = (props) => {

    return (
        <div>
            <Title />
            <ul>
                {props.courses.map(course =>
                    <Course key = {course.id} course = {course}/>
                )}
            </ul>
        </div>
    )
}

export default App