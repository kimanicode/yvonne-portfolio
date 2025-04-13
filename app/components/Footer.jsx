import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold text-white">Yvonne Kabui</h3>
          <p className="text-sm mt-2 text-gray-400">
            Health Data Science Enthusiast · Empowering Healthcare with Data
          </p>
        </div>

        <div className="flex gap-6 text-xl">
          <Link
            href="https://www.linkedin.com/in/wanjiku-kabui-b201b6283/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-[#8AE1FC] transition" />
          </Link>
          <Link href="https://twitter.com/yourhandle" target="_blank">
            <FaTwitter className="hover:text-[#8AE1FC] transition" />
          </Link>
          <Link href="https://github.com/yourgithub" target="_blank">
            <FaGithub className="hover:text-[#8AE1FC] transition" />
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Yvonne Kabui. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
