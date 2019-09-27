import React from 'react'


const Person = (props: any) => (
    <div>
    <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old.<br />
        <i>{props.children}</i>
    </p>
    
    </div>
)

// {
//     return (
//         <p>I am Person!</p>
//     )
// }
   
export default Person
