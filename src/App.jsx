import { useQuery, useQueryClient } from "@tanstack/react-query";
import "./App.css";
import { useState } from "react";
import PostsList1 from "./PostsList1";
import PostsList2 from "./PostsList2";
import Post from "./Post";
import CreatePost from "./CreatePost";
import PostListPaginated from "./PostListPaginated";
import PostListInfinite from "./PostListInfinite";
import { getPost } from "./api/posts";

const POSTS = [
  {
    id: "1",
    title: "Post 1",
  },
  {
    id: "2",
    title: "Post 2",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);
  const queryClient = useQueryClient();
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  if (postQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }

  const onHoverPostOneLink = () => {
    queryClient.prefetchQuery({
      queryKey: ["posts", 1],
      queryFn: () => getPost(1),
    });
  };

  return (
    <div>
      <button onClick={() => setCurrentPage(<PostsList1 />)}>
        Posts List 1
      </button>
      <button onClick={() => setCurrentPage(<PostsList2 />)}>
        Posts List 2
      </button>
      <button
        onMouseEnter={onHoverPostOneLink}
        onClick={() => setCurrentPage(<Post id={1} />)}
      >
        First Post
      </button>
      <button
        onClick={() =>
          setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)
        }
      >
        New Post
      </button>
      <button onClick={() => setCurrentPage(<PostListPaginated />)}>
        Post List Paginated
      </button>
      <button onClick={() => setCurrentPage(<PostListInfinite />)}>
        Post List Infinite
      </button>
      <br />
      {currentPage}
    </div>
  );
}

const wait = (dur) => {
  return new Promise((res) => setTimeout(res, dur));
};

export default App;
