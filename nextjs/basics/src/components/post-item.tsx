export type PostItemProps = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

export default function PostItem({ id, title, body, userId, tags, reactions }: PostItemProps) {
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>Author: {userId}</p>
      <p>Tags: {tags.join(", ")}</p>
      <p>Reactions: {reactions}</p>
      <hr />
    </>
  );
}