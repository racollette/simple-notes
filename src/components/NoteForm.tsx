import { FormEvent, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NoteData } from "../App";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
} & Partial<NoteData>;

export function NoteForm({
  onSubmit,
  title = "",
  markdown = "",
}: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
    });

    navigate("..");
  }

  return (
    <form className="sm:min-w-[40%]" onSubmit={handleSubmit}>
      <div className="mb-6 text-left text-white">
        <label className="block mb-2 text-xl font-medium">Title</label>
        <input
          defaultValue={title}
          ref={titleRef}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title"
          required
        />
      </div>
      <div className="mb-6 text-left text-white">
        <label className="block mb-2 text-xl font-medium">Body</label>
        <textarea
          defaultValue={markdown}
          ref={markdownRef}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your note here"
        ></textarea>
      </div>
      <div className="flex flex-row justify-end gap-4">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
        <Link to="..">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
}
