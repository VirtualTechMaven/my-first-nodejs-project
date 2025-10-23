const posts = [
    {id: 1, title: 'First Post', content: 'This is the content of the first post.' ,}
    , {id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
];

export const getAllPosts = () => posts;
export default getAllPosts
export const getPostById = (id) => posts.find(post => post.id === id);