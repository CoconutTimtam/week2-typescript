import axios from 'axios';
interface Post {
    id: number;
    title: string;
    body: string;
}

async function fetchPost(id: number): Promise<Post> {
    const response = await axios.get<Post>(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
}
console.log("yes sir");

console.log("no sir")