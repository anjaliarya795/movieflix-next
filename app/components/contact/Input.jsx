import React from 'react';

const Input = ({id,type,placeholder,label_text}) => {
    return (
        <div className="mb-4">
            <label htmlFor={id}>{label_text}</label><br />
            <input type={type} name={id} id={id} className=' rounded  py-3 w-full border-2 ps-2' placeholder={placeholder}/>
        </div>
    );
}

export default Input;
