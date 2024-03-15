"use server"

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function addNoteAction(formData: FormData) {
  const getNote = {
    title: formData.get("title"),
  };

  const { data: note, error } = await supabase
    .from("notes")
    .insert([getNote])
    .select();

  if (error) {
    console.error(error);
	}
	revalidatePath("/posts");

  return getNote
}