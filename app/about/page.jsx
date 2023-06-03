import React from 'react';
import Herosection from '../components/Herosection';
import image from "../../public/about.svg"

const About = () => {
    return (
        <div>
            <Herosection title={"OUR STORY"} imgurl={image}/>
        </div>
    );
}

export default About;
