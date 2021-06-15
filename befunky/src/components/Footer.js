import React from "react";
import data from "../data/footer";
import logo from "../images/logo.svg";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  const [footerlinks, setFooterLinks] = React.useState(data);
  return (
    <>
      <footer className="p-10 sm:grid sm:grid-cols-2 lg:grid-cols-5 lg:w-3/4 lg:mx-auto">
        <div>
          <img src={logo} alt="" className="mr-10 mb-10" />
          <ul className="flex ">
            <li className=" mx-2">
              <FaFacebook />
            </li>
            <li className=" mx-2">
              <FaInstagram />
            </li>
            <li className=" mx-2">
              <FaPinterest />
            </li>
            <li className=" mx-2">
              <FaInstagram />
            </li>
            <li className=" mx-2">
              <FaYoutube />
            </li>
          </ul>
        </div>

        {footerlinks.map((footerlink) => {
          const { id, title, links } = footerlink;
          return (
            <div key={id}>
              <h4 className="font-bold text-xl mb-4">{title}</h4>
              <ul className="mb-5 ">
                {links.map((link) => {
                  return (
                    <li
                      key={link}
                      className="mb-2 text-sm text-gray-500 cursor-pointer hover:text-black"
                    >
                      {link}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </footer>
    </>
  );
};

export default Footer;
