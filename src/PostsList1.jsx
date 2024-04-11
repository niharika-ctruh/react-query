import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api/posts";

const PostsList1 = () => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchInterval: 1000,
    placeholderData: [{ id: 1, title: "Dummy data" }],
  });

  // const queries = useQueries({
  //   queries: (postsQuery?.data ?? []).map((post) => {
  //     return {
  //       queryKey: ["posts", post.id],
  //       queryFn: () => getPost(post.id),
  //     };
  //   }),
  // });

  // console.log(queries.map((post) => post.data));

  if (postsQuery.status === "pending") return <h1>Loading...</h1>;
  if (postsQuery.status === "error")
    return <h1>{JSON.stringify(postsQuery.error)}</h1>;

  return (
    <div>
      <h1>Posts List 1</h1>
      <ol>
        {postsQuery.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default PostsList1;
