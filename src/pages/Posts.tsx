import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";

const Posts = () => {
  const {
    status,
    error,
    data: posts,
  } = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  // if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  return (
    <>
      <h1>Posts</h1>
      {/* <PostLists posts={posts} /> */}
    </>
  );
};

export default Posts;
