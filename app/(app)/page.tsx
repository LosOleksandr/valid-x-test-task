import PostsList from '@/components/posts-list';
import { Suspense } from 'react';

export const revalidate = 3600;

export default async function Home() {
  return (
    <div className="relative m-auto flex max-w-6xl flex-col p-4 font-mono">
      <h1 className="text-3xl font-bold">Latest Blogs</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostsList />
      </Suspense>
    </div>
  );
}
