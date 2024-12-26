import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa';

const SocialLinks = () => (
  <div className="flex justify-center mt-12 space-x-5">
   <div className="flex space-x-6">
        <a href="https://twitter.com/plasmoidtoken" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://t.me/plasmoidportal" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={24} className="hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://discord.gg/plasmoid" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={24} className="hover:text-indigo-400 transition-colors" />
        </a>
    </div>
  </div>
);

export default SocialLinks;