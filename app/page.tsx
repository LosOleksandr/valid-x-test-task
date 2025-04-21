import { getPosts } from '@/lib/api/posts';

export default async function Home() {
  const posts = await getPosts();

  console.log(posts);

  return (
    <div className="grid min-h-dvh place-items-center font-sans">
      <h1 className="text-3xl font-bold">Home</h1>
    </div>
  );
}
