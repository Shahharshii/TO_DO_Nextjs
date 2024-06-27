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
        <form onSubmit={handleSubmit} className="rounded-xl bg-amber-100 p-3 flex flex-col gap-4 items-center shadow">
            <input
                type="text"
                placeholder="Enter task title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="w-full h-[40px] rounded-xl p-2"
            />
            <input
                type="text"
                placeholder="Enter task description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="w-full h-[100px] rounded-xl p-2"
            />
            <button type="submit" className="bg-cyan-900 p-4 rounded-xl text-white hover:text-black hover:bg-blue-300 duration-500 font-semibold">Add Task</button>
        </form>
    );
}