interface Comments {
  id: string;
  content: string;
  status: string;
}

interface Props {
  comments: Comments[];
}

export const CommentList = ({ comments }: Props) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status == "approved") {
      content = comment.content;
    }
    if (comment.status == "pending") {
      content = "This comment is awaiting moderation";
    }
    if (comment.status == "rejected") {
      content = "This comment has been rejected";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      <ul>{renderedComments}</ul>
    </div>
  );
};
