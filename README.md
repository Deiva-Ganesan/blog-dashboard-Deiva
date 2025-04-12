Blog Dashboard

Repository: GitHub - https://github.com/Deiva-Ganesan/blog-dashboard-Deiva

Live Demo: Vercel - https://blog-dashboard-deiva-urbio-jwf7kidzo-deiva-ganesans-projects.vercel.app/

Blog Dashboard

A simple blog dashboard built with Next.js, Material-UI, TypeScript, and RTK Query, using MockAPI.io as a backend. Users can:

View a list of blog posts

Read individual post details

Add new posts via a form

🔧 Features

List Posts: Fetch and display posts from MockAPI.io

Post Detail: Dynamic routing to view full post content

Add Post: Form to create new posts, with client-side cache invalidation

Responsive UI: Built with Material-UI for mobile and desktop

Theming: Custom primary/secondary colors via MUI theme

Type Safety: Full TypeScript interfaces for posts and API

State Management: RTK Query for data fetching, caching, and mutations

🛠 Tech Stack

Next.js (Pages Router)

React + TypeScript

Redux Toolkit & RTK Query

Material-UI (MUI)

MockAPI.io (mock REST backend)

🚀 Getting Started

Prerequisites

Node.js (v14 or newer)

npm (v6 or newer)

Installation

Clone the repo

git clone https://github.com/your-username/blog-dashboard.git
cd blog-dashboard

Install dependencies

npm install

Set up environment variables

Create a file named .env.local in the project root.

Add your MockAPI base URL:

NEXT_PUBLIC_API_URL=https://<your-subdomain>.mockapi.io/api/v1

Run the development server

npm run dev

Open http://localhost:3000 in your browser.

📂 Folder Structure

blog-dashboard/
├── app/
│   └── store.ts          # Redux store configuration
├── components/
│   ├── PostCard.tsx      # Card to display post summary
│   └── PostForm.tsx      # Form to create a new post
├── pages/
│   ├── _app.tsx          # App wrapper (Redux, MUI Theme)
│   ├── index.tsx         # Home page: list posts
│   ├── new.tsx           # New post page
│   └── posts/[id].tsx    # Dynamic post detail page
├── services/
│   └── postsApi.ts       # RTK Query API slice
├── styles/
│   └── globals.css       # Global styles (optional)
├── theme/
│   └── index.ts          # MUI theme configuration
├── types/
│   └── Post.ts           # TypeScript interface for Post
├── .env.local            # Environment variables
├── package.json
└── README.md

⚙️ Environment Variables

Name

Description

NEXT_PUBLIC_API_URL

Base URL for MockAPI.io REST API

Note: Variables prefixed with NEXT_PUBLIC_ are exposed to the browser in Next.js.

📜 Available Scripts

npm run dev - Start the development server

npm run build - Build the app for production

npm run start - Start the production server

💡 Design Decisions

Pages Router was chosen for simplicity and familiarity.

RTK Query handles data fetching, caching, and mutations with minimal boilerplate.

Client‑side fetching allows fast iteration; SSR/SSG could be added for performance.

MockAPI.io provides persistent mock data without a custom backend.

MUI Theming ensures consistent design and easy customization.

🛠 Challenges & Solutions

Data Persistence: JSONPlaceholder didn’t persist new posts; switched to MockAPI.io.

Dynamic Routing: Ensured correct string-based IDs for RTK Query endpoints.

Environment Config: Used .env.local for the API URL, restarted Next.js to load env vars.

🚀 Future Improvements

Edit & Delete posts via RTK Query mutations.

Pagination / Infinite Scroll for the post list.

SSR/SSG for faster first load and SEO.

Authentication (e.g., NextAuth.js) to restrict post creation.

Unit & Integration Tests with Jest and React Testing Library.

Deployment on Vercel or Netlify with preview URLs.


