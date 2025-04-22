'use client';

import { postSchema } from '@/lib/schemas/post';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MarkdownEditor from './markdown-editor';
import Button from './shared/button';
import Input from './shared/input';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState<{ title?: string[]; content?: string[] }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    const validation = postSchema.safeParse({ title, content });

    if (!validation.success) {
      setErrors(validation.error.flatten().fieldErrors);
      setIsSubmitting(false);
      return;
    }

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();

    if (!res.ok) {
      setErrors(data.errors || {});
    } else {
      setTitle('');
      setContent('');

      router.push('/dashboard');
    }

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto mt-10 flex max-w-2xl flex-col gap-4 rounded-xl border-2 px-6 py-12 pt-8 shadow-2xl"
    >
      <h1 className="text-center text-3xl font-bold">Create new post</h1>
      <Input
        name="title"
        id="title"
        label="Title"
        placeholder="Enter title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={errors.title}
      />
      <MarkdownEditor value={content} onChange={setContent} />
      <Button type="submit" isLoading={isSubmitting}>
        Create Post
      </Button>
    </form>
  );
};

export default CreatePostForm;
