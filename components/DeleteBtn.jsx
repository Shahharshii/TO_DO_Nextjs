"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";
export default function DeleteBtn({ id }) {
    const router = useRouter();

    async function handleDeleteTask() {
        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            await fetch(`http://localhost:3000/api/task?id=${id}`, {
                method: "DELETE",
            });
            router.refresh();
        }
    }
    return (
        <button onClick={handleDeleteTask}>
            <MdOutlineDelete size={32} />
        </button>
    );
}