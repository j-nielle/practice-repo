"use client";

export type PostItemProps = {
  id?: number;
  title: string;
};

export default function PostItem({ id, title }: PostItemProps) {
  return (
    <div className="bg-slate-900 text-white p-5 w-full h-full rounded-sm hover:shadow-xl cursor-pointer">
      <h2 className="text-wrap text-ellipsis break-words">{title}</h2>
    </div>
  );
}