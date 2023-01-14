import { Link, useNavigate } from "react-router-dom";
import { useNote } from "./NoteLayout";

type NoteProps = {
  onDelete: (id: string) => void;
};

export function Note({ onDelete }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();

  return (
    <>
      <div className="m-4">
        <div className="flex gap-4">
          <Link to="/">
            <button className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
              Back
            </button>
          </Link>
          <Link to={`/${note.id}/edit`}>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Edit
            </button>
          </Link>
          <button
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={() => {
              onDelete(note.id);
              navigate("/");
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="m-4">
        <div className="bg-zinc-700 rounded-xl p-4">
          <div className="font-black text-xl mb-2">{note.title}</div>
          <div>{note.markdown}</div>
        </div>
      </div>
    </>
  );
}
