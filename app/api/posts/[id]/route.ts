import { prisma } from '@/lib/prisma';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing post ID' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const data = await prisma.post.findUnique({
      where: { id: parseInt(id) },
      include: {
        author: {
          select: { name: true },
        },
      },
    });

    if (!data) {
      return new Response(JSON.stringify({ error: 'Post not found' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch post',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
      },
    );
  }
}
