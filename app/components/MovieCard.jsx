import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MovieCard = (curElem) => {

    const {id, type, title, synopsis} = curElem.jawSummary;

    console.log({id, type, title, synopsis},"in compppppppppppp")

    
    return (
        <>
           <div className="border-2 rounded-xl w-56">
                <div>
                    <img src={curElem.jawSummary.backgroundImage.url} alt={title} className='rounded-t-xl h-36 ' />
                </div>
                <div className="p-2">
                    <h2 className='text-xl font-medium my-2 truncate'>{title}</h2>
                    <p className='text-sm text-gray-500 leading-6 tracking-wider text-justify line-clamp-3 mb-3'>
                        {synopsis}
                    </p>

                    <Link href={`/movie/${id}`}>
                        <button className='border-white rounded-full bg-black text-white px-4 py-2 text-xs'>
                            Read more
                        </button>
                    </Link>
                </div>
           </div> 
        </>
    );
}

export default MovieCard;
