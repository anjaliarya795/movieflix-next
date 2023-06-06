import React from 'react';
import ContactCard from '../components/contact/ContactCard';
import Form from '../components/contact/Form';

const Contact = () => {
    return (
        <div className='mx-auto px-20'>
            <div className='flex flex-direction-row gap-x-36 mt-14 mx-auto'>
                <ContactCard title={"Email"} text1={"Monday to Friday Expected"} text2={"Response time : 72 hours"} text_link={"Send email >>"} url={"https://img.icons8.com/material/48/981010/filled-message--v1.png"} alt={"Mail us"}/>
                <ContactCard title={"Live chat"} text1={"Weekdays : 9 AM - 6 PM"} text2={"Weekends : 9 AM - 5 PM"} text_link={"Chat now> >"} url={"https://img.icons8.com/material/48/981010/bbm-messenger.png"} alt={"Chat now"}/>
                <ContactCard title={"Community Forum"} text1={"Monday to Friday expected"} text2={"response time : 72 hours"} text_link={"Ask community >>"} url={"https://img.icons8.com/material/48/981010/weixing.png"} alt={"Join us"}/>
            </div>

            <div className="mx-auto flex flex-direction-row  w-full my-20" >
                <div className="w-4/12 ">

                </div>
                <div className="w-4/12 ">
                    <p className="text-3xl font-bold mb-8 mx-auto">We would love to hear<span className='text-red-700'> from you.</span></p>
                    <Form/>
                </div>
                <div className="w-4/12 ">

                </div>
            </div>
        </div>
        
    );
}

export default Contact;
