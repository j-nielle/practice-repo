import PostItem, { PostItemProps } from "@/components/post-item";

export default async function PostsList({ notes }: { notes: PostItemProps[] }) {
  return (
    <>
      <p className="font-mono text-xs mt-5">*Only the first 12 characters will be displayed.</p>
      <div className="mt-8 grid grid-cols-4 grid-rows-4 auto-cols-min auto-rows-fr grid-flow-row gap-4 justify-items-center items-center content-center justify-center">
        {notes?.map((note) => (
          <PostItem key={note.id} {...note} />
        )).reverse()}
      </div>
    </>
  );
}
