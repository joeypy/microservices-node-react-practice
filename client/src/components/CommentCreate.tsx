import { useState, FormEvent } from "react";
import axios from "axios";

interface Props {
  postId: string;
}

export const CommentCreate = ({ postId }: Props) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">New Comment</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-group"
            style={{ marginBottom: "10px" }}
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
