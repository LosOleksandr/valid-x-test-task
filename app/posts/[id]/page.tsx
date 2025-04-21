import PostDetais from '@/components/post-details';
import SimiliarPosts from '@/components/similiar-posts';
import { getPostById, getPosts } from '@/lib/api/posts';
import { Post } from '@/types/post';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const revalidate = 120;

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts: Post[] = await getPosts();

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

const PostDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="grid place-items-center gap-8 p-4 font-sans">
      <PostDetais post={post} />
      <Suspense fallback={<div>Loading...</div>}>
        <SimiliarPosts postId={id} />
      </Suspense>
    </div>
  );
};

export default PostDetailsPage;
