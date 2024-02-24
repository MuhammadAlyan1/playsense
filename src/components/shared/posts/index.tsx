import React from 'react';
import { PostType } from '../../../types/PostType';
import Post from './Post';

interface PostsProps {
  posts: PostType[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <section className="posts">
      {posts.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </section>
  );
};

export default Posts;
