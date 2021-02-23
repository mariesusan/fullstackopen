import React from "react"
import Part from "./Part"

const Content = (props) => {
    return (
        <>
            <ul>
                {props.parts.map(part =>
                    <Part key = {part.id} partOf = {part.name} totalOf = {part.exercises}/>
                )}
            </ul>
        </>
    )
}

export default Content
