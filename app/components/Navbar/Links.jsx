import Link from 'next/link';
import React from 'react';

const Links = ({link_url,Link_text}) => {
    return (
        <div>
            <Link href={link_url}>
                <p className="text-gray-600 hover:text-black font-semibold cursor-pointer">{Link_text}</p>
            </Link>
        </div>
    );
}

export default Links;