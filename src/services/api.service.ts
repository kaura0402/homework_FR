
const baseURL = 'https://jsonplaceholder.typicode.com';

// export const userService = {
//     getAllUsers: async ():Promise<IUser[]>=> {
//         const users = await fetch(baseURL+'/users')
//         .then(value => value.json());
//         console.log(users);
//         return users;
//     }
// }
//
// export const postService = {
//     getAllPosts: async ():Promise<IPost[]>=> {
//         const posts = await fetch(baseURL+'/posts')
//         .then(value => value.json());
//         return posts;
//     }
// }
//
// export const commentService = {
//     getAllComments: async ():Promise<IComment[]>=> {
//         const comments = await fetch(baseURL+'/comments')
//         .then(value => value.json());
//         return comments;
//     }
// }

export const getAll = async <T,>(endpoint: string) => {
    const responseResalt = await fetch(`${baseURL}${endpoint}`)
        .then((response) => response.json());
    return responseResalt as T;
}