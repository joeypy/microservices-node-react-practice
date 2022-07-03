import { useState, useEffect } from "react";
import axios from "axios";
import { CommentCreate } from "./CommentCreate";
import { CommentList } from "./CommentList";

interface Comments {
  id: string;
  content: string;
}
interface PostResponse {
  [key: string]: {
    id: string;
    title: string;
    comments: Comments[];
  };
}

export const PostList = () => {
  const [posts, setPosts] = useState<PostResponse>({});

  const fetchPost = async () => {
    const { data } = await axios.get<PostResponse>(
      "http://localhost:4002/posts"
    );
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => (
    <div
      key={post.id}
      className="card"
      style={{ width: "30%", marginBottom: "20px" }}
    >
      <div className="card-body">
        <h3>{post.title}</h3>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
    </div>
  ));

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
