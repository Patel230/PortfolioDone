# CI/CD Setup with GitHub Actions

Automatic deployment pipeline for your portfolio.

## 🚀 How It Works

**Automated Deployments:**
- Push to `main` → Deploys to **Production** ✅
- Push to `develop` → Deploys to **Preview** ✅
- Create Pull Request → Deploys **PR Preview** ✅

**Pipeline Steps:**
1. **Test & Build** - Runs linting, tests, and builds the project
2. **Deploy** - Automatically deploys to Vercel based on branch
3. **Comment** - Adds deployment URL to PRs

---

## ⚙️ Setup Instructions

### Step 1: Get Vercel Token

```bash
# In your terminal, run:
vercel token create

# Copy the token (starts with something like: vercel_...)
# You'll need this for GitHub Secrets
```

### Step 2: Get Project IDs

Your Vercel project IDs are in `.vercel/project.json`:

```bash
cat .vercel/project.json
```

You'll see:
- `projectId` - Your Vercel Project ID
- `orgId` - Your Vercel Organization ID

### Step 3: Add GitHub Secrets

1. Go to your repository: **https://github.com/Patel230/PortfolioDone**
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these **3 secrets**:

#### Secret 1: VERCEL_TOKEN
- **Name:** `VERCEL_TOKEN`
- **Value:** Your token from Step 1
- Click **Add secret**

#### Secret 2: VERCEL_ORG_ID
- **Name:** `VERCEL_ORG_ID`
- **Value:** The `orgId` from `.vercel/project.json`
- Click **Add secret**

#### Secret 3: VERCEL_PROJECT_ID
- **Name:** `VERCEL_PROJECT_ID`
- **Value:** The `projectId` from `.vercel/project.json`
- Click **Add secret**

### Step 4: Push Workflow to GitHub

```bash
# Add the workflow file
git add .github/workflows/deploy.yml

# Commit
git commit -m "Add: CI/CD pipeline with GitHub Actions

- Auto-deploy main to production
- Auto-deploy develop to preview
- PR preview deployments
- Test and build validation"

# Push to GitHub
git push origin main
```

---

## 🔄 Workflow Details

### On Push to `main`:
```
✓ Checkout code
✓ Setup Node.js
✓ Install dependencies
✓ Run linter
✓ Run tests
✓ Build project
✓ Deploy to Vercel Production
```

### On Push to `develop`:
```
✓ Test & Build
✓ Deploy to Vercel Preview
```

### On Pull Request:
```
✓ Test & Build
✓ Deploy PR Preview
✓ Comment preview URL on PR
```

---

## 📊 Monitoring Deployments

### View Workflow Runs
https://github.com/Patel230/PortfolioDone/actions

### View Vercel Deployments
https://vercel.com/dashboard

---

## 🎯 Usage Examples

### Deploy to Production
```bash
# Work on develop
git checkout develop
git add .
git commit -m "Add: New feature"
git push origin develop

# Test on preview deployment
# If all good, merge to main:
git checkout main
git merge develop
git push origin main

# ✅ Automatically deploys to production!
```

### Create PR Preview
```bash
# Create feature branch
git checkout -b feature/new-animation
git add .
git commit -m "Add: Cool animation"
git push origin feature/new-animation

# Create PR on GitHub
# ✅ Automatic preview deployment!
# Comment will show preview URL
```

---

## 🛠️ Customize Workflow

Edit `.github/workflows/deploy.yml`:

### Add More Tests
```yaml
- name: Run unit tests
  run: npm test

- name: Run E2E tests
  run: npm run test:e2e
```

### Add Code Quality Checks
```yaml
- name: Check TypeScript
  run: npm run type-check

- name: Check formatting
  run: npm run format:check
```

### Add Notifications
```yaml
- name: Notify on Slack
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

---

## 🔒 Security Best Practices

✅ **DO:**
- Keep secrets in GitHub Secrets (never commit them)
- Use `secrets.` syntax in workflows
- Regularly rotate Vercel tokens
- Review workflow runs for issues

❌ **DON'T:**
- Commit `.vercel` folder (already in .gitignore)
- Share Vercel tokens publicly
- Push secrets to repository

---

## 📈 Benefits

**Speed:** Automatic deployments in ~1-2 minutes
**Safety:** Tests run before deployment
**Previews:** See changes before merging
**History:** Full deployment log in GitHub Actions
**Rollback:** Easy to revert via Vercel dashboard

---

## 🐛 Troubleshooting

### Workflow Fails - "VERCEL_TOKEN not found"
**Solution:** Make sure you added all 3 secrets in GitHub Settings

### Build Fails
**Solution:** Check workflow logs at:
https://github.com/Patel230/PortfolioDone/actions

### Deployment Slow
**Solution:** Normal for first deployment. Subsequent deploys are faster (~30s)

---

## 🎓 Quick Commands Reference

```bash
# View workflow status
gh workflow view

# List recent workflow runs
gh run list

# View specific run logs
gh run view <run-id> --log

# Manually trigger workflow
gh workflow run deploy.yml

# Get Vercel project info
vercel project ls
```

---

## ✅ Verification Checklist

After setup, verify:

- [ ] GitHub secrets are added (3 total)
- [ ] Workflow file is committed and pushed
- [ ] GitHub Actions tab shows workflow runs
- [ ] Push to `main` triggers production deployment
- [ ] Push to `develop` triggers preview deployment
- [ ] Pull requests get preview comments

---

**Your CI/CD pipeline is configured!** 🚀

Every push to `main` will now automatically deploy to production!
