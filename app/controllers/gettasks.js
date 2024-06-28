export default async function gettasks() {
    try {

        const response = await fetch("http://localhost:3000/api/task", {
            //it will fetch  from the database
            cache: "no-store"
        });
        const tasks = await response.json();
        return tasks.data;
    } catch (error) {
        console.log(error);
    }
}