import PostItem, { PostItemProps } from "@/components/post-item";

type PostsListProps = {
  posts: PostItemProps[]; 
};

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  );
}