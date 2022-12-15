import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Layout from "../components/Layout";

import "../styles/blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch(
        "https://dev.to/api/articles?username=sidmohanty11"
      );
      const data = await response.json();
      setBlogs(data);
    };
    getBlogs();
  }, []);

  return (
    <Layout>
      <div className="blogs__container">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            socialImage={blog.social_image}
            title={blog.title}
            url={blog.canonical_url}
            readingTime={blog.reading_time_minutes}
            description={blog.description}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Blogs;
