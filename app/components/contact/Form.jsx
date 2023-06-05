import React from 'react';
import Input from './Input';
import Textarea from './Textarea';

const Form = () => {
    return (
            <div className="mx-auto border-teal-700">
                <form action="" method="post">
                    <Input id={"name"} type={"text"} placeholder={"Anjali Arya"} label_text={"Enter Name:"} />
                    <Input id={"email"} type={"email"} placeholder={"anjalisinha498@gmail.com"} label_text={"Enter Email:"} />
                    <Input id={"contact"} type={"tel"} placeholder={"9999999999"} label_text={"Enter Contact no.:"} />

                    <Textarea id={"message"} label_text={"Write message"} />

                    <button type="submit" className='bg-black p-2 rounded text-white w-6/12'>Submit</button>
                </form>
            </div>
    );
}

export default Form;
