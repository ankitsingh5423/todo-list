import React, { useState } from "react";
import { databses } from "./config";

const DATABASE_ID = "67b4dd9c0006b164498a";
const COLLECTION_ID = "67b4ddb9000b3934d3e3";

const Todos = () => {
  const [input, setInput] = useState("");

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
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add
            </button>
          </div>
          <ul className="mt-4 space-y-2"></ul>
        </div>
      </div>
    </>
  );
};

export default Todos;
