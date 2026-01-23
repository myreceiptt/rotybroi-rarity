# Rarity Score Template

---

---

## About This Repo

`rotybroi-rarity` powers a rarity and exploration site for **ROTY BROI**, an NFT project on **Polygon**. The app reads collection metadata, computes rarity scores, and provides filters and shareable token pages. The chain target is Polygon today, while remaining compatible with migration to any **EVM-compatible** blockchain.

### Purpose & Scope

- Publish a fast, user-friendly rarity explorer for the ROTY BROI collection.
- Provide deterministic rarity scoring and trait filtering from a versioned dataset.
- Keep deployment simple and reliable (Vercel-first) and maintenance production-safe.

### Blockchain

- Primary chain: **Polygon**
- Compatibility: **EVM-compatible**, with a migration-friendly posture for other EVM chains.

### Technology

- Framework: **Next.js** (Webpack build)
- UI: **React** + **Tailwind CSS**
- Data source: `data/collection.json` (collection metadata dataset)
- Tooling: **Yarn (modern)**, **ESLint**, **TypeScript**
- Deployment: **Vercel**

### How We Maintain Quality

- We treat the collection dataset as a “source of truth” and keep changes reviewable (diff-friendly JSON updates).
- We follow **Prof. NOTA Evergreen Standard**: safe monthly updates + scheduled quarterly majors, with Node **24.x** for Vercel compatibility.
- We validate every change with audit + lint + build, and document Evergreen runs under `EVERGREENING/completion-log-*.md`.

### Local Development

```bash
yarn install
yarn dev
```

Optional checks:

```bash
yarn lint
yarn build
```

---

---

## Maintenance by Prof. NOTA Evergreen Standard

This repo is intended to stay evergreen while remaining production-safe.

### Runtime

- Node: **24.x** (see `.nvmrc` and `package.json#engines`)
  - ~~example alternatives: 22.x / 20.x (adjust if platform requires)~~
- Package manager:
  - **Yarn** (lockfile: `yarn.lock`)
  - ~~PNPM (lockfile: `pnpm-lock.yaml`)~~
  - ~~NPM (lockfile: `package-lock.json`)~~
- Deploy target:
  - **Vercel**
  - ~~Netlify~~
  - ~~Self-hosted / Docker~~
  - ~~Other platform (document explicitly)~~

### Monthly Safe Updates (recommended)

1. Check what’s outdated:
   - `yarn outdated`
   - ~~pnpm outdated~~
   - ~~npm outdated~~
2. Upgrade safe (patch/minor) versions:
   - `yarn upgrade`
   - ~~pnpm update~~
   - ~~npm update~~
   - or upgrade specific packages shown as non-major
3. Verify:
   - `yarn audit --level moderate`
   - ~~pnpm audit~~
   - ~~npm audit~~
   - `yarn build`
   - ~~pnpm build~~
   - ~~npm run build~~
4. Deploy:
   - **Vercel auto-deploy from `main`**
   - ~~manual deploy according to platform workflow~~

### Major Updates (quarterly / scheduled)

Major upgrades (framework, runtime, or core tooling) must be done one at a time, with a dedicated PR and full testing.

Examples of major upgrades:

- Node major version
- Next.js / React major version
- Tailwind CSS major version
- Package manager major version
