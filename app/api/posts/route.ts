import { prisma } from '@/lib/prisma';
import { postSchema } from '@/lib/schemas/post';
import { verifySession } from '@/lib/session';
import { revalidatePath } from 'next/cache';

export async function GET() {
  try {
    const data = await prisma.post.findMany({
      where: { published: true },
      include: { author: { select: { name: true } } },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch posts',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
      },
    );
  }
}

export async function POST(req: Request) {
  try {
    const { id } = await verifySession();

    if (!id) {
      return new Response(
        JSON.stringify({
          error: 'Failed to create post',
          message: 'Unauthorized',
        }),
        {
          status: 401,
        },
      );
    }

    const body = await req.json();

    const parsed = postSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(JSON.stringify({ errors: parsed.error.flatten().fieldErrors }), {
        status: 400,
      });
    }

    const { title, content } = parsed.data;

    const data = await prisma.post.create({
      data: { title, content, authorId: id as string, published: true },
    });

    revalidatePath('/posts');

    return new Response(JSON.stringify(data), {
      status: 201,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Failed to create post',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
      },
    );
  }
}
