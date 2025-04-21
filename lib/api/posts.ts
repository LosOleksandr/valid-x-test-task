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

export { getPosts };
