"use client";
import React, { useState } from 'react';
import Input from './Input';
import Textarea from './Textarea';

const Form = () => {

    const [user,setUser] = useState({
        name:"",
        email:"",
        contact:"",
        message:"",
    })

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser(prevUser => ({ ...prevUser, [name]: value }));

    }

    function handleSubmit(){
    
    }

    return (
        
            <div className=" border-2 p-10 rounded shadow-lg shadow-gray-700 ">
                <form action="" method="post" className='pb-5' onSubmit={handleSubmit}>
                    <Input id={"name"} type={"text"} placeholder={"Anjali Arya"} label_text={"Enter Name:"} value={user.name} onChange={handleChange}/>
                    <Input id={"email"} type={"email"} placeholder={"anjalisinha498@gmail.com"} label_text={"Enter Email:"} />
                    <Input id={"contact"} type={"tel"} placeholder={"9999999999"} label_text={"Enter Contact no.:"} />

                    <Textarea id={"message"} label_text={"Write message"} />

                    <button type="submit" className='bg-black p-2 rounded text-white float-right '>Submit</button>
                </form>
            </div>
    );
}

export default Form;
