import React from "react";
import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title, handleDelete }) => {
  // const blogs=props.blogs
  // const title=props.title
  return (
    <div className="blog-list">
      <h2> {title}</h2>
      {blogs.map((blog) => (
        <div className="blog_preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
          {/* here each id is linked and it goes to the details  from app.js route path */}
          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
