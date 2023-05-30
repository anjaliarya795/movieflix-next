import Image from 'next/image';
import Link from 'next/link';


const Herosection = () => {
    return (
        <section className='relative w-screen bg-gradient-to-r from-pink-300 to-sky-200 lg:p-28 md:px-0 px-5 py-28'>
            <div className='  mx-auto'>
                

                <div className='flex sm:flex-row flex-col-reverse sm:justify-center '>

                    <div className='md:basis-1/2 basis-2/3 self-center md:pl-10   text-center md:text-left'>
                        <p className="text-lg">
                            bhjgyjg  gfffctyj ggfkftuyf gguygyku
                        </p>
                        <p className=' text-2xl mb-3'>
                            Let's get started
                        </p>


                        <Link href="#"><button type="" className='text-white bg-black md:bg-transparent rounded-lg sm:hover:bg-white duration-200 border px-8 text-l py-3 hover:text-black cursor-pointer animate-bounce mt-5'>Browse</button></Link>
                    </div>

                    <div className='md:basis-1/2 basis-2/3 md:block hidden'>
                        <Image src="../../public/hero.svg" width={50} height={50} />
                    </div>

                </div>

            </div>
            
       </section>
    );
}

export default Herosection;
