
import getsingletask from "@/app/controllers/getsingletask";
import Editform from "@/components/Editform";
import React from "react";

export default async function EditTask({ params: { id } }) {
    const task = await getsingletask(id);
    return (
        <>
            <Editform task={task} />
        </>
    );
}