"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Editform({ task }) {
    const router = useRouter();
    const [newTitle, setNewTitle] = useState(task.title);
    const [newDescription, setNewDescription] = useState(task.description);
    async function handleSubmit(e) {
        e.preventDefault();
        const newTask = {
            newTitle,
            newDescription,
        };
        const response = await fetch(
            `http://localhost:3000/api/task/${task._id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTask),
            }
        );
        if (response.status == 201) {
            router.push("/");
            router.refresh();
        }
        console.log(newTask);
    }
    return (
        <form onSubmit={handleSubmit} className="rounded-xl bg-amber-100 p-3 flex flex-col gap-4 items-center shadow">

            <input
                type="text"
                placeholder="Enter task title"
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                className="w-full h-[40px] rounded-xl p-2"
            />
            <input
                type="text"
                placeholder="Enter task description"
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                className="w-full h-[100px] rounded-xl p-2"
            />
            <button type="submit" className="bg-cyan-900 p-4 rounded-xl text-white hover:text-black hover:bg-blue-300 duration-500 font-semibold">Update Task</button>

        </form>
    );
}