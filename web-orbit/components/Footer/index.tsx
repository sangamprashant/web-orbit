import { NAV_LOGO_PNG } from '@/assets/images';
import Image from 'next/image';
import './footer.css';

const Footer = () => {
  const categories = [
    { title: 'Digital Marketing', url: '#' },
    { title: 'Web Development', url: '#' },
    { title: 'SEO Optimization', url: '#' },
    { title: 'Branding Solutions', url: '#' }
  ];

  const socialIcons = [
    {
      name: 'Facebook',
      svg: (
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      )
    },
    {
      name: 'Twitter',
      svg: (
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      )
    },
    {
      name: 'Instagram',
      svg: (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      )
    }
  ];

  return (
    <>
      <footer className="text-blue-950">
        <div className="container px-5 pt-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <Image src={NAV_LOGO_PNG} alt="WebOrbit Logo" height={60} />
            </a>
            <p className="mt-2 text-sm text-gray-400">
              WebOrbit is your go-to partner for digital transformation. Our dedicated team offers a full range of services to help your business thrive in today’s online landscape. From web development to branding and SEO, we ensure your business reaches its full potential.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {Array(3).fill(null).map((_, index) => (
              <div key={index} className="lg:w-2/6 md:w-1/2 w-full px-4">
                <h1 className="title-font font-bold text-indigo-700 tracking-widest text-lg mb-3">SERVICES</h1>
                <nav className="list-none mb-10">
                  {categories.map((category, idx) => (
                    <li key={idx}>
                      <a href={category.url} className="text-indigo-300 hover:text-blue-400">{category.title}</a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
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
            <a href="https://github.com/sangamprashant" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@Purnesh Kumar Soni</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {socialIcons.map((icon, idx) => (
              <a key={idx} className="text-gray-400 hover:text-blue-400 ml-3" aria-label={icon.name}>
                {icon.svg}
              </a>
            ))}
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
