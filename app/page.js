import React from 'react';
import Herosection from './components/Herosection';
import image from "../public/hero.svg";

const Page = () => {
  return (
    <div>
      <Herosection imgurl={image} title={"WATCH UNLIMITED MOVIES "} />
    </div>
  );
}

export default Page;
