import React from 'react';
import ContactCard from '../components/contact/ContactCard';
import Form from '../components/contact/Form';

const Contact = () => {
    return (
        <>
            <div className='flex flex-direction-row gap-x-36 mt-20 mx-auto'>
                <ContactCard title={"Email"} text1={"gfygygjygj jyyutviuyiu"} text2={"gfygygjygj jyyutviuyiu"} text_link={"Ask community>>"}/>
                <ContactCard title={"Email"} text1={"gfygygjygj jyyutviuyiu"} text2={"gfygygjygj jyyutviuyiu"} text_link={"Ask community>>"}/>
                <ContactCard title={"Email"} text1={"gfygygjygj jyyutviuyiu"} text2={"gfygygjygj jyyutviuyiu"} text_link={"Ask community>>"}/>
            </div>

            <div className="w-6/12 mx-auto" >
                    <Form/>
            </div>
        </>
        
    );
}

export default Contact;
