import React from "react";
import { motion } from "framer-motion";
import Contact from "../Components/Contact";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when About page loads
  }, []);
  const blogPosts = [
    {
      id: 1,
      title: "Digital Marketing (SEO)",
      excerpt: "Reach your audience with personalized campaigns, rank higher on search engines and drive organic traffic.",
      image: "/images/pexels-photo-6476193.webp",
      link: "/digital-marketing",
    },
    {
      id: 2,
      title: "Web Development",
      excerpt: "Transform your online presence with modern, fast, and SEO-optimized websites.",
      image: "/images/website-development-banner_33099-1687.avif",
      link: "/web-development",
    },
    {
      id: 3,
      title: "App Development",
      excerpt: "We create high-performing, user-friendly, and scalable mobile applications tailored to your needs.",
      image: "/images/app-development-banner_33099-1720.jpg",
      link: "/app-development",
    },
    {
      id: 4,
      title: "UI/UX Design",
      excerpt: "Enhance user experience with intuitive and visually appealing designs.",
      image: "/src/assets/Graphics Design.jpg",
    },
    {
      id: 5,
      title: "Cybersecurity",
      excerpt: "Protect your business from online threats with top-notch security solutions.",
      image: "/src/assets/WhoWe.png",
    },
    {
      id: 6,
      title: "E-commerce Development",
      excerpt: "Build a powerful e-commerce platform and grow your online business.",
      image: "/src/assets/Ecommerce.jpg",
    },
    {
      id: 7,
      title: "Cloud Computing",
      excerpt: "Optimize business operations with scalable cloud solutions.",
      image: "/src/assets/Cloud.jpg",
    },
    {
      id: 8,
      title: "Artificial Intelligence",
      excerpt: "Transform business processes with AI-powered automation.",
      image: "/src/assets/WhoAreWe.jpg",
    },
    {
      id: 9,
      title: "Content Marketing",
      excerpt: "Engage your audience with high-quality, value-driven content.",
      image: "/src/assets/Web.png",
    },
    {
      id: 10,
      title: "Social Media Marketing",
      excerpt: "Boost your brand presence on social media platforms.",
      image: "/src/assets/SocialMediaMarket.jpg",
    },
  ];

  return (

    <div>  

   
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      {/* Title with Animation */}
      <motion.h1 
        className="text-center text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text mt-10"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Our Blog
      </motion.h1>

      {/* Hero Section */}
      <div
        className="mt-10 relative h-[500px] flex items-center justify-center bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: "url(/images/customer-support-concepts_662093-1854.avif)" }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
        <motion.div 
          className="relative text-center bg-transparent px-10 py-8  max-w-3xl"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-200">
            Deliver <span className="bg-gradient-to-r from-blue-500 to-blue-200 text-transparent bg-clip-text">High Quality</span> business solutions!
          </h2>
        </motion.div>
      </div>

      {/* Blog Section */}
      <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
            <div className="p-6 flex flex-col items-center">
              <h2 className="text-xl font-semibold text-gray-300 text-center">{post.title}</h2>
              <p className="text-gray-400 mt-2 text-center">{post.excerpt}</p>

              {/* Button with Hover Effect */}
              
            </div>
          </motion.div>
        ))}
      </div>
    </div>
<Contact/>
    </div>
  );
};

export default Blog;
