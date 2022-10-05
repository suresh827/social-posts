import Post from "../models/Post";
import "./PostInList.css";

interface Props {
  posts: Post[];
}
const PostInList = ({ posts }: Props) => {
  return (
    <div className="PostInList">
      <ul>
        {posts.map((post) => (
          <div className="postcard">
            <p className="title"> {post.title} </p>
            <p className="thought"> {post.thought} </p>
            <hr />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PostInList;
