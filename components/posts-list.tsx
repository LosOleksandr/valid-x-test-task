import { getPosts } from '@/lib/api/posts';
import React from 'react';
import PostListItem from './post-list-item';

const PostsList = async () => {
  const posts = await getPosts();
  return (
    <ul className="mt-8 grid w-full grid-cols-3 gap-4">
      {posts && posts.length > 0 ? (
        posts.map((post) => <PostListItem key={post.id} post={post} />)
      ) : (
        <h2>No Posts</h2>
      )}
    </ul>
  );
};

export default PostsList;
