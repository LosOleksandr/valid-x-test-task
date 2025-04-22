// /schemas/post.ts
import { z } from 'zod';

export const postSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .max(250, { message: 'Title can be max of 250 characters' }),
  content: z.string().min(1, { message: 'Content is required' }),
});
