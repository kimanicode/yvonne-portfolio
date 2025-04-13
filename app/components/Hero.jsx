import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex items-center p-6 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Welcome to my world
          </p>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 pb-6">
            Hi, I'm <span className="text-pink-600 ">Yvonne</span> —
            <br />A passionate and curious health Data Scientist
          </h3>
          <p className="text-gray-600 text-lg mb-8"></p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="#"
              className="bg-pink-600 text-black px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition"
            >
              Hire Me
            </Link>
            <Link
              href="#"
              className="border border-gray-300 text-black px-6 py-3 rounded-full font-medium bg-[#8AE1FC] hover:bg-[#8AE1FC]/50  transition"
            >
              Download CV
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/wanjiku.jpg"
              alt="Profile"
              fill
              className="object-cover p-2"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
