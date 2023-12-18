// Mounted & Unmounted
// useEffects
// userEffects when Side effects:
/**
 * userEffects when Side effects:
 * update DOM
 * Call API
 * Listen DOM events: Scroll / Resize
 * Cleanup: remove listeners/unsubscribe/clear timer
 */
/*
    Events: Add / remove Events listeners
    Observers pattern: subscribe / unsubscribe
    Closures
    Timer: setInterval, setTimeout, clearInterval, clearTimeout
    useState
    Mounted/Unmounted
    === toán tử so sánh
    Call API
*/
import React, {useEffect, useState} from 'react';
// callBack luôn được gọi sau khi component mounted
function Content(){
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    //1.useEffect(callback) : 
    // - gọi callback mỗi khi component re-render => ít dùng
    // - Gọi callback sau khi component thêm element vào DOM
    // useEffect(() => {
    //     document.title = title; //update DOM
    // })
   
    //2.useEffect(callback, [])
    //- Chỉ gọi callBack một lần sau khi component mount
    useEffect(() => {
        //document.title = title; //update DOM
         // Call API
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
           setPosts(posts)
        }, [])
    })
    //3.useEffect(callback, [dependencies])

    return (
        <div>
            <h1>Hi anh em Luv</h1>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (        
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;