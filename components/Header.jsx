import Link from "next/link";
import { FaTasks } from "react-icons/fa";

export default function Header() {
    return (
        <header className="flex ml-auto justify-between bg-cover bg-cyan-800 px-8 py-2 rounded">
            <Link className="flex justify-center items-center space-x-2" href="/">
                <FaTasks className="text-white text-2xl" />
                <h2 className="  text-white text-lg font-bold">To Do List </h2>
            </Link>
            <Link className="hover:bg-cyan-100 border border-white rounded-lg p-3 bg-white text-center m-2 " href="/add-task">
                <h2>Add Task</h2>
            </Link>
        </header>
    );
}