# Rarity Score Template

---

---

## Maintenance by Prof. NOTA Evergreen Standard

This repo is intended to stay evergreen while remaining production-safe.

### Runtime

- Node: 24.x (see `.nvmrc` and `package.json#engines`)
- Package manager: Yarn (lockfile: `yarn.lock`)

### Monthly Safe Updates (recommended)

1. Check what’s outdated:
   - `yarn outdated`
2. Upgrade safe (patch/minor) versions:
   - `yarn upgrade`
   - or upgrade specific packages shown as non-major
3. Verify:
   - `yarn audit --level moderate`
   - `yarn build`
4. Deploy (Vercel auto-deploy from `main`)

### Major Updates (quarterly / scheduled)

Major upgrades (Next/React/Tailwind) must be done one at a time with a dedicated PR and full testing.

---

---

Deployable Next.js template for building NFT rarity tools.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fmyreceiptt%2Frotybroi-rarity&project-name=rotybroi-rarity&repo-name=rotybroi-rarity)

## Features

- List NFTs from JSON data in `data/collection.json`.
- Filter NFTs by traits and attributes.
- Share NFTs by `token_id` with rarity score, rank, and price details.
- Automatic deployments when using Vercel.
- Responsive layouts across pages.

## Audience Needs

**Creators**: Save fees, sell collections, build community, generate hype, deploy easily.  
**Buyers**: Trade NFTs, buy low, sell high, collect drops.  
**Developers**: Clear documentation and easy iteration.

## Tech Stack

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Replace `data/collection.json` with your collection data (follows [OpenSea metadata standards](https://docs.opensea.io/docs/metadata-standards)). If you hit errors, open an issue.

3. Configure `config/index.js`:

   | Key                      | Description                                                | Example                       |
   | ------------------------ | ---------------------------------------------------------- | ----------------------------- |
   | `env`                    | Use `local` for local development, `prod` for deployments. | `prod`                        |
   | `LOCAL_API_URL`          | URL where the app runs locally.                            | `http://localhost:3000`       |
   | `API_URL`                | Your deployed Vercel URL.                                  | `https://your-app.vercel.app` |
   | `COLLECTION_NAME`        | OpenSea collection name.                                   | `OneDayPunks`                 |
   | `COLLECTION_TITLE`       | Page title (SEO).                                          | `Rarity Score`                |
   | `COLLECTION_DESCRIPTION` | OpenGraph description (SEO).                               | `Discover rarity scores`      |
   | `COLLECTION_IMG_LINK`    | OpenGraph image (SEO).                                     | `https://your-app/image.png`  |

   SEO helper: [HeyMeta.Com](https://www.heymeta.com/url/odp-rarity.vercel.app)

4. Run locally:

   ```bash
   yarn run dev
   ```

## Deployment

- Use the Vercel button above or deploy manually to your own Vercel project.
- Set `env` to `prod` and point `API_URL` to the deployed URL.

## Updating from Upstream

Pull the latest changes from the template repository:

```bash
git remote add upstream https://github.com/nishantrpai/rarity-score.git
git fetch upstream
git merge upstream/main
```

## Support

Having issues? Reach out on [Twitter](https://twitter.com/PaiNishant) or [Discord](https://discordapp.com/users/nishu#4633). This is a paid service.

## Past Deployments

- [Larp Island](https://larpisland.vercel.app) — [announcement tweet](https://twitter.com/larpisland/status/1504951132501643268)
- [Coffee Club NFTs](https://rarity.thecoffeeclub.io/) — [announcement tweet](https://twitter.com/CoffeeClubNFTs/status/1506071804074471425)

## How It Works

1. Exchange greetings and complete payment.
2. Share project details and GitHub access.
3. Validate/fix JSON, ensure everything works, and provide updates.
4. Deliver the rarity score site; you share feedback or a shoutout.

## References

- [Medium](https://raritytools.medium.com/ranking-rarity-understanding-rarity-calculation-methods-86ceaeb9b98c)
- [GitHub](https://github.com/punkscape/01-rarity-analyser-hackathon)

## Socials

Follow [\_rarityscore](https://twitter.com/_rarityscore) on Twitter for updates.

## Donate

- Solana: `9dPN7gdN9cyGhjiQn5gBU9DQDBxUJafvS873BcW3mpFT`
- Ethereum: `0x5A8064F8249D079f02bfb688f4AA86B6b2C65359`
- ENS: `nishantpai.eth`
