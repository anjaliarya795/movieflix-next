import Link from 'next/link';
import React from 'react';
import MovieCard from '../components/MovieCard';

const Movie = async() => {

    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd00d2dfa55msh39a2b14f689b091p166bc3jsn66fec2a3ca34',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    }; 


    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles
    // console.log(data)

    // console.log(main_data)

    
    return (

            <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 container mx-auto px-56">
                {
                    main_data.map((curElem) => (
                        <MovieCard key={curElem.id} {...curElem} />
                    ))
                }
            </section>
            
    );
}

export default Movie;
