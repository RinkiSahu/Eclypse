import { ArrowUp } from "lucide-react";
import { navLinks, contactInfo } from "../assets/data";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Footer() {
  return (
    <footer className="mt-100 px-4 md:px-12 flex justify-between items-center mb-20">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-15">
          <img src="/assets/images/Hero_header.png" className="w-18" />
        </h1>
        <nav className="mt-2">
          <div className="flex">
            {navLinks.slice(0, 3).map((link, index) => (
              <span key={index}>
                <a href={link.url} className="hover:underline">
                  {link.name}
                </a>
                {index < 2 && <span className="mx-2 text-[#838385]">/</span>}
              </span>
            ))}
          </div>
          <div className="flex mt-2">
            {navLinks.slice(3).map((link, index) => (
              <span key={index}>
                <a href={link.url} className="hover:underline">
                  {link.name}
                </a>
                {index < 1 && <span className="mx-2 text-[#838385]">/</span>}
              </span>
            ))}
          </div>
        </nav>
      </div>

      <div className="text-left justify-between items-end flex flex-col flex-1">
        <div className="mb-6 mt-5">
          <p className="uppercase labels">{contactInfo.phoneLabel}</p>
          <p className="">{contactInfo.phoneNumber}</p>
        </div>
        <div className="mt-2">
          <p className=" uppercase labels">{contactInfo.emailLabel}</p>
          <p className="">{contactInfo.emailAddress}</p>
        </div>
      </div>
      <div className="text-left">&nbsp;</div>
      <div className="scrollerend flex flex-col justify-between items-end h-[120px] flex-1">
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-white hover:bg-grey-900 cursor-pointer "
        >
          <ArrowUp className="text-black w-4 h-4" />
        </button>
        <div className="bottom-6">© Eclypse 2025</div>
      </div>
    </footer>
  );
}

export default Footer;
