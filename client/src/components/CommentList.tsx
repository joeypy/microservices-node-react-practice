import { useState, useEffect } from "react";
import axios from "axios";
import { CommentCreate } from "./CommentCreate";

interface CommentResponse {
  id: string;
  content: string;
}

interface Props {
  postId: string;
}

export const CommentList = ({ postId }: Props) => {
  const [comments, setComments] = useState<CommentResponse[]>([]);

  const fetchData = async () => {
    const { data } = await axios.get<CommentResponse[]>(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      <ul>{renderedComments}</ul>
    </div>
  );
};
