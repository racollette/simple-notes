import { Link } from "react-router-dom";
import { Note } from "./App";
import { NoteList } from "./components/NoteList";

type HomePageProps = {
  notes: Note[];
};

function Home({ notes }: HomePageProps) {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-row items-center">
        <h1 className="m-8 text-4xl font-black">Notes</h1>
        <Link to="/new">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            + Add Note
          </button>
        </Link>
      </div>
      <NoteList notes={notes} />
    </div>
  );
}

export default Home;
