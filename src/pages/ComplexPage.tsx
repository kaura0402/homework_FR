import {useAppDispatch, useAppSelector} from "../store/store.tsx";
import {useEffect} from "react";
import {userActions} from "../slices/UserSlice.ts";
import {postActions} from "../slices/PostSlice.ts";
import {commentActions} from "../slices/CommentSlice.ts";

export const ComplexPage = () => {
    const dispatch = useAppDispatch();
    const {userStoreSlice:{users},commentStoreSlice:{comments},postStoreSlice:{posts}} = useAppSelector(state => state);
    useEffect(() => {
        if(!users.length){
            dispatch(userActions.loadUsers);
        }
if(!posts.length){
            dispatch(postActions.loadPosts);
        }
if(!comments.length){
            dispatch(commentActions.loadComments);
        }

    }, [dispatch, users, posts, comments]);
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    {/* 1. Виводимо дані користувача */}
                    <h2>Користувач: {user.name} 👤</h2>

                    {/* 2. Фільтруємо та виводимо його пости */}
                    <h3>Пости:</h3>
                    {posts
                        .filter(post => post.userId === user.id)
                        .map(post => (
                            <div key={post.id} style={{ marginLeft: '20px' }}>
                                <h4>{post.title} 📝</h4>

                                {/* 3. Фільтруємо та виводимо коментарі до цього поста */}
                                <p>Коментарі:</p>
                                {comments
                                    .filter(comment => comment.postId === post.id)
                                    .map(comment => (
                                        <div key={comment.id} style={{ marginLeft: '40px' }}>
                                            💬 {comment.body}
                                        </div>
                                    ))}
                            </div>
                        ))}

                    {/* 4. Розділювач між користувачами */}
                    <hr />
                </div>
            ))}
        </div>
    );
};
