# GitHub Setup Guide

This guide will help you push your portfolio to GitHub.

## Prerequisites

1. **GitHub Account**: Create one at [github.com](https://github.com)
2. **Git Installed**: Verify with `git --version`

## Step 1: Initialize Git Repository

```bash
# Navigate to your project directory
cd /Users/lakshmanpatel/Desktop/ProjectAlpha/PortfolioDone

# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Premium 3D Portfolio with glassmorphism theme"
```

## Step 2: Create GitHub Repository

### Option A: Via GitHub Website

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `PortfolioDone`
3. Description: `Premium 3D Portfolio Website - Python Backend Developer`
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

### Option B: Via GitHub CLI (if installed)

```bash
gh repo create PortfolioDone --public --source=. --remote=origin --push
```

## Step 3: Connect Local Repository to GitHub

After creating the repository on GitHub, run:

```bash
# Add remote origin
git remote add origin https://github.com/Patel230/PortfolioDone.git

# Verify remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Verify Upload

Visit your repository: `https://github.com/Patel230/PortfolioDone`

You should see all your files including:
- ✅ README.md
- ✅ Source code
- ✅ package.json
- ✅ All components

## Common Git Commands

### Daily Workflow

```bash
# Check status
git status

# Add specific files
git add <filename>

# Add all changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

### Making Changes

```bash
# Pull latest changes from GitHub
git pull origin main

# Create a new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature

# Delete branch
git branch -d feature/new-feature
```

### Viewing History

```bash
# View commit history
git log

# View changes
git diff

# View remote URL
git remote -v
```

## Step 5: Deploy to Vercel (Optional)

### Via Vercel Website

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New Project**
3. Import your GitHub repository
4. Configure:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click **Deploy**

### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

Your portfolio will be live at: `https://your-portfolio.vercel.app`

## .gitignore Verification

Ensure these are in `.gitignore`:

```
# dependencies
/node_modules

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## Troubleshooting

### Issue: "Permission denied (publickey)"

**Solution**: Set up SSH keys or use HTTPS

```bash
# Use HTTPS instead
git remote set-url origin https://github.com/Patel230/PortfolioDone.git
```

### Issue: "Updates were rejected"

**Solution**: Pull before push

```bash
git pull origin main --rebase
git push origin main
```

### Issue: Large files rejected

**Solution**: Remove from git and add to .gitignore

```bash
git rm --cached <large-file>
echo "<large-file>" >> .gitignore
git commit -m "Remove large file"
git push origin main
```

## Repository Settings (Recommended)

After pushing to GitHub:

1. **Add Repository Description**
   - Go to repository settings
   - Add: "Premium 3D Portfolio Website - Python Backend Developer"

2. **Add Topics/Tags**
   - `portfolio`
   - `nextjs`
   - `threejs`
   - `typescript`
   - `3d`
   - `glassmorphism`
   - `framer-motion`
   - `gsap`

3. **Enable GitHub Pages** (optional)
   - Settings → Pages
   - Source: Deploy from branch `main`

4. **Set Repository Social Preview**
   - Upload a screenshot of your portfolio
   - Recommended size: 1280x640px

## Best Practices

1. **Commit Often**: Make small, frequent commits
2. **Write Clear Messages**: Use descriptive commit messages
3. **Use Branches**: Create branches for new features
4. **Pull Before Push**: Always pull latest changes before pushing
5. **Review Changes**: Use `git diff` before committing

## Useful Resources

- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf)
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

## Quick Start Commands (Copy & Paste)

```bash
# Navigate to project
cd /Users/lakshmanpatel/Desktop/ProjectAlpha/PortfolioDone

# Initialize and commit (ALREADY DONE!)
# git init
# git add .
# git commit -m "Initial commit: Premium 3D Portfolio"

# Connect to GitHub
git remote add origin https://github.com/Patel230/PortfolioDone.git
git branch -M main
git push -u origin main
```

That's it! Your portfolio is now on GitHub! 🎉
