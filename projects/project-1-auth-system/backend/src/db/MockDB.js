const POSTS = [
  {
    id: 6788,
    title: "Hi",
    description:
      "This is the Protected Content, and you are authorized to view this content",
  },
];

const getPosts = () => POSTS;
const addAPost = (post) => POSTS.push(post);
module.exports = {
  getPosts,
  addAPost,
};
