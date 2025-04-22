# 📘 Next.js + Prisma Starter

A full-stack Next.js app using [Prisma](https://www.prisma.io/) as the ORM and [PostgreSQL](https://www.postgresql.org/) as the database. Includes authentication, API routes, server components, and type-safe backend logic.

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Configure Environment Variables

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/dbname"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
SECRET_KEY=your_secret_key
```

## 🛠️ Prisma Setup
### 1. Generate Prisma Client
```bash
npx prisma generate
```
## 2. Create & Run Migrations
```bash
npx prisma migrate dev --name init
```
This will create your schema, run the migration, and seed your local database.

## 🧪 Development Server
```bash
npm run dev
# or
yarn dev
```


## 🔐 Authentication

### This project includes a basic authentication system. Make sure your SECRET_KEY is set in .env.


