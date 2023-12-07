import { NextResponse,NextRequest } from "next/server";
import { Todo } from "@/models/todo.model";
import { connect } from "@/dbConfig/dbConnect";

connect()
// api to get all users todos kept in todos array in mongodb

export async function POST(request:NextRequest){
    const {id}= await request.json();
    const todo = await Todo.find({user:id});
    return NextResponse.json(todo)
}
