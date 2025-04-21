import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
  },
  {
    name: 'Bob',
    email: 'bob@prisma.io',
  },
  {
    name: 'Charlie',
    email: 'charlie@prisma.io',
    posts: {
      create: [
        {
          title: '10 Best Practices for Writing Clean Code in JavaScript',
          content: 'https://developer.mozilla.org/en-US/docs/Tools/clean_code_best_practices',
          published: true,
        },
        {
          title: 'Understanding Serverless Architecture with Vercel',
          content: 'https://vercel.com/docs/serverless-functions',
          published: true,
        },
        {
          title: 'The Future of Web Development: What’s Next for React',
          content: 'https://reactjs.org/blog/2023/04/05/react-new-features.html',
          published: true,
        },
        {
          title: 'How to Use TypeScript with Express.js for Better Type Safety',
          content: 'https://www.typescriptlang.org/docs/handbook/express-with-typescript.html',
          published: true,
        },
        {
          title: 'Getting Started with Docker for Developers',
          content: 'https://www.docker.com/get-started',
          published: true,
        },
        {
          title: 'Building Scalable APIs with GraphQL and Apollo Server',
          content: 'https://www.apollographql.com/docs/apollo-server/',
          published: true,
        },
        {
          title: 'A Guide to CSS Grid Layouts for Responsive Design',
          content: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
          published: true,
        },
        {
          title: 'Top 5 Tools Every DevOps Engineer Should Know',
          content: 'https://www.upguard.com/blog/devops-tools',
          published: true,
        },
        {
          title: 'How to Build Real-Time Apps with WebSockets and Node.js',
          content: 'https://socket.io/docs/v4/',
          published: true,
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
