import { useFormStatus } from "react-dom";

export default function PostSubmit() {
  const { pending } = useFormStatus();
	console.log(pending)
  return (
    <button
      className="bg-green-700 text-white hover:shadow-md hover:bg-green-800 rounded px-3.5 py-1.5 drop-shadow mt-0"
      type="submit"
    >
      {pending ? "Pending" : "Add Note"}
    </button>
  );
}
