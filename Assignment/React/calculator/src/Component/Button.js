import React from 'react';

const Button = (props) => {
    console.log(props);
    return (
        <input
            type="button"
            value={props.label}
        />
    );
}

export default Button