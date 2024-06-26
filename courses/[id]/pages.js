import getsingletask from "@/app/controllers/getsingletask";
import React from "react";

export default async function viewtask({ parms: { id } }) {

    const task = await getsingletask(id)
    return (
        <div className="detail-page">
            <h1>task detail page</h1>
            <hr />
            <div className="task-detail">
                <h2>{task.title}</h2>
                <h2>{task.description}</h2>
            </div>
        </div>
    );
}