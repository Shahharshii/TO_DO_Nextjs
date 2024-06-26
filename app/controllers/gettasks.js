export default async function gettasks() {
    try {

        const response = await fetch("http://localhost:3000/api/task", {
            //it will fetch  from the database
            cache: "no-store"
        });
        const task = await response.json();
        return task.data;
    } catch (error) {
        console.log(error)
    }
}