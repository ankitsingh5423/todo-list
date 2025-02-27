import React, { useState, useEffect } from "react";
import { databases } from "./config";
import { toast } from "react-toastify";

const DATABASE_ID = "67b4dd9c0006b164498a";
const COLLECTION_ID = "67b4ddb9000b3934d3e3";

const Todos = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const addTodo = async () => {
    try {
      await databases.createDocument(DATABASE_ID, COLLECTION_ID, "unique()", {
        Task: input,
      });
      setInput("");
      fecthTodo();
      toast.success("Your Todo is Add Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const fecthTodo = async () => {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
      setTask(response.documents);
    } catch (error) {
      toast.error(error.warring);
    }
  };

  useEffect(() => {
    fecthTodo();
  }, []);

  const handleClick = async (documentId) => {
    try {
      const response = await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        documentId
      );
      fecthTodo();
      toast.success("Task Delete Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCheck = (event, taskId) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedTasks((prev) => [...prev, taskId]);
    } else {
      const filtered = selectedTasks.filter((task) => task != taskId);
      setSelectedTasks(filtered);
    }
  };

  const handleDeleteSelectedTask = async () => {
    if (selectedTasks.length >= 1) {
      try {
        await Promise.all(
          selectedTasks.map(
            async (taskId) =>
              await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, taskId)
          )
        );

        setSelectedTasks([]);
        fecthTodo();
        toast.success("Todo deleted successfully");
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Please select the task");
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
                    <input
                      type="checkbox"
                      onChange={(event) => handleCheck(event, task.$id)}
                      className="w-5 h-5"
                    />
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
          <button
            className="bg-red-500 text-white px-4 py-1 mt-3 rounded-lg hover:bg-red-600 inline-block mx-auto"
            onClick={handleDeleteSelectedTask}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Todos;
