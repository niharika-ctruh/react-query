export const POSTS = [
  { id: 1, title: "Post 1", userId: 2, body: "Body1" },
  { id: 2, title: "Post 2", userId: 1, body: "Body2" },
  { id: 3, title: "Post 3", userId: 1, body: "Body3" },
  { id: 4, title: "Post 4", userId: 2, body: "Body4" },
];

const USERS = [
  { id: 1, name: "User1" },
  { id: 2, name: "User2" },
];

const getPosts = () => {
  return new Promise((res) => setTimeout(res, 1000)).then(() => POSTS);
};

const getPost = (id) => {
  return new Promise((res) => setTimeout(res, 1000)).then(() =>
    POSTS.find((post) => post.id === id)
  );
};

const getUser = (id) => {
  return new Promise((res) => setTimeout(res, 1000)).then(() =>
    USERS.find((user) => user.id === id)
  );
};

const createPost = ({ title, body }) => {
  return new Promise((res) => setTimeout(res, 1000)).then(() => {
    const date = Date.now();
    const newPost = {
      title,
      body,
      userId: 1,
      id: date,
    };
    POSTS.push(newPost);
    return newPost;
  });
};

const getPostsPaginated = (page) => {
  return new Promise((res) => setTimeout(res, 1000)).then(() => {
    const post = POSTS.find((_, index) => index + 1 === page);
    const postIndex = POSTS.findIndex((_, index) => index + 1 === page);
    return {
      post: post,
      nextPage: postIndex !== POSTS.length - 1 ? page + 1 : undefined,
      previousPage: page > 1 ? page - 1 : undefined,
    };
  });
};

export { getPosts, getPost, getUser, createPost, getPostsPaginated };
