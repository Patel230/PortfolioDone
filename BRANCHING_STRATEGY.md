# Branching Strategy - Two Branch Workflow

This repository uses a **two-branch workflow** for organized development.

## 📋 Branch Structure

```
main        → Production-ready code (stable releases)
develop     → Active development (latest features)
```

## 🌿 Branches Explained

### `main` Branch
- **Purpose**: Production-ready, stable code
- **Protection**: Only merge tested, stable code
- **Deployment**: Auto-deploys to production (Vercel)
- **Updates**: Only from `develop` branch via pull requests

### `develop` Branch
- **Purpose**: Active development and testing
- **Usage**: Day-to-day development happens here
- **Testing**: Test new features before merging to `main`
- **Updates**: Can commit directly or via feature branches

## 🚀 Initial Setup (First Time)

```bash
# Push both branches to GitHub
cd /Users/lakshmanpatel/Desktop/ProjectAlpha/PortfolioDone

# Push main branch
git push -u origin main

# Switch to develop and push
git checkout develop
git push -u origin develop

# Switch back to main
git checkout main
```

## 💻 Daily Workflow

### For New Features or Changes

```bash
# 1. Switch to develop branch
git checkout develop

# 2. Make your changes
# (edit files, add features, fix bugs)

# 3. Stage and commit
git add .
git commit -m "Add: Description of changes"

# 4. Push to develop
git push origin develop

# 5. Test on develop branch
# Make sure everything works!
```

### When Ready for Production

```bash
# 1. Make sure develop is working perfectly
git checkout develop
# Test thoroughly!

# 2. Switch to main
git checkout main

# 3. Merge develop into main
git merge develop

# 4. Push to main (production)
git push origin main

# 5. Switch back to develop for next changes
git checkout develop
```

## 🔄 Common Commands

### Check Current Branch
```bash
git branch
# * indicates current branch
```

### Switch Branches
```bash
# Switch to main
git checkout main

# Switch to develop
git checkout develop
```

### View All Branches
```bash
git branch -a
```

### Sync with GitHub
```bash
# Pull latest changes from develop
git checkout develop
git pull origin develop

# Pull latest changes from main
git checkout main
git pull origin main
```

## 📊 Workflow Diagram

```
develop branch:
  ↓
  [Feature 1] → commit → push
  ↓
  [Feature 2] → commit → push
  ↓
  [Test Everything] ✓
  ↓
  [Merge to main]
  ↓
main branch:
  → Deploy to Production 🚀
```

## 🎯 Best Practices

### DO ✅
- Work on `develop` for new features
- Test thoroughly on `develop` before merging to `main`
- Keep `main` branch stable and production-ready
- Write clear commit messages
- Pull before you push

### DON'T ❌
- Don't commit directly to `main` (use `develop` first)
- Don't merge untested code to `main`
- Don't force push (`git push -f`) unless absolutely necessary
- Don't merge `main` into `develop` (only the other way around)

## 📝 Commit Message Convention

Use clear, descriptive commit messages:

```bash
# Good examples:
git commit -m "Add: OpenVPN integration project"
git commit -m "Fix: Navigation hover effect on mobile"
git commit -m "Update: Skills section with AI technologies"
git commit -m "Refactor: Glassmorphism card components"

# Prefixes:
# Add: New features
# Fix: Bug fixes
# Update: Changes to existing features
# Refactor: Code restructuring
# Docs: Documentation updates
# Style: UI/CSS changes
```

## 🔀 Feature Branches (Optional - Advanced)

For larger features, create temporary feature branches:

```bash
# Create feature branch from develop
git checkout develop
git checkout -b feature/new-animation

# Work on feature
git add .
git commit -m "Add: New scroll animation"

# Merge back to develop
git checkout develop
git merge feature/new-animation

# Delete feature branch
git branch -d feature/new-animation

# Push develop
git push origin develop
```

## 🚨 Emergency Hotfix (Direct to Main)

Only for critical production bugs:

```bash
# Create hotfix branch from main
git checkout main
git checkout -b hotfix/critical-bug

# Fix the bug
git add .
git commit -m "Fix: Critical production bug"

# Merge to main
git checkout main
git merge hotfix/critical-bug
git push origin main

# Also merge to develop
git checkout develop
git merge hotfix/critical-bug
git push origin develop

# Delete hotfix branch
git branch -d hotfix/critical-bug
```

## 📦 Release Process

When `develop` is ready for production:

```bash
# 1. Ensure you're on develop with latest changes
git checkout develop
git pull origin develop

# 2. Run tests and verify everything works
npm run build
npm run dev
# Test manually!

# 3. Switch to main
git checkout main
git pull origin main

# 4. Merge develop into main
git merge develop

# 5. Tag the release (optional)
git tag -a v1.0.0 -m "Release version 1.0.0"

# 6. Push to GitHub
git push origin main
git push origin --tags

# 7. Switch back to develop
git checkout develop
```

## 🔐 GitHub Branch Protection (Recommended)

After pushing both branches, set up protection on GitHub:

1. Go to: `https://github.com/Patel230/PortfolioDone/settings/branches`
2. Add rule for `main`:
   - ✅ Require pull request before merging
   - ✅ Require status checks to pass
3. This prevents accidental direct commits to `main`

## 📋 Quick Reference

| Task | Command |
|------|---------|
| Check current branch | `git branch` |
| Switch to develop | `git checkout develop` |
| Switch to main | `git checkout main` |
| Create new branch | `git checkout -b branch-name` |
| Merge develop to main | `git checkout main && git merge develop` |
| Push current branch | `git push origin HEAD` |
| Pull latest changes | `git pull origin <branch-name>` |
| Delete local branch | `git branch -d branch-name` |
| View branch history | `git log --oneline --graph --all` |

## 🎓 Learning Resources

- [Git Branching Basics](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Atlassian Git Workflows](https://www.atlassian.com/git/tutorials/comparing-workflows)

---

**Current Branches:**
- ✅ `main` - Production ready
- ✅ `develop` - Active development

**Workflow:**
`develop` (work here) → test → merge to → `main` (production)

Happy coding! 🚀
