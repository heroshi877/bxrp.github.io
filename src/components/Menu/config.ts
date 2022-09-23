import { MenuEntry } from '@mozartfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/swap',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/pool',
  },
  {
    label: 'Pools (Soon)',
    icon: 'PoolIcon',
    href: '',
  },
  {
    label: 'NFT Mint (Soon)',
    icon: 'NftIcon',
    href: '',
  },
  {
    label: 'ICO (Soon)',
    icon: 'GroupsIcon',
    href: '',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: 'Whitepaper (Soon)',
        href: '',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/',
      },
    ],
  },
  {
    label: 'Audit (Soon)',
    icon: 'TicketIcon',
    href: '',
  },
  {
    label: ' Community',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/lunacash_official',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/lunacash_ofc',
      },
    ],
  },

]

export default config
