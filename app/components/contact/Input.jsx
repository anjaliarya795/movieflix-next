import React from 'react';

const Input = ({id,type,placeholder,label_text}) => {
    return (
        <div className="mb-4">
            <label htmlFor={id}>{label_text}</label><br />
            <input type={type} name={id} id={id} className='border-4 rounded w-6/12 py-3' placeholder={placeholder}/>
        </div>
    );
}

export default Input;
