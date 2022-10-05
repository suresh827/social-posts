import { useState } from "react";
import Post from "../models/Post";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, addPost] = useState<Post[]>([
    {
      title: "Mom",
      thought: "she is cool",
    },
    {
      title: "Dad",
      thought: "He is hard working",
    },
  ]);
  return (
    <div className="SocialPosts">
      <PostInList posts={posts} />
    </div>
  );
};

export default SocialPosts;
