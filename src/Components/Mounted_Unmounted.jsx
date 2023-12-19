import React, { useEffect, useState } from "react";
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
// callBack luôn được gọi sau khi component mounted
// Cleanup function luôn được gọi trước khi component unmounted
const tabs = ["posts", "comments", "albums", "photos", " todos", "users"];
function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  //1.useEffect(callback) :
  // - gọi callback mỗi khi component re-render => ít dùng
  // - Gọi callback sau khi component thêm element vào DOM
  // useEffect(() => {
  //     document.title = title; //update DOM
  // })

  //2.useEffect(callback, [])
  //- callBack is call one time after component mount
  // useEffect(() => {
  //      // Call API
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(posts => {
  //        setPosts(posts)
  //     }, [])
  // })
  //3.useEffect(callback, [dependencies])
  // Callbacks always call after dependencies change
  useEffect(() => {
    // Call API
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
        // if(window.scrollY >= 200) {
        //     //show
        //     setShowGoToTop(true);  
        // } else {
        //     setShowGoToTop(false);
        // } 
        setShowGoToTop(window.scrollY >= 200);
    }
    window.addEventListener('scroll', handleScroll)
    //cleanup function
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div>
        <h1>{width}</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "black",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}

        {showGoToTop && (
            <button
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20,
                }}
            >
                ^
            </button>
        )}
    </div>
  );
}

export default Content;
