import React from 'react';

const Textarea = ({id,label_text}) => {
    return (
        <div className="mb-4 ">
            <label htmlFor={id}>{label_text}</label><br />
            <textarea name={id} id={id} cols="" rows="10" className=' border-2 ps-2 w-full rounded' ></textarea>
        </div>
    );
}

export default Textarea;
