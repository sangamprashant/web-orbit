import { blogBanner } from '@/assets/assets';
import { FaRegEye } from "react-icons/fa";
import { PiLineVerticalBold } from "react-icons/pi";
import PageBanner from '../Reuse/PageBanner';
import PageHeader from '../Reuse/PageHeader';
import PageLayout from '../Reuse/PageLayout';
import BolgSearch from './BolgSearch';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'Online Learning',
      title: 'Unlock the Power of MERN Stack with WebOrbit: A Comprehensive Learning Experience',
      description: 'Explore how WebOrbit’s online classes can help you master the MERN stack...',
      author: 'Holden Caulfield',
      authorRole: 'UI Developer',
      imgSrc: 'https://dummyimage.com/104x104',
      readMoreLink: '#',
    },
    {
      id: 1,
      category: 'Online Learning',
      title: 'Unlock the Power of MERN Stack with WebOrbit: A Comprehensive Learning Experience',
      description: 'Explore how WebOrbit’s online classes can help you master the MERN stack...',
      author: 'Holden Caulfield',
      authorRole: 'UI Developer',
      imgSrc: 'https://dummyimage.com/104x104',
      readMoreLink: '#',
    },
    {
      id: 1,
      category: 'Online Learning',
      title: 'Unlock the Power of MERN Stack with WebOrbit: A Comprehensive Learning Experience',
      description: 'Explore how WebOrbit’s online classes can help you master the MERN stack...',
      author: 'Holden Caulfield',
      authorRole: 'UI Developer',
      imgSrc: 'https://dummyimage.com/104x104',
      readMoreLink: '#',
    },
  ];

  const categories = [
    { name: 'Web Development' },
    { name: 'Web Design' },
    { name: 'Online Learning' },
    { name: 'Online Learning' },
    { name: 'Online Learning' },
    { name: 'Online Learning' },
    { name: 'Online Learning' },
  ];

  const topPost = [
    { title: 'Why Choose WebOrbit for Your Website Development Needs', description: 'Highlight the reasons why WebOrbit is the go-to choice for businesses...' },
    { title: 'Why Choose WebOrbit for Your Website Development Needs', description: 'Highlight the reasons why WebOrbit is the go-to choice for businesses...' },
    { title: 'Why Choose WebOrbit for Your Website Development Needs', description: 'Highlight the reasons why WebOrbit is the go-to choice for businesses...' },
    { title: 'Why Choose WebOrbit for Your Website Development Needs', description: 'Highlight the reasons why WebOrbit is the go-to choice for businesses...' },
  ];

  return (
    <>
      <PageHeader title="Blogs" />
      <PageBanner
        title="Explore Our"
        title2="Latest Blogs"
        description="Stay updated with the latest insights, tutorials, and articles from industry experts. Discover useful tips and trends in web development, online learning, and much more."
        image={blogBanner}
      />
      <PageLayout>
        <div className="flex flex-col-reverse md:flex-row gap-12">
          {/* Sidebar */}
          <div className="md:w-1/3">
            {/* Search */}
            <div className="bg-indigo-50 rounded p-4 mb-4 shadow-lg border-indigo-950 border">
              <BolgSearch />
            </div>

            {/* Categories */}
            <div className="bg-indigo-50 p-6 rounded shadow-lg border-indigo-950 border">
              <h2 className="text-xl font-bold mb-4 text-indigo-600">Categories</h2>
              <ul className="space-y-2 blog-categories">
                {categories.map((link, index) => (
                  <li key={index} className="border-b last:border-none border-indigo-200">
                    <a
                      href="#"
                      className="block text-gray-700 p-3 rounded hover:bg-indigo-100 transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Posts */}
            <div className="bg-indigo-50 rounded shadow-lg mt-6 p-6 border-indigo-950 border">
              <h2 className="text-xl font-bold mb-4 text-indigo-600">Top Posts</h2>
              <div className="space-y-4">
                {topPost.map((post, index) => (
                  <div key={index} className="flex gap-4 hover:bg-indigo-100 p-3 rounded transition">
                    <h1 className="text-2xl font-semibold text-gray-600">{index + 1}</h1>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{post.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1">{post.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Blog Section */}
          <div className="md:w-2/3">
            <div className="flex flex-wrap">
              {blogPosts.map((post) => (
                <div key={post.id} className="lg:w-1/2 md:w-full p-1">
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md">
                    <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-600 text-xs font-medium tracking-widest">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{post.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <a href={post.readMoreLink} className="text-indigo-500 hover:underline">Read More</a>
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="flex items-center gap-1">
                          <FaRegEye /> 1.2K
                        </span>
                        <PiLineVerticalBold />
                        <span className="flex items-center gap-1">
                          <FaRegEye /> 1.2K
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            <div className="hidden">ref to load more content and attach in the exixting data...</div>

            {/* Page initialization completed */}
            <div className="mt-6 p-4 bg-gray-100 text-center rounded-lg">
              <h2 className="text-2xl font-bold text-gray-700">Page Initialization Complete!</h2>
              <p className="text-gray-600">Now showing blog posts.</p>
            </div>

          </div>


        </div>
      </PageLayout>
    </>
  );
};

export default BlogSection;
