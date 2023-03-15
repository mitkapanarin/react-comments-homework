import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Navigation from "./components/Navigation";
import Comment from "./components/Comment";
import Comments from "./components/Comments";
import Posts from "./components/Posts";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/comments" element={<Comments/>}/>
        <Route path="/comment/:commentId" element={<Comment/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="user/:userId" element={<UserDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;

