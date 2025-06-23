# Rick & Morty Gallery - Technical Assessment

Hey there!

Thank you for the opportunity to work on this technical challenge. I really
enjoyed building this application as it touches on many fundamental aspects of
modern web development. The requirements were clear and well-structured, making
it a pleasure to implement.

## Live Application

**Deployed URL**:
[Media gallery app](https://media-gallery-app.vercel.app/login)

Feel free to explore the app - it's fully responsive and works great on both
mobile and desktop!

## Features Implemented

I've successfully implemented all the core requirements plus some additional
touches:

- Clean login experience with persistent sessions
- Optimized for mobile, tablet, and desktop viewports
- Efficient GraphQL data fetching from Rick & Morty API
- Direct linking support (e.g., `/gallery?page=5`)
- Click any character to view detailed information
- Next.js 15 App Router, TypeScript, Chakra UI
- Loading states, error handling, and intuitive navigation

## Technical Decisions & Trade-offs

### Authentication Approach

I implemented a localStorage-based authentication system for this demo. While
this works perfectly for the assessment requirements, **in a production
application**, I would implement:

- JWT tokens with secure HTTP-only cookies
- Proper session management with refresh tokens
- Backend authentication endpoints
- OAuth integration (Google, GitHub, etc.)

## 🚀 What I'd Do for Production

This was built as a 2-hour demo, but if I were launching this for real users,
here's what I'd add:

**Testing & Quality**  
Add proper testing with Jest and React testing library, implement TDD for new
features, and set up CI/CD pipelines.

**Performance**  
Use Next.js Image optimization, implement proper caching strategies, and
pre-fetch data on the server instead of client-side only.

**Type Safety**  
Generate TypeScript types directly from the GraphQL schema instead of writing
them manually, and add runtime validation.

**Authentication**  
Replace localStorage with proper JWT tokens, add OAuth providers like
Google/GitHub, and implement secure session management.

**User Experience**  
Add search/filtering for characters, implement dark mode, improve accessibility
with proper ARIA labels, and add loading skeletons.

**Monitoring**  
Integrate error tracking (Sentry), analytics, and performance monitoring for
production insights.

**Styling Architecture**  
For larger projects, I'd separate styling concerns from component logic using
styled-components or custom design tokens while keeping Chakra's accessibility
benefits.

## 🏗 Quick Architecture Notes

I kept the component structure clean with separated concerns - auth logic in
Context, UI components focused on presentation, and GraphQL queries isolated in
their own files.

## 💭 Personal Reflection

This was a fun challenge that allowed me to demonstrate full-stack thinking
while focusing on frontend implementation. I particularly enjoyed working with
the Rick & Morty GraphQL API - it's well-designed and provided excellent data to
work with.

The 2-hour time constraint was perfect for showcasing core functionality while
leaving room to discuss production improvements. I tried to balance feature
completeness with clean, maintainable code.

Looking forward to discussing the implementation details and hearing your
feedback!

---

## 🚀 Quick Start

```bash
# Clone and install
git clone [repository-url]
cd media-gallery-app
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

**Tech Stack**: Next.js, TypeScript, Apollo Client, Chakra UI, GraphQL, Vercel

---

Thanks again for the opportunity! Excited to discuss this further. 🎉
