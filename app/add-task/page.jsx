"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();
    async function handleSubmit(e) {
        e.preventDefault();
        const newTask = {
            title,
            description,
        };
        const response = await fetch("http://localhost:3000/api/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        });
        if (response.status == 201) {
            router.push("/");
        }
        console.log(newTask);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <input
                type="text"
                placeholder="Enter task description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}