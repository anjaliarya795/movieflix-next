import Image from 'next/image';
import Wave from './wave/Wave';
import Button from './browse _button/Button';


const Herosection = ({title,imgurl}) => {
    return (
        <>
        <section className='relative w-screen bg-gradient-to-r from-pink-300 to-sky-200 lg:p-28 md:px-0 px-5 py-28'>
            <div className='  mx-auto'>
                

                <div className='flex sm:flex-row flex-col-reverse sm:justify-center '>

                    <div className='md:basis-1/2 basis-2/3 self-center md:pl-10   text-center md:text-left '>
                        <p className="text-3xl font-bold mb-8">
                            
                        {title}

                        </p>
                        <p className=' mb-3 text-sm font-light w- w-96 md:w-10/12'>

                        Ready to watch? Enter your email to create or restart your membership.
                        Ready to watch? Enter your email to create or restart your membership.

                        </p>

                        <Button url={""} Button_text={"Browse"} />
                    </div>

                    <div className='md:basis-1/2 basis-2/3 md:block hidden '>
                        <Image src={imgurl} width={500} height={500} className='mx-auto'/>
                    </div>

                </div>

            </div>
            <Wave/>

       </section>
       </>
    );
}

export default Herosection;
