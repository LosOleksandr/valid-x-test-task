'use client';

import { Highlighter } from 'lucide-react';
import React, { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from './shared/button';

type MarkdownEditorProps = {
  value: string;
  onChange: (v: string) => void;
};

const MarkdownEditor: FC<MarkdownEditorProps> = ({ value, onChange }) => {
  const [isMarkdownShown, setIsMarkdownShown] = useState(false);

  const toggleMarkdown = () => {
    setIsMarkdownShown((prev) => !prev);
  };

  return (
    <div className="relative">
      {isMarkdownShown ? (
        <div className="prose max-h-max min-h-36 min-w-full overflow-auto rounded border p-4">
          <ReactMarkdown>{value}</ReactMarkdown>
        </div>
      ) : (
        <textarea
          className="max-h-80 min-h-36 w-full rounded border p-2"
          value={value}
          name="content"
          id="content"
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write your post content here..."
        />
      )}
      <Button
        variant="outline"
        className="absolute top-2 right-2"
        title="Show Markdown"
        onClick={toggleMarkdown}
      >
        <Highlighter className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default MarkdownEditor;
