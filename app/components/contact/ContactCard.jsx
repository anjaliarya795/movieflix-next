
const ContactCard = ({url,alt,title,text1,text2,text_link}) => {
    return (
        <div className='border-2 text-center w-4/12 p-10'>

            <img width="48" height="48" src={url} alt={alt} className="mx-auto mb-3"/>
            
            <p className="font-medium text-4xl mb-5 ">{title}</p>
            
            <p className="text-gray-500">{text1}</p>
            <p className="text-gray-500 mb-5">{text2}</p>

            <p className="text-gray-400">{text_link}</p>
        </div>
    );
}

export default ContactCard;
