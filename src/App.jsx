import React, { useState, useEffect } from "react";
import "./App.css";
import Posts from "./Components/Posts/Posts";
import SearchBox from "./Components/SearchBox/SearchBox";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  const fetchPosts = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log("something went wrong", error);
    } finally {
      console.log("fetch implemented")
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>Posts - Api</h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Posts posts={filteredPosts} />
    </div>
  );
};

export default App;
