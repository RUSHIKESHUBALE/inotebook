import React from 'react'

function Alert(props) {
    return (
        <div className = "container">
            <div className={`alert alert-${props.alertType} my-2`} role="alert">
                {props.message}
            </div>
        </div>
    )
}

export default Alert
