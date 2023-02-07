import React from "react";
import Counter from "./store/features/counter/Counter";
import PostList from "./store/features/post/PostList";

const App = () => {
  return (
    <>
      <Counter />
      <hr />
      <PostList />
    </>
  );
};

export default App;
