import react from "react";
import DeleteBtn from "@/components/DeleteBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import gettasks from "@/app/controllers/gettasks";


export default async function Tasklist() {

    const task = await gettasks();
    return (
        <div>
            {
                task?.map((task) => {
                    return (

                        <div className="flex mb-2 gap-2 border border-cyan-900 p-5  bg-amber-50" key={task.id}>
                            <div className="">
                                <h2 className='font-bold'> {task.title}</h2>
                                <p className="description"> {task.description} </p>

                            </div>
                            <div className="flex ml-auto justify-end gap-2">
                                <DeleteBtn id={task._id} className='my-auto' title="Delete" />
                                <Link className="text-green-800 my-auto" href={`/edit-task/${task._id}`} title="edit">
                                    <HiPencilAlt size={32} />
                                </Link>
                                {/* <Link className="text-blue-600 my-auto" href={`/Tasks/${task._id}`} title="view">
                                    <AiOutlineEye size={32} />
                                </Link> */}

                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}