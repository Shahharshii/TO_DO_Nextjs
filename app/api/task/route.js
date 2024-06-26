//get all task

import mongoDBConnect from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server"

export async function GET(request) {
    try {

        //connect to the db
        await mongoDBConnect()
        //get the data using model
        const tasks = await Task.find()
        return NextResponse.json({
            message: "ok",
            data: tasks
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
        })
    }
}

//create task
export async function POST(request) {
    try {
        //get data from the request
        const { title, description } = await request.json();
        const newtask = {
            title,
            description
        }

        //connect database 
        await mongoDBConnect()
        //use the model to create
        await Task.create(newtask);
        return NextResponse.json({
            message: "task created successfully",
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



//delete a task
export async function DELETE(request) {
    try {
        //get id of the task which we want to delete
        const id = request.nextUrl.searchParams.get("id");

        //connect to db
        await mongoDBConnect()
        //use the model to delete
        await Task.findByIdAndDelete(id);
        //return the response
        return NextResponse.json({

            message: "task deleted successfully",
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to delete task",
                error
            }, {
            status: 500
        })
    }
}