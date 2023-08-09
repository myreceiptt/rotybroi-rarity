export const config = {
  env: "prod",
  LOCAL_API_URL: "localhost:3000",
  API_URL: "rotyrarity.endhonesa.com",
  COLLECTION_NAME: "The ROTY BROI NFTs Rarity Rank",
  COLLECTION_TITLE: "The ROTY BROI NFTs Rarity Rank",
  COLLECTION_DESCRIPTION:
    "The ROTY BROI is the NFT project by Prof. NOTA that initiate The Melting Land phenomenon. There will be no place to tread on, all we ever have is sinking.",
  COLLECTION_IMG_LINK:
    "https://lh3.googleusercontent.com/ZAxdNqLpwfZv3B9kd_9e_oqTjJHPPTre_5P8YC1nPQbYzsru2Goo90rRsqMXsa2MWU2aj3tvEb5zMfxy1ZdUqkmAhczktTCpso_e=s0",
  CONTRACT: {
    // if you're not sure, set CONTRACT: {}, will remove opensea link
    CHAIN: "matic", //possible values of ethereum, matic (polygon), klatyn, solana
    ADDRESS: "0x6d2723cb02c558cf67473dc959ac08737b6129a9", //note: for solana these values change, so currently not supported
  },
  WEIGHTS: {},
};
