import { getPostsByAuthor } from '@/lib/api/posts';
import { FC } from 'react';
import PostListItem from './post-list-item';

type SimiliarPostsProps = {
  postId: string;
};

const SimiliarPosts: FC<SimiliarPostsProps> = async ({ postId }) => {
  const posts = await getPostsByAuthor(postId);

  return Boolean(posts) ? (
    <section className="flex w-full max-w-4xl flex-col items-start">
      <h2 className="text-3xl font-bold">More from this author</h2>
      <ul className="mt-4 grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  ) : null;
};

export default SimiliarPosts;
