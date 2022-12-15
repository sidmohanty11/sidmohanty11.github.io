import React from "react";

const BlogCard = ({ title, url, socialImage, readingTime, description }) => {
  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
        margin: "10px",
      }}
      className="blogs__card"
    >
      <img src={socialImage} width={"100%"} alt={title} />
      <a
        style={{
          color: "black",
          textDecoration: "none",
        }}
        href={url}
        target="_blank"
      >
        <h3>{title}</h3>
        <p
          style={{
            fontStyle: "italic",
          }}
        >
          {description}
        </p>
        <span>{readingTime} mins read</span>
      </a>
    </div>
  );
};

export default BlogCard;
