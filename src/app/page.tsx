"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [add, setAdd] = useState("");

  const addUser = () => {
    try {
      const info = {
        name: add,
        email: add,
      };
      console.log("this is spartaa", info);

      const res = axios.post("http://localhost:8080/createUser", info);
      console.log("object", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setAdd(e.target.value)}
        className="border-2"
        type="text"
      />
      <button onClick={addUser} className="border-2 bg-red-300">
        Submit
      </button>
    </div>
  );
}
