import { Fragment } from "react"

export function Post(props) {
    return (
        <Fragment>
            <h1>Author: {props.author}</h1>
            <p>{props.content}</p>
        </Fragment>
    )
}
