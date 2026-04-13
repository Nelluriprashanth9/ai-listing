AI Listing microservice (placeholder)

Purpose: stateless service that accepts product data and returns generated listing parts (title, bullets, description, keywords). In MVP this is implemented as Next.js API route (web/pages/api/generate.ts). Later split into its own serverless function or container.

Ideas:
- Use OpenAI for generation
- Add prompt templates and rate-limiting
- Add audit logs in Postgres/Supabase
