import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [author, setAuthor] = useState("Apj kalam");
  const [isPending, setIsPending] = useState(false);
  const navigat = useNavigate(); // use this navagate in the fetch where it will go to home page when it is clicked or called
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      navigat("/");
    });
    //  console.log(blog)
  };
  return (
    <div className="create">
      <h2> Write your Blog</h2>
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog content:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setbody(e.target.value)}
          ></textarea>
          <label>Author Name:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="Apj kalam">Apj kalam</option>
            <option value="Kuvempu">Kuvempu</option>
            <option value="Da ra Bhendre">Da ra Bhendre</option>
            <option value="others">others</option>
          </select>
          <div className="btn">
            {!isPending && <button>Add Blog</button>}
            {isPending && <button disabled>Added</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
