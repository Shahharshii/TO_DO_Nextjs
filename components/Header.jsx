import Link from "next/link";
export default function Header() {
    return (
        <header>
            <Link className="logo" href="/">
                <h2>To-Do </h2>
            </Link>
            <Link href="/add-task">
                <h2>Add Task</h2>
            </Link>
        </header>
    );
}