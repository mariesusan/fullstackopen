import React from "react"

const Total = (props) => {
    return (
        <>
            <p> Total of {props.parts.reduce((acc, part) => acc + part.exercises, 0)} exercises </p>
        </>
    )
}

export default Total;