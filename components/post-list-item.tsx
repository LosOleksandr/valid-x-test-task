import { Post } from '@/types/post';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

type PostListItemProps = {
  post: Post;
};

const PostListItem: FC<PostListItemProps> = ({ post }) => {
  const { id, author, content, createdAt, title } = post;

  const formattedDate = new Date(createdAt).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <Link href={`/posts/${id}`}>
      <div className="group relative grid cursor-pointer grid-rows-[auto_auto_1fr] overflow-hidden rounded-xl border p-4">
        <h2 className="line-clamp-2 text-xl font-semibold">{title}</h2>

        <div className="my-4 flex items-center gap-4 text-slate-600">
          <Calendar className="h-6 w-6" />
          <small>{formattedDate}</small>
          <small className="ml-auto max-w-28 truncate">By {author.name}</small>
        </div>

        <p className="line-clamp-6 text-sm text-gray-700">{content}</p>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="absolute bottom-2 w-full text-center text-slate-100">Read full article</p>
        </div>
      </div>
    </Link>
  );
};

export default PostListItem;
