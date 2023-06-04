import autoprefixer from 'autoprefixer';
import React from 'react';

const Page = async({params}) => {

    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd00d2dfa55msh39a2b14f689b091p166bc3jsn66fec2a3ca34',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    }; 


    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data)
    const main_data = data[0].details;
    console.log(main_data)

    return (
            <section className="container mx-auto my-36">
                <h2 className="text-3xl font-medium mb-10 font-sans">Netflix/<span className=''>{main_data.type}/</span><span className='text-red-600 font-normal'>{main_data.title}</span></h2>
                <div className="w-auto">
                    <div>
                        <img src={main_data.backgroundImage.url} alt={main_data.title} className='w-6/12 ' />
                    </div>
                    <div className="p-2">
                        <h2 className='text-5xl font-extrabold mt-16 mb-12 '>{main_data.title}</h2>
                        <p className='text-3xl text-gray-500 leading-relaxed tracking-wider text-justify  mb-3'>
                            {main_data.synopsis}
                        </p>

                    </div>
                </div> 
            </section>
    );
}

export default Page;
