import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetails = () => {
  const sty = {
    background: "repeating-linear-gradient(204deg, red, transparent 100px)",
    color: "white",
    width: "115px",
    height: " 51px",
    padding: "5px",
    borderRadius: "111px",
    border: "none",
    cursor: "pointer",
    marginBottom: "23px",
    fontSize: "20px",
    marginTop: "10px",
  };

  const { id } = useParams();
  // here we are reusing custom hooks which will be imported from usefetch.jsx for access of the similar function
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const navigat = useNavigate();
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      // here  after deleting it must go to home page so use useNavigate from react-router-dom
      navigat("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && (
        <div>
          {" "}
          <h2> Pending......</h2>
        </div>
      )}
      {error && (
        <div>
          {" "}
          <h2> {error}</h2>
        </div>
      )}
      {blog && (
        <article>
          <h1 style={{ color: "red" }}> {blog.title}</h1>
          <p style={{ color: "blue" }}> Written by {blog.author}</p>
          <div>
            {" "}
            <p> {blog.body}</p>
          </div>
        </article>
      )}
      <button style={sty} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default BlogDetails;
