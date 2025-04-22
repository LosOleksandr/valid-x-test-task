import { getPosts } from '@/lib/api/posts';
import React from 'react';
import PostListItem from './post-list-item';

const PostsList = async () => {
  const { posts, error } = await getPosts();

  if (error) {
    return <div className="font-semibold text-red-600">Error: {error}</div>;
  }

  return (
    <ul className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {posts.length > 0 ? (
        posts.map((post) => <PostListItem key={post.id} post={post} />)
      ) : (
        <h2>No Posts</h2>
      )}
    </ul>
  );
};

export default PostsList;
