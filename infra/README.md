Infra notes

MVP recommendations:
- Use Vercel for hosting the Next.js app and serverless functions
- Use Supabase for Postgres, auth, and file storage (free tier available)
- Store secrets in GitHub Actions and Vercel project settings (OPENAI_API_KEY, VERCEL_TOKEN, etc.)

Deployment:
- Push code to GitHub
- Connect repository in Vercel and set environment variables
- CI will run on PRs and deploy to Vercel on main
