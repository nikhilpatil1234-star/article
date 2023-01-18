import React from "react";
import "./home.css";
import Bloglist from "./Bloglist";
import useFetch from "./UseFetch";

const Home = () => {
  //made all usestates  as a custom hook in usefetch folder
  //   const [name,setName]=useState('nikhil')
  // now destructure the vakue of date ispending and error from usefetch custom hook
  const {
    data: blogs,
    isPending,
    error,
    setData: setBlogs,
  } = useFetch("http://localhost:8000/blogs"); // here state is imported for usefecth and setData is also imorted for the delete handle event
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  //made useeffect  as a custom hook in usefetch folder for multipurpose usuage
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Pending....</div>}
      {blogs && (
        <Bloglist
          blogs={blogs}
          title={"All blogs"}
          handleDelete={handleDelete}
        />
      )}
      {/* {name}
    <button onClick={()=>setName('rakesh')}> change name efffect</button> */}
      {/* <Bloglist blogs={blogs.filter((blog)=> blog.author==="mario")} title={"Mario blog"}/> */}
    </div>
  );
};

export default Home;
