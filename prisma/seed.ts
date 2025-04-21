import { Prisma, PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

const adminData: Omit<Prisma.UserCreateInput, 'password'> = {
  name: 'Charlie',
  email: 'charlie@prisma.io',
  posts: {
    create: [
      {
        title: '10 Best Practices for Writing Clean Code in JavaScript',
        content: `Clean code is not just about making code work; it's about making it readable, maintainable, and scalable. Use meaningful variable names, write small functions, and avoid deeply nested logic. Stick to a consistent coding style and always write tests to ensure stability.`,
        published: true,
      },
      {
        title: 'Understanding Serverless Architecture with Vercel',
        content: `Serverless computing lets you build and run applications without managing infrastructure. Vercel’s serverless functions allow instant deployment of scalable backends. This approach helps reduce operational overhead and supports instant global scalability.`,
        published: true,
      },
      {
        title: 'The Future of Web Development: What’s Next for React',
        content: `React continues to evolve with exciting new features like Server Components, Suspense, and Concurrent Rendering. These improvements aim to enhance performance and user experience while reducing complexity in building modern UIs.`,
        published: true,
      },
      {
        title: 'How to Use TypeScript with Express.js for Better Type Safety',
        content: `TypeScript brings static typing to JavaScript, which helps catch errors at compile time. When used with Express.js, it improves the developer experience through strong types for request/response objects, middleware, and route handlers.`,
        published: true,
      },
      {
        title: 'Getting Started with Docker for Developers',
        content: `Docker allows developers to package applications with all their dependencies into a standardized unit called a container. This ensures consistent environments across development, testing, and production, and simplifies deployment pipelines.`,
        published: true,
      },
      {
        title: 'Building Scalable APIs with GraphQL and Apollo Server',
        content: `GraphQL provides a flexible and efficient way to interact with APIs. Combined with Apollo Server, developers can create robust, scalable APIs that allow clients to request only the data they need, improving performance and usability.`,
        published: true,
      },
      {
        title: 'A Guide to CSS Grid Layouts for Responsive Design',
        content: `CSS Grid is a powerful layout system for creating responsive, two-dimensional layouts on the web. It simplifies the process of building complex, flexible layouts that adapt seamlessly to different screen sizes and orientations.`,
        published: true,
      },
      {
        title: 'Top 5 Tools Every DevOps Engineer Should Know',
        content: `DevOps engineers rely on a variety of tools to streamline workflows. Popular choices include Docker for containerization, Kubernetes for orchestration, Jenkins for CI/CD, Prometheus for monitoring, and Terraform for infrastructure as code.`,
        published: true,
      },
      {
        title: 'How to Build Real-Time Apps with WebSockets and Node.js',
        content: `WebSockets enable full-duplex communication channels over a single TCP connection. Using libraries like Socket.IO with Node.js, developers can build responsive real-time apps such as chats, live dashboards, or multiplayer games.`,
        published: true,
      },
    ],
  },
};
export async function main() {
  const hashedPassword = await hash('Admin1234', 10);

  await prisma.user.create({ data: { password: hashedPassword, ...adminData } });
}

main();
