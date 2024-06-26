import { Schema, model, models } from "mongoose";


const taskSchema = new Schema(
    {
        title: String,
        description: String
    },
    {
       timestamps: true 
    }
);

const Task =  models.Task || model("Task", taskSchema)
export default Task;