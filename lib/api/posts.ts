import { Post } from '@prisma/client';
import api from '.';

const getPosts = async (): Promise<Post[]> => {
  try {
    const res = await api.get<Post[]>('/posts');
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { getPosts };
