const JsonplaceholderUrls = 'https://jsonplaceholder.typicode.com';
export const JsonplaceholderUrl = {
    users: {
        allUsers: JsonplaceholderUrls + '/users',
        userById: (id: number) => {
            return JsonplaceholderUrls + `/users/${id}`;
        }
    },
    posts: {
        allPosts: JsonplaceholderUrls + '/posts',
        postById: (id: number) => {
            return JsonplaceholderUrls + `/posts/${id}`;
        }
    },
    comments: {
        allComments: JsonplaceholderUrls + '/comments',
        commentById: (id: number) => {
            return JsonplaceholderUrls + `/comments/${id}`;
        }
    }
};
const DummyjsonUrls = 'https://dummyjson.com';
export const DummyjsonUrl = {
    users: {
        allUsers: DummyjsonUrls + '/users',
        userById: (id: number) => {
            return DummyjsonUrls + `/users/${id}`;
        }
    },
    posts: {
        allPosts: DummyjsonUrls + '/posts',
        postById: (id: number) => {
            return DummyjsonUrls + `/posts/${id}`;
        }
    },
    comments: {
        allComments: DummyjsonUrls + '/comments',
        commentById: (id: number) => {
            return DummyjsonUrls + `/comments/${id}`;
        }
    }
};

