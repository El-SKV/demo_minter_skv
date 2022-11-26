// This configuration file keeps all UI constants and settings
// Specific to the minter dapp use case, these aren't important when you want to build something custom
// Added in one place for convenience

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'SKV Minter template',
  description:
    'A template to our futurs mint contracts',
  image: `${dappHostname}/og-image.png`,
};

// FAQ section data
export const faq = [
  {
    question: 'What is an ESDT on Elrond?',
    answer:
      'ESDT stands for Elrond Standard Digital Token. Custom tokens at native speed and scalability, without ERC20. The Elrond network natively supports the issuance of custom tokens, without the need for contracts such as ERC20, but addressing the same use-cases. And due to the native in-protocol support, transactions with custom tokens do not require the VM at all. In effect, this means that custom tokens are as fast and as scalable as the native EGLD token itself.',
  },
  {
    question: 'What is an NFT on Elrond?',
    answer:
      'The Elrond protocol introduces native NFT support by adding metadata and attributes on top of the already existing ESDT. This way, one can issue a semi-fungible token or a non-fungible token which is quite similar to an ESDT, but has a few more attributes, as well as an assignable URI. Once owning a quantity of a NFT/SFT, users will have their data store directly under their account, inside the trie.',
  },
  {
    question:
      'Why knowing the collection ticker and minter smart contract is essential?',
    answer:
      'It is crucial because these two prove that the NFTs come from a verified source. The NFT project should always show the collection ticker and minter smart contract to gain trust.',
  },
  {
    question: 'What is SKV Agency?',
    answer:
      'We are a WEB 3 studio providing tools and services on MultiversX and all the EVM chains.',
  },
];

// Roadmap section data
export const roadmap = [
  {
    title: 'Q2 2022',
    points: [
      'erdjs 10 integration and refactoring',
      'UI automated tests',
      'Ledger auth implementation',
      'Better UI and more useful hooks',
    ],
  },
  {
    title: 'Q3 2022',
    points: [
      'More usefull UI components',
      'More helpful docs and videos',
      'More functionality for logged in user',
      'Blog feature implementation',
    ],
  },
  {
    title: 'Q4 2022',
    points: [
      '...sky is the limit!',
    ],
  },
];

export const team = [
  {
    name: 'Tikapo',
    bio: 'Smart Contract programmer',
    imageUrl: '/tika.svg',
    socialMediaLinks: [
      'https://twitter.com/Tikapo1',

    ],
  },
  {
    name: 'Grimlins',
    bio: 'Front-end Developer',
    imageUrl: '/grim.svg',
    socialMediaLinks: ['https://twitter.com/DevsDeLyon'],
  },
  {
    name: 'Eluchaap',
    bio: 'Lead UX Designer',
    imageUrl: '/soso.svg',
    socialMediaLinks: [
      'https://twitter.com/eluchaap',
    ],
  },
];
