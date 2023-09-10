import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ fetch }) => {

    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
 
    return await data.json();

}