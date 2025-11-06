import Image from "next/image";
import FullLogo from "@/assets/full_logo.png";

export const Header = () => {
  return (
    <header className="sticky z-20 top-0 backdrop-blur-sm bg-white/80">
      <div className="py-5 md:py-6">
        {/* Centered Container with Max Width */}
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="flex items-center justify-between">
            <Image src={FullLogo} alt="Saas Logo" height={100} width={100} className="h-10 w-auto md:h-12" />
            
            <nav className="hidden text-lg md:flex text-black/60 gap-8 lg:gap-10 items-center">
              <a href="#" className="hover:text-black transition-colors">Events</a>
              <a href="#" className="hover:text-black transition-colors">About</a>
              <a href="#" className="hover:text-black transition-colors">Help</a>
              
              <button className="bg-black text-white px-6 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-black/90 transition-colors">
                Login
              </button>
            </nav>

          </div>
        </div>

      </div>

    </header>
  );
};


