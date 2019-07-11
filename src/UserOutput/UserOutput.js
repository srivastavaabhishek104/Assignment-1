import React from 'react';
import './UserOutput.css';
const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <h3> The Username is:</h3> {props.username}
        </div>
    );

}
export default UserOutput;