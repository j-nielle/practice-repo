import PostForm from '@/components/post-form';
import PostsList from '@/components/posts-list';
import { PostItemProps } from '@/components/post-item';
import { supabase } from '@/lib/supabase';

export default async function PostsPage() {
  const { data: notes, error } = await supabase.from("notes").select("*");
  return (
    <div className="text-center pt-24 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-9">POSTS</h1>
      <div className="max-w-[750px] mx-auto leading-8">
        <PostForm /> {/* this should be a client component */}
        <PostsList notes={notes as PostItemProps[]} />
      </div>
    </div>
  );
}