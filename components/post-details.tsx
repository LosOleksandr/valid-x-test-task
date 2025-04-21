import { Post } from '@/types/post';
import { Calendar } from 'lucide-react';
import React, { FC } from 'react';

type PostDetailsProps = {
  post: Post;
};

const PostDetails: FC<PostDetailsProps> = ({ post }) => {
  const { title, content, createdAt, author } = post;

  const formattedDate = new Date(createdAt).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <article className="m-auto mx-auto max-w-4xl space-y-6 rounded-xl border p-6 shadow-sm">
      <h1 className="text-3xl font-bold">{title}</h1>

      <div className="flex items-center gap-4 text-sm text-slate-600">
        <Calendar className="h-4 w-4" />
        <span>{formattedDate}</span>
        <span className="ml-auto">
          By <span className="font-medium">{author.name}</span>
        </span>
      </div>

      <div className="prose prose-sm max-w-none text-gray-800">
        <p>{content}</p>
      </div>
    </article>
  );
};

export default PostDetails;
