AI Listing SaaS — MVP scaffold

Purpose: Help e-commerce sellers generate high-converting product listings (title, bullets, description, keywords) with human review.

Stack (MVP):
- Frontend: Next.js (web/)
- Serverless API: Next.js API routes (web/pages/api)
- Storage/Auth: Supabase (optional)
- Generation: OpenAI API (OPENAI_API_KEY)
- CI/CD: GitHub Actions + Vercel (set VERCEL_* secrets)

Quickstart:
1. Install Node 18+
2. cd web && npm install
3. Add secrets: OPENAI_API_KEY, VERCEL_TOKEN, VERCEL_PROJECT_ID, VERCEL_ORG_ID in GitHub
4. npm run dev (from project root runs web dev)

Next steps: push this folder to a new GitHub repo and connect Vercel for automatic deploys.
