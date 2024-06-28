import getsingletask from "@/app/controllers/getsingletask";
import React from "react";

export default async function viewtask({ params: { id } }) {

    const task = await getsingletask(id)
    return (
        <div >
            <h1>task detail page</h1>
            <hr />
            <div >
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </div>
        </div>
    );
}