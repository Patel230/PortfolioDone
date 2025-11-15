# Add Vercel Token - Final Step

## ✅ Status: 2/3 Secrets Added!

- ✅ `VERCEL_PROJECT_ID` - Added
- ✅ `VERCEL_ORG_ID` - Added
- ⏳ `VERCEL_TOKEN` - **Need to add this one**

---

## 🔑 Quick Setup - Add VERCEL_TOKEN

### Option 1: Via Vercel Dashboard (Recommended - 2 minutes)

1. **Go to Vercel Tokens page:**
   https://vercel.com/account/tokens

2. **Click "Create Token"**

3. **Token Name:** `GitHub-Actions-CI-CD`

4. **Scope:** Select `Full Account`

5. **Expiration:** `No Expiration` (or custom)

6. **Click "Create"**

7. **Copy the token** (it starts with `vercel_...`)

8. **Add to GitHub:**
   ```bash
   # Run this command and paste the token when prompted:
   gh secret set VERCEL_TOKEN
   ```

   OR go to:
   https://github.com/Patel230/PortfolioDone/settings/secrets/actions/new
   - Name: `VERCEL_TOKEN`
   - Value: (paste your token)
   - Click "Add secret"

---

### Option 2: Quick Command (if you have the token)

If you already have a Vercel token:

```bash
# Replace YOUR_TOKEN with your actual token
echo "YOUR_TOKEN_HERE" | gh secret set VERCEL_TOKEN
```

---

## ✅ Verify All Secrets

After adding the token, verify:

```bash
gh secret list
```

You should see:
- VERCEL_ORG_ID
- VERCEL_PROJECT_ID
- VERCEL_TOKEN

---

## 🚀 Test the CI/CD Pipeline

Once all secrets are added:

```bash
# Make a test change
echo "# CI/CD Pipeline Active ✅" >> README.md

# Commit and push
git add README.md
git commit -m "Test: CI/CD automatic deployment"
git push origin main
```

**Watch it deploy automatically:**
https://github.com/Patel230/PortfolioDone/actions

The workflow will:
1. ✓ Test & Build
2. ✓ Deploy to Production
3. ✓ Your site updates automatically!

---

## 🎯 Next Steps After Setup

### Daily Workflow:

```bash
# Work on develop
git checkout develop
git add .
git commit -m "Add: New feature"
git push origin develop
# ✅ Auto-deploys to preview

# When ready for production
git checkout main
git merge develop
git push origin main
# ✅ Auto-deploys to production
```

---

## 📊 Monitor Deployments

- **GitHub Actions:** https://github.com/Patel230/PortfolioDone/actions
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Production Site:** https://portfoliodone-gray.vercel.app

---

**Almost done! Just add the VERCEL_TOKEN and you're all set!** 🚀
