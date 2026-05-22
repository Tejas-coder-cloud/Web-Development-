import React from 'react'

const Child = React.memo(
    (props) => {
        console.log("Child component rendered ")
        return (
            <div>
                <button onClick={props.handleclick}>
                    {props.buttonname}
                </button>
            </div>
        )
    }
);

export default Child
/*
React.memo->wrap-> component -> component will re-render only when props is changed  
If you are sending a function then React.memo won't be able to stop re-rendering 
 */