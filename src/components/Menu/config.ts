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
    label: 'NFT Mint (Soon)',
    icon: 'NftIcon',
    href: '',
  },
  {
    label: 'Poocoin Chart',
    icon: 'TradeIcon',
    href: 'https://poocoin.app',
  },
  {
    label: 'DAO (Soon)',
    icon: 'GroupsIcon',
    href: '',
  },
  {
    label: ' Community',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/polyrise',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/polyrise_offic',
      },
    ],
  },
  
  {
    label: 'Audit (Soon)',
    icon: 'TicketIcon',
    href: '',
  },
  {
    label: 'KYC (Soon)',
    icon: 'TicketIcon',
    href: '',
  },
  
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      
      {
        label: 'Whitepaper (Soon)',
        href: '',
      },
   
    ],
  },

]

export default config
