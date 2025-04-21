import { prisma } from '@/lib/prisma';

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const numericId = parseInt(id);

  try {
    const post = await prisma.post.findUnique({
      where: { id: numericId },
      select: { authorId: true },
    });

    if (!post) {
      return new Response(JSON.stringify({ error: 'Post not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const similarPosts = await prisma.post.findMany({
      where: {
        authorId: post.authorId,
        id: { not: numericId },
        published: true,
      },
      include: {
        author: { select: { name: true } },
      },
      take: 3,
    });

    return new Response(JSON.stringify(similarPosts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch similar posts',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
