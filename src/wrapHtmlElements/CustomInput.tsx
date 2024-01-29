import React from 'react';
type inputProps = React.ComponentProps<'input'>

export const CusomtInput = (props: inputProps) => {
    return (
        <input {...props}></input>
    )
} 