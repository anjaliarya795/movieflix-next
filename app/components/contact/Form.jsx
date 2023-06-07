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
    const [status,setStatus] =useState(null);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser(prevUser => ({ ...prevUser, [name]: value }));

    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response =  await fetch('/api/contact',{
                method:'POST',
                headers:{"Content_Type":"application/json"},
                body: JSON.stringify({
                    name:user.name,
                    email:user.email,
                    contact:user.contact,
                    message:user.message
                })
            })

            if (response.status === 200) {
                setUser({
                    name:"",
                    email:"",
                    contact:"",
                    message:""
                })
                setStatus("success");

            }
            else {
                setStatus("error");
            }

        }
        catch(e){
            console.log(e)
        }
    }

    


    return (
        
            <div className=" border-2 p-10 rounded shadow-lg shadow-gray-700 ">
                <form action="" method="post" className='pb-5' onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name">Enter your Name:</label><br />
                        <input type="text" name="name" id="name" className=' rounded  py-3 w-full border-2 ps-2' value={user.name} onChange={handleChange}/>
                    </div>                    
                    <div className="mb-4">
                        <label htmlFor="email">Enter your Email:</label><br />
                        <input type="email" name="email" id="email" className=' rounded  py-3 w-full border-2 ps-2' value={user.email} onChange={handleChange}/>
                    </div>                    
                    <div className="mb-4">
                        <label htmlFor="contact">Enter your Contact:</label><br />
                        <input type="number" name="contact" id="contact" className=' rounded  py-3 w-full border-2 ps-2' value={user.contact} onChange={handleChange}/>
                    </div>                    
                    <div className="mb-4 ">
                        <label htmlFor="message">Write your message:</label><br />
                        <textarea name="message" id="message" cols="" rows="10" className=' border-2 ps-2 w-full rounded' value={user.message} onChange={handleChange}></textarea>
                    </div>

                    {status === 'success' && <p className='text-3xl text-green-900'>Thankyou for your message!</p>}
                    {status === 'error' && <p className='text-3xl text-red-900'>There was an error submitting your message, try again!</p>}

                    <button type="submit" className='bg-black p-2 rounded text-white float-right '>Submit</button>
                </form>
            </div>
    );
}

export default Form;
