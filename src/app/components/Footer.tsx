import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
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
      </div>
    </footer>
  );
};

export default Footer;
