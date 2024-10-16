import Image from 'next/image';
import './footer.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { NAV_LOGO_PNG } from '@/assets/assets';

const Footer = () => {
  const categories = [
    { title: 'Privacy Policy', url: '/privacy-policy' },
    { title: 'Terms of Service', url: '/terms-of-service' },
    { title: 'Help Center', url: '/help-center' },
    { title: 'Careers', url: '/careers' }
  ];

  const otherLinks = [
    { title: 'Partnerships', url: '/partnerships' },
    { title: 'Affiliate Program', url: '/affiliate-program' },
    { title: 'Pricing Plans', url: '/pricing' },
    { title: 'Customer Stories', url: '/customer-stories' }
  ];

  const resources = [
    { title: 'Blog', url: '/blog' },
    { title: 'Documentation', url: '/docs' },
    { title: 'API Reference', url: '/api-reference' },
    { title: 'Community Forum', url: '/forum' }
  ];

  const socialIcons = [
    { name: 'Facebook', icon: <FaFacebookF />, url: 'https://facebook.com/weborbit' },
    { name: 'Twitter', icon: <FaXTwitter />, url: 'https://twitter.com/weborbit' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/weborbit' }
  ];

  return (
    <>
      <footer className="text-blue-950">
        <div className="container px-5 pt-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <Image src={NAV_LOGO_PNG} alt="WebOrbit Logo" height={60} width={200} />
            </a>
            <p className="mt-2 text-sm text-indigo-700">
              WebOrbit is your go-to partner for digital transformation. Our dedicated team offers a full range of services to help your business thrive in today’s online landscape. From web development to branding and SEO, we ensure your business reaches its full potential.
            </p>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <FooterSection title="LEGAL" links={categories} />
            <FooterSection title="SERVICES" links={otherLinks} />
            <FooterSection title="RESOURCES" links={resources} />
          </div>
        </div>
      </footer>

      {/* Footer Background Design */}
      <div className="relative overflow-x-clip">
        <div className="new_footer_top">
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-blue-950">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2024 WebOrbit —
            <a href="https://github.com/sangamprashant" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@Prashant Srivastav</a>
            <a href="https://github.com/purneshks" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@Purnesh Kumar Soni</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {socialIcons.map((icon, idx) => (
              <SocialIcon key={idx} url={icon.url} icon={icon.icon} label={icon.name} />
            ))}
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;


// components/SocialIcon.tsx
interface SocialIconProps {
  icon: React.ReactNode;
  url: string;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, url, label }) => {
  return (
    <a href={url} className="text-gray-400 hover:text-blue-400 ml-3" aria-label={label}>
      {icon}
    </a>
  );
};


// components/FooterSection.tsx
interface FooterSectionProps {
  title: string;
  links: { title: string, url: string }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div className="lg:w-2/6 md:w-1/2 w-full px-4">
      <h1 className="title-font font-bold text-indigo-900 tracking-widest text-lg mb-3">{title}</h1>
      <nav className="list-none mb-10">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.url} className="text-indigo-800 hover:text-blue-700">{link.title}</a>
          </li>
        ))}
      </nav>
    </div>
  );
};

