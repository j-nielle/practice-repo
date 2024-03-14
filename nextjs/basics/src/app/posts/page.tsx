import type { Metadata } from "next";
import PostsList from "@/components/posts-list";

export const metadata: Metadata = {
  title: "Posts",
  description: "Page for posts.",
};

export default async function PostsPage() {
  const res = await fetch("https://dummyjson.com/posts?limit=3");
  const data = await res.json();
  return (
    <div className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">POSTS</h1>
      <div className="max-w-[750px] mx-auto leading-8">
        <PostsList posts={data.posts} />
      </div>
    </div>
  );
}
