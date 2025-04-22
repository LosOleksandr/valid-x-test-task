import PostsList from '@/components/posts-list';
import Button from '@/components/shared/button';
import Link from 'next/link';
import { Suspense } from 'react';

export const revalidate = 3600;

export default async function Dashboard() {
  return (
    <div className="relative m-auto flex max-w-6xl flex-col p-4 font-mono">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Link href={'/new-post'}>
          <Button variant="secondary">Add post</Button>
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PostsList />
      </Suspense>
    </div>
  );
}
