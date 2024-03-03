import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
     

        <footer className="footer footer-center p-10 bg-[#caf0f8] text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover font-medium text-[#2d6a4f]">Terms of use</a>
                <a className="link link-hover font-medium text-[#2d6a4f]">Privacy policy</a>
                <a className="link link-hover font-medium text-[#2d6a4f]">Cookie policy</a>
            </nav>

            {/* show all social icon */}
            <nav>
                <div className="grid grid-flow-col gap-4">
                 
                    <a href="https://www.twitter.com"><FaTwitter className="text-[#34b7f1] text-2xl"></FaTwitter></a>
                    <a href="https://www.youtube.com"><FaYoutube className="text-[#ff0000] text-2xl"></FaYoutube></a>
                    <a href="https://www.facebook.com"><FaFacebook className="text-[#4285f4] text-2xl"></FaFacebook></a>
                </div>
            </nav>
            <aside>
                <p className="font-medium text-[#2d6a4f]">Copyright © 2024 - All right reserved </p>
            </aside>
        </footer>

    );
};

export default Footer;