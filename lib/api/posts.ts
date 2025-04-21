import { Post } from '@/types/post';
import { cache } from 'react';
import api from '.';

const getPosts = cache(async (): Promise<Post[]> => {
  try {
    const res = await api.get<Post[]>('/posts');
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
});

const getPostById = cache(async (id: string): Promise<Post | null> => {
  try {
    const res = await api.get<Post>(`/posts/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
});

const getPostsByAuthor = cache(async (id: string): Promise<Post[]> => {
  try {
    const res = await api.get<Post[]>(`/posts//${id}/author`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
});

export { getPostById, getPosts, getPostsByAuthor };
