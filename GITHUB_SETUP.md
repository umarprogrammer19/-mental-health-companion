# Pushing MindCare to GitHub

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `mindcare`
4. Add description: "AI-powered mental health companion app"
5. Choose "Public" or "Private"
6. Do NOT initialize with README (we already have one)
7. Click "Create repository"

## Step 2: Initialize Git and Push

\`\`\`bash
# Navigate to your project directory
cd mindcare

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: MindCare mental health app with Firebase and Gemini AI"

# Add remote repository
git remote add origin https://github.com/yourusername/mindcare.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
\`\`\`

## Step 3: Add Collaborators (Optional)

1. Go to your repository on GitHub
2. Click "Settings" → "Collaborators"
3. Click "Add people"
4. Enter GitHub usernames and select permissions

## Step 4: Set Up GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

\`\`\`yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
\`\`\`

## Step 5: Add Secrets to GitHub (For CI/CD)

1. Go to repository Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add the following secrets:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

## Step 6: Create .gitignore

Make sure `.gitignore` includes:

\`\`\`
node_modules/
.env.local
.env.*.local
.next/
out/
build/
dist/
*.log
.DS_Store
\`\`\`

## Useful Git Commands

\`\`\`bash
# Check status
git status

# View commit history
git log

# Create a new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branches
git merge feature/new-feature

# Push changes
git push origin main

# Pull latest changes
git pull origin main
\`\`\`

## Troubleshooting

### "fatal: not a git repository"
\`\`\`bash
git init
\`\`\`

### "Permission denied (publickey)"
- Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
- Add to GitHub: Settings → SSH and GPG keys
- Use SSH URL instead of HTTPS

### "Everything up-to-date"
- Make sure you've made changes and committed them
- Check branch name matches

## Next Steps

1. Set up branch protection rules
2. Configure code review requirements
3. Set up automated testing
4. Configure deployment workflows
5. Add documentation
