import Image from 'next/image';
import React from 'react';
import loader from '../public/loader.svg'

const Loading = () => {
    return (
        <div>
            <Image alt="loading..." src={loader} height={200} width={200} className='mx-auto mt-52'/>
        </div>
    );
}

export default Loading;
