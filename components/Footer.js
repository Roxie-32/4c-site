import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="text-black flex flex-col items-center text-center py-5 bg-white">
      <div className="flex items-center pb-3">
        <div className="flex gap-10">
          <a href="https://github.com/FrancescoXX/4c-site">
            <FaGithub />
          </a>
          <a href="https://discord.com/invite/TcmA2kbJeA">
            <FaDiscord />
          </a>
          <a href="https://twitter.com/4ccommunityhq">
            <FaTwitter />
          </a>
        </div>
      </div>
      <p>4C | Developed by 4C Community &#169; 2022</p>
    </footer>
  );
};
export default Footer;
