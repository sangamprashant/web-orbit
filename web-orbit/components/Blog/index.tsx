import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'Online Learning',
      title: 'Unlock the Power of MERN Stack with WebOrbit: A Comprehensive Learning Experience',
      description: 'Explore how WebOrbit’s online classes can help you master the MERN stack...',
      author: 'Holden Caulfield',
      authorRole: 'UI DEVELOPER',
      imgSrc: 'https://dummyimage.com/104x104',
      readMoreLink: '#'
    },
    {
      id: 2,
      category: 'Web Development',
      title: 'Why Choose WebOrbit for Your Website Development Needs',
      description: 'Highlight the reasons why WebOrbit is the go-to choice for businesses...',
      author: 'Alper Kamu',
      authorRole: 'DESIGNER',
      imgSrc: 'https://dummyimage.com/103x103',
      readMoreLink: '#'
    }
    // Add more blog posts here
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          {blogPosts.map(post => (
            <div key={post.id} className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{post.category}</span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{post.title}</h2>
              <p className="leading-relaxed mb-8">{post.description}</p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a href={post.readMoreLink} className="text-indigo-500 inline-flex items-center">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>6
                </span>
              </div>
              <a className="inline-flex items-center">
                <img alt="blog" src={post.imgSrc} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">{post.author}</span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">{post.authorRole}</span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
