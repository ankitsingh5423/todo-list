import React, { useState, useEffect } from "react";
import { databses } from "./config";
import { toast } from "react-toastify";

const DATABASE_ID = "67b4dd9c0006b164498a";
const COLLECTION_ID = "67b4ddb9000b3934d3e3";

const Todos = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const addTodo = async () => {
    try {
      const response = await databses.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        "unique()",
        { Task: input }
      );
      setInput("");
      // console.log(response);
      toast.success("Your Todo is Add Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  // console.log(addTodo())
  const fecthTodo = async () => {
    try {
      const response = await databses.listDocuments(DATABASE_ID, COLLECTION_ID);
      setTask(response.documents);
      console.log(response);
    } catch (error) {
      toast.error(error.warring);
    }
  };
  useEffect(() => {
    fecthTodo();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Todo List
          </h1>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Enter a task..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
          <ul className="mt-4 space-y-2">
            {task.map((e) => {
              console.log(e);
              return (
                <li key={e.$id} className="mb-2">
                  {e.Task}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todos;
