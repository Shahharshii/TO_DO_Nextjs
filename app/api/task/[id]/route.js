import mongoDBConnect from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server"


//get single task by id
export async function GET(request, { params: { id } }) {
    try {

        //connect to the db
        await mongoDBConnect()
        //get the data using model
        const task = await Task.findOne({ _id: id });
        return NextResponse.json({
            message: "ok",
            data: task
        },
            {
                status: 200
            });
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to fetch task",
                error
            }, {
            status: 500
        });
    };
}



//update and editing  task 

export async function PUT(request, { params: { id } }) {
    try {
        //get data from the request
        const { newTitle: title, newDescription: description } = await request.json();
        const newtask = {
            title,
            description
        }

        //connect database 
        await mongoDBConnect()
        //use the model to update
        await Task.findByIdAndUpdate(id, newtask);
        return NextResponse.json({
            message: "task updated successfully",
            data: newtask
        }, {
            status: 201
        }
        )

    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to create a task",
                error
            }, {
            status: 500
        })

    }
}