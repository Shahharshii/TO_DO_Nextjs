import react from "react";
import DeleteBtn from "@/components/DeleteBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import gettasks from "@/app/controllers/gettasks";


export default async function Tasklist() {

    const task = await gettasks();
    return (
        <div className="task-list">
            {
                task?.map((task) => {
                    return (

                        <div className="task" key={task.id}>
                            <div className="task-details">
                                <h2 className="task-title"> {task.title}</h2>
                                <p className="description"> {task.description} </p>

                            </div>
                            <div className="task-actions">
                                <DeleteBtn id={task._id} />
                                <Link className="edit" href={`/edit-task/${task._id}`} title="edit">
                                    <HiPencilAlt size={32} />
                                </Link>
                                <Link href={`/task/${task._id}`} title="view">
                                    <AiOutlineEye size={32} />
                                </Link>

                            </div>

                        </div>






                    )
                })
            }
        </div>
    )
}