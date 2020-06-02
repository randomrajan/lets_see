import React from 'react';
import './UserOutput.css'

const userOutput = (props) =>
{
    return (
        <div className = "UserOutput">
            <p>Username: {props.userName}</p>
            <p>looking forward to some amazing stuff.</p>
        </div>
    );
};

export default userOutput;