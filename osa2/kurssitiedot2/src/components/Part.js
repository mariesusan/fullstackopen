import React from "react"

const Part = (props) => {
    return (
        <li>{props.partOf} {props.totalOf}</li>
    )
}

export default Part