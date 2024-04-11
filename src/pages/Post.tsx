import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getPosts } from "../api/posts";

const Post = () => {
  const { id } = useParams();
  // const {
  //   status: statusPost,
  //   error: errorPost,
  //   data: post,
  // } = useQuery({
  //   queryKey: ["posts", parseInt(id!)],
  //   queryFn: () => getPost(id),
  // });

  // const { status: statusUser, data: user } = useQuery({
  //   enabled: post?.userId != null,
  //   queryKey: ["users", post?.userId],
  //   queryFn: () => getUser(post!.userId),
  // });

  // if (statusPost === "loading") return <h1>Loading...</h1>;
  // if (statusPost === "error") return <h1>{JSON.stringify(errorPost)}</h1>;

  // let userName = user?.name;
  // if (statusUser === "loading") userName = "Loading...";
  // if (statusUser === "error") userName = "Error";

  return (
    <div>
      <Link to="/">All Posts</Link>
      {/* <h1>
        {post.title}
        <br />
        <small>
          <Link to={`/users/${post.userId}`}>
            {statusUser === "success" && user.name}
          </Link>
        </small>
      </h1>
      <p>{post.body}</p> */}
    </div>
  );
};

export default Post;
