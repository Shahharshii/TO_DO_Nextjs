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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task title"
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
            />
            <input
                type="text"
                placeholder="Enter task description"
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
            />
            <button type="submit">Update Task</button>
        </form>
    );
}