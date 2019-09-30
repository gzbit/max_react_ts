import React from 'react'


const Person = (props: any) => {
    const clever = props.clever ? 'Yes' : 'No'
    return (
        <div onClick={props.click}>
            <p>
                I am {props.name} and I am {props.age} years old.<br />
                <i> clever: {clever}</i>
                <br />
                <input type="text" onChange={props.change} value={props.name} />
            </p>
           
        </div>
    )
}
   
export default Person

