import React from 'react'

const Comment = (props) => {
    const { state } = props
    return (
        <div className="comments">
            <h4>{state.first_name} {state.last_name}</h4>
            <p>{state.contact_comment}</p>
        </div>
    )
}
export default Comment;