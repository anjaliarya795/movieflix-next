import Link from 'next/link';
import Links from './Links';

const Navbar = () => {
  return (
    <div className="shadow-lg shadow-black-500/50">
      <nav className="flex items-center justify-between p-4 bg-white text-black container mx-auto py-5 ">
          <Link href="/" className="flex items-center">
            <h1 className="text-3xl font-sans font-medium text-red-900">Movieflix</h1>
          </Link>
        <div className="flex space-x-12">

          <Links link_url={"/"} Link_text={"Home"} />
          <Links link_url={"../about"} Link_text={"About"} />
          <Links link_url={"../movie"} Link_text={"Movie"} />
          <Links link_url={"../contact"} Link_text={"Contact"} />
        
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
