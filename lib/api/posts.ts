import { Post } from '@/types/post';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import api from '.';

const getPosts = cache(async (): Promise<{ posts: Post[]; error?: string }> => {
  try {
    const data = await api<Post[]>('/posts', { method: 'GET' });

    return { posts: data };
  } catch (error) {
    return {
      posts: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
});

const getPostById = cache(async (id: string): Promise<{ post: Post | null; error?: string }> => {
  try {
    const data = await api<Post>(`/posts/${id}`);

    if (!data) {
      notFound();
    }

    return { post: data };
  } catch (error) {
    return {
      post: null,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
});

const getPostsByAuthor = cache(async (id: string): Promise<{ posts: Post[]; error?: string }> => {
  try {
    const data = await api<Post[]>(`/posts//${id}/author`);
    return { posts: data };
  } catch (error) {
    return {
      posts: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
});

export { getPostById, getPosts, getPostsByAuthor };
