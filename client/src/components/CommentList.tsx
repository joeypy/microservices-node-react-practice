interface Comments {
  id: string;
  content: string;
}

interface Props {
  comments: Comments[];
}

export const CommentList = ({ comments }: Props) => {
  const renderedComments = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      <ul>{renderedComments}</ul>
    </div>
  );
};
