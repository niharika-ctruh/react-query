import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPostsPaginated } from "./api/posts";

const PostListPaginated = () => {
  const [page, setPage] = useState(1);
  const { status, error, data, isPreviousData } = useQuery({
    queryKey: ["posts", { page }],
    keepPreviousData: true,
    queryFn: () => getPostsPaginated(page),
  });

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  return (
    <>
      <h1>
        Post List Paginated
        <br />
        <small>{isPreviousData && "Previous Data"}</small>
      </h1>
      {/* {data.posts.map((post) => ( */}
      <div key={data.post.id}>{data.post.title}</div>
      {/* ))} */}
      {data.previousPage && (
        <button onClick={() => setPage(data.previousPage)}>Previous</button>
      )}
      {data.nextPage && (
        <button onClick={() => setPage(data.nextPage)}>Next</button>
      )}
    </>
  );
};

export default PostListPaginated;
