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
      toast.success("Your Todo is Add Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const fecthTodo = async () => {
    try {
      const response = await databses.listDocuments(DATABASE_ID, COLLECTION_ID);
      setTask(response.documents);
    } catch (error) {
      toast.error(error.warring);
    }
  };
  useEffect(() => {
    fecthTodo();
  }, [task]);

  const handleClick = async (documentId) => {
    try {
      const response = await databses.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        documentId
      );
      setTask((prevTasks) =>
        prevTasks.filter((task) => task !== documentId)
      );
      toast.success("Task Delete Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
            {task.map((task) => {
              return (
                <li
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white flex justify-between items-center"
                  key={task.$id}
                >
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>{task.Task}</span>
                  </div>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
                    onClick={() => handleClick(task.$id)}
                  >
                    Delete
                  </button>
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
