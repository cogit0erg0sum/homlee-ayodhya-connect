# Homlee Ayodhya — Local Development

## How can I edit this code?

You can edit the project locally or using GitHub. To work locally you'll need Node.js (use nvm to manage versions).

Quick start:

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start dev server
npm run dev
```

If you prefer to edit in the cloud, GitHub Codespaces also works well.

## What technologies are used for this project?

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Deploy to Vercel, Netlify, or any static hosting that supports Vite builds. For Vercel, ensure `vercel.json` has `outputDirectory: "dist"` and the build command is `npm run build`.

## Can I connect a custom domain?

Yes — configure a custom domain in your hosting provider (for Vercel go to Project Settings > Domains).
