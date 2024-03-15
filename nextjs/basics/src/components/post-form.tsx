"use client";

import { addNoteAction } from "@/app/actions";
import PostSubmit from "./post-submit";
import { useRef } from "react";

export default function PostForm() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className="rounded shadow-md outline outline-1 outline-slate-200 flex sm:flex-row md:flex-col justify-around space-y-4 space-x-14 md:mx-40 mx-0 py-3.5">
      <form className="sm:space-x-4" ref={ref} action={async (formData: FormData) => {
          ref.current?.reset(); // reset the form
          await addNoteAction(formData);
        }}>
        <input className="focus:outline-none w-max sm:w-fit sm:text-left md:text-center"
          type="text"
          name="title"
          id="title"
          placeholder="Add new post"
          required
        />
        <PostSubmit />
      </form>
    </div>
  );
}
