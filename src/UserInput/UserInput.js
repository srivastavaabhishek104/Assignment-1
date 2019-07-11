import React from 'react';
import './UserInput.css'
const UserInput = (props) => {
    return (
        <div className="UserInput">
            <h3> Enter Username:</h3>
            <input className="UserInput" value={props.username} onChange={props.changed}/>
        </div>
    );

}
export default UserInput;